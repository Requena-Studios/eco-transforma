# encoding-scan.ps1
# Lista o encoding detectado (por BOM ou validação UTF-8) de arquivos alvo.
# Ignora recursivamente: node_modules e .vs
# Saída por arquivo: [HH:mm:ss] <Encoding>  -  <FullPath>

param(
  [string]$Root = ".",
  [string[]]$Ext = @("*.ts","*.html","*.css","*.json","*.md"),
  [int]$HeartbeatSeconds = 5
)

function TS { (Get-Date).ToString("HH:mm:ss") }

function Get-EncodingInfo {
  param([byte[]]$Bytes)

  # BOMs
  if ($Bytes.Length -ge 3 -and $Bytes[0] -eq 0xEF -and $Bytes[1] -eq 0xBB -and $Bytes[2] -eq 0xBF) { return @{ Encoding="UTF-8 (BOM)"; Bom=$true; DotNet=[System.Text.Encoding]::UTF8 } }
  if ($Bytes.Length -ge 2 -and $Bytes[0] -eq 0xFF -and $Bytes[1] -eq 0xFE) { return @{ Encoding="UTF-16 LE (BOM)"; Bom=$true; DotNet=[System.Text.Encoding]::Unicode } }
  if ($Bytes.Length -ge 2 -and $Bytes[0] -eq 0xFE -and $Bytes[1] -eq 0xFF) { return @{ Encoding="UTF-16 BE (BOM)"; Bom=$true; DotNet=[System.Text.Encoding]::BigEndianUnicode } }
  if ($Bytes.Length -ge 4 -and $Bytes[0] -eq 0xFF -and $Bytes[1] -eq 0xFE -and $Bytes[2] -eq 0x00 -and $Bytes[3] -eq 0x00) { return @{ Encoding="UTF-32 LE (BOM)"; Bom=$true; DotNet=[System.Text.Encoding]::UTF32 } }
  if ($Bytes.Length -ge 4 -and $Bytes[0] -eq 0x00 -and $Bytes[1] -eq 0x00 -and $Bytes[2] -eq 0xFE -and $Bytes[3] -eq 0xFF) { return @{ Encoding="UTF-32 BE (BOM)"; Bom=$true; DotNet=[System.Text.Encoding]::UTF32 } }

  # UTF-8 sem BOM (estrito)
  $utf8Strict = [System.Text.UTF8Encoding]::new($false, $true)
  try { [void]$utf8Strict.GetString($Bytes); return @{ Encoding="UTF-8 (no BOM)"; Bom=$false; DotNet=[System.Text.Encoding]::UTF8 } }
  catch { return @{ Encoding="Windows-1252 (ANSI, sem BOM)"; Bom=$false; DotNet=[System.Text.Encoding]::GetEncoding(1252) } }
}

Write-Host "[$(TS)] Iniciando varredura em '$Root' ..." -ForegroundColor Cyan

# Coleta os arquivos-alvo por extensão
$files = @()
foreach ($pattern in $Ext) { $files += Get-ChildItem -Path $Root -Recurse -File -Filter $pattern }

# Exclui node_modules e .vs
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

Write-Host "[$(TS)] Arquivos encontrados: $total" -ForegroundColor Green

# Processa e loga por arquivo
$summary = @{}
$lastBeat = Get-Date

for ($i=0; $i -lt $total; $i++) {
  $f = $files[$i]
  Write-Progress -Activity "Analisando encodings" -Status "$($i+1)/$total" -PercentComplete ((($i+1)/$total)*100)

  $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
  $info  = Get-EncodingInfo -Bytes $bytes

  # acumula resumo por encoding
  if (-not $summary.ContainsKey($info.Encoding)) { $summary[$info.Encoding] = 0 }
  $summary[$info.Encoding]++

  # cor por encoding
  $color = switch ($info.Encoding) {
    "UTF-8 (no BOM)" { "Green" }
    "UTF-8 (BOM)"    { "DarkGreen" }
    default          { "Yellow" }
  }

  Write-Host ("[$(TS)] {0,-18} - {1}" -f $info.Encoding, $f.FullName) -ForegroundColor $color

  # Heartbeat
  if ((Get-Date) - $lastBeat -ge [TimeSpan]::FromSeconds($HeartbeatSeconds)) {
    Write-Host "[$(TS)] Progresso: $($i+1)/$total ..." -ForegroundColor DarkGray
    $lastBeat = Get-Date
  }
}

Write-Progress -Activity "Analisando encodings" -Completed
Write-Host "[$(TS)] Resumo:" -ForegroundColor Cyan
$summary.GetEnumerator() | Sort-Object Name | ForEach-Object {
  $c = switch ($_.Name) { "UTF-8 (no BOM)" { "Green" } "UTF-8 (BOM)" { "DarkGreen" } default { "Yellow" } }
  Write-Host (" - {0,-24}: {1,5}" -f $_.Name, $_.Value) -ForegroundColor $c
}

Read-Host "Pressione ENTER para encerrar..."
