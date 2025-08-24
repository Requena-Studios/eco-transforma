# encoding-fix-to-utf8.ps1
# Converte arquivos alvo para UTF-8 sem BOM quando NÃO forem UTF-8 válidos.
# Ignora recursivamente: node_modules e .vs
# Logs coloridos, progresso, heartbeat e pausa final.

param(
  [string]$Root = ".",
  [string[]]$Ext = @("*.ts","*.html","*.css","*.json","*.md"),
  [switch]$WhatIf,
  [int]$HeartbeatSeconds = 5
)

function TS { (Get-Date).ToString("HH:mm:ss") }

function Detect-Encoding {
  param([byte[]]$Bytes)

  if ($Bytes.Length -ge 3 -and $Bytes[0] -eq 0xEF -and $Bytes[1] -eq 0xBB -and $Bytes[2] -eq 0xBF) { return [System.Text.Encoding]::UTF8 }
  if ($Bytes.Length -ge 2 -and $Bytes[0] -eq 0xFF -and $Bytes[1] -eq 0xFE) { return [System.Text.Encoding]::Unicode }               # UTF-16 LE
  if ($Bytes.Length -ge 2 -and $Bytes[0] -eq 0xFE -and $Bytes[1] -eq 0xFF) { return [System.Text.Encoding]::BigEndianUnicode }     # UTF-16 BE
  if ($Bytes.Length -ge 4 -and $Bytes[0] -eq 0xFF -and $Bytes[1] -eq 0xFE -and $Bytes[2] -eq 0x00 -and $Bytes[3] -eq 0x00) { return [System.Text.Encoding]::UTF32 }
  if ($Bytes.Length -ge 4 -and $Bytes[0] -eq 0x00 -and $Bytes[1] -eq 0x00 -and $Bytes[2] -eq 0xFE -and $Bytes[3] -eq 0xFF) { return [System.Text.Encoding]::UTF32 }

  $utf8Strict = [System.Text.UTF8Encoding]::new($false, $true)
  try { [void]$utf8Strict.GetString($Bytes); return [System.Text.Encoding]::UTF8 } catch { }

  return [System.Text.Encoding]::GetEncoding(1252) # ANSI fallback
}

$utf8NoBom = [System.Text.UTF8Encoding]::new($false)

Write-Host "[$(TS)] Iniciando conversão para UTF-8 (sem BOM) em '$Root' ..." -ForegroundColor Cyan

$files = @()
foreach ($pattern in $Ext) { $files += Get-ChildItem -Path $Root -Recurse -File -Filter $pattern }
$files = $files | Where-Object {
  $_.FullName -notmatch '\\node_modules\\' -and $_.FullName -notmatch '\\\.vs\\'
}
$files = $files | Sort-Object FullName

$total = $files.Count
if ($total -eq 0) {
  Write-Host "[$(TS)] Nenhum arquivo encontrado (pós-filtro)." -ForegroundColor Yellow
  Read-Host "Pressione ENTER para encerrar..."
  exit 0
}

Write-Host "[$(TS)] Arquivos alvo: $total" -ForegroundColor Green

$converted = 0
$skipped = 0
$lastBeat = Get-Date

for ($i=0; $i -lt $total; $i++) {
  $f = $files[$i]
  Write-Progress -Activity "Convertendo encodings" -Status "$($i+1)/$total" -PercentComplete ((($i+1)/$total)*100)

  $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
  $srcEnc = Detect-Encoding -Bytes $bytes

  if ($srcEnc.WebName -eq "utf-8") {
    $skipped++
    Write-Host ("[$(TS)] (skip) UTF-8      - {0}" -f $f.FullName) -ForegroundColor DarkGray
  } else {
    $text = $srcEnc.GetString($bytes)

    if ($WhatIf) {
      Write-Host ("[$(TS)] [DRY] {0,-10} -> utf-8  - {1}" -f $srcEnc.WebName, $f.FullName) -ForegroundColor Yellow
    } else {
      [System.IO.File]::WriteAllText($f.FullName, $text, $utf8NoBom)
      Write-Host ("[$(TS)] FIX  {0,-10} -> utf-8  - {1}" -f $srcEnc.WebName, $f.FullName) -ForegroundColor Green
      $converted++
    }
  }

  if ((Get-Date) - $lastBeat -ge [TimeSpan]::FromSeconds($HeartbeatSeconds)) {
    Write-Host "[$(TS)] Progresso: $($i+1)/$total | Convertidos: $converted | Pulados: $skipped" -ForegroundColor DarkGray
    $lastBeat = Get-Date
  }
}

Write-Progress -Activity "Convertendo encodings" -Completed
Write-Host "[$(TS)] Conversão concluída." -ForegroundColor Cyan
Write-Host ("   Convertidos : {0}" -f $converted) -ForegroundColor Green
Write-Host ("   Pulados     : {0}" -f $skipped) -ForegroundColor Yellow

if ($WhatIf) {
  Write-Host "[ATENÇÃO] Modo simulação (nenhum arquivo foi modificado). Remova -WhatIf para aplicar de verdade." -ForegroundColor Yellow
}

Read-Host "Pressione ENTER para encerrar..."
