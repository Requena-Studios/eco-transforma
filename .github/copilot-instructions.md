# 🤖 GitHub Copilot Custom Instructions - EcoTransforma

## Visão Geral do Projeto

**EcoTransforma** é um PWA educativo para ensinar reciclagem e sustentabilidade para crianças da EMEB Deputado Ranieri Mazzilli em Jundiaí-SP.

### Tecnologias Principais
- **Frontend:** TypeScript, Vite, Vanilla JS (sem frameworks)
- **PWA:** vite-plugin-pwa, Workbox
- **Estilo:** CSS puro com variáveis CSS customizadas
- **Build:** Vite 7+, TypeScript 5.8+

## 🎯 Objetivos do Projeto

1. Educação ambiental interativa para crianças
2. Funcionalidade offline completa
3. Performance otimizada para dispositivos móveis
4. Acessibilidade (WCAG AA)
5. Experiência instalável (PWA)

## 📐 Padrões de Código

### TypeScript
- Usar `strict: true` - todas as verificações estritas habilitadas
- Evitar `any` - sempre tipar explicitamente
- Preferir `type` ao invés de `interface` para tipos simples
- Usar `const` por padrão, `let` apenas quando necessário
- Funções puras quando possível

```typescript
// ✅ BOM
type GameScore = { points: number; time: number; completed: boolean }

function calculateScore(correct: number, total: number): number {
  return Math.round((correct / total) * 100)
}

// ❌ EVITAR
interface GameScore {
  points: any
  time: any
}

function calculateScore(correct, total) {
  return (correct / total) * 100
}
```

### Estrutura de Arquivos
```
src/
├── components/     # Componentes reutilizáveis (modal, toast, etc)
├── pages/         # Páginas/rotas da aplicação
├── games/         # Lógica dos jogos educativos
├── content/       # Conteúdo estático, textos
├── types/         # Definições de tipos TypeScript
└── main.ts        # Entry point e router
```

### Nomenclatura
- **Arquivos:** kebab-case (`ecoscan.ts`, `memory-match.ts`)
- **Tipos:** PascalCase (`EcoBin`, `GameConfig`)
- **Funções:** camelCase (`loadDB`, `showModal`)
- **Constantes:** UPPER_SNAKE_CASE (`DATA_URL`, `UPDATE_FLAG`)
- **CSS Classes:** kebab-case (`eco-card`, `app-header`)

### CSS
- Usar variáveis CSS para cores e temas
- Mobile-first approach
- Preferir Flexbox/Grid ao invés de floats
- Usar unidades relativas (rem, em, %) quando possível
- Suportar `prefers-reduced-motion`

```css
/* ✅ BOM */
.eco-card {
  display: flex;
  gap: 1rem;
  padding: clamp(0.5rem, 2vw, 1.5rem);
  background: var(--surface);
  color: var(--on-surface);
}

@media (prefers-reduced-motion: reduce) {
  .eco-card {
    transition: none;
  }
}

/* ❌ EVITAR */
.eco-card {
  float: left;
  padding: 15px;
  background: #ffffff;
  color: #1f2937;
}
```

## 🎮 Padrões de Jogos

Todos os jogos devem seguir esta estrutura:

```typescript
// types.ts
export type GameState = 'idle' | 'playing' | 'paused' | 'completed'

export type GameConfig = {
  id: string
  name: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  icon: string
}

// game-example.ts
export function GameExample(config: GameConfig) {
  let state: GameState = 'idle'
  let score = 0
  
  function start() {
    state = 'playing'
    // lógica do jogo
  }
  
  function render(): string {
    return `<div class="game-container">...</div>`
  }
  
  return { start, render }
}
```

## 🔒 Práticas de Segurança

1. **Sanitizar HTML dinâmico** - usar DOMPurify se necessário
2. **Validar dados externos** - sempre validar JSON carregado
3. **Evitar eval()** - nunca usar eval ou Function constructor
4. **CSP ready** - evitar inline scripts quando possível

```typescript
// ✅ BOM
function loadData<T>(url: string, validator: (data: unknown) => data is T): Promise<T> {
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      if (!validator(data)) throw new Error('Invalid data')
      return data
    })
}

// ❌ EVITAR
async function loadData(url) {
  const res = await fetch(url)
  return res.json() // sem validação!
}
```

## ♿ Acessibilidade

**SEMPRE implementar:**
- Semântica HTML correta (`nav`, `main`, `article`, etc)
- ARIA labels em elementos interativos
- Navegação por teclado (Tab, Enter, Esc)
- Contraste adequado (WCAG AA: 4.5:1 para texto)
- Focus visible em todos os elementos interativos
- Textos alternativos em imagens

```html
<!-- ✅ BOM -->
<button 
  type="button" 
  aria-label="Fechar modal"
  class="btn btn-close"
  onclick="closeModal()"
>
  <i class="fa fa-times" aria-hidden="true"></i>
</button>

<!-- ❌ EVITAR -->
<div onclick="closeModal()">X</div>
```

## 🚀 Performance

### Otimizações Essenciais
1. **Lazy loading** de imagens: `loading="lazy"`
2. **Code splitting** para jogos pesados
3. **Evitar re-renders** desnecessários
4. **Debounce** em event listeners frequentes
5. **Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1

```typescript
// ✅ BOM - Debounce
function debounce<T extends (...args: any[]) => void>(
  fn: T, 
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: number
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

const handleSearch = debounce((query: string) => {
  // busca pesada
}, 300)
```

## 📱 PWA Best Practices

1. **Service Worker**: sempre versionar cache
2. **Offline First**: dados críticos devem funcionar offline
3. **Update UX**: notificar usuário sobre atualizações
4. **Install prompt**: customizar experiência de instalação

```typescript
// ✅ BOM - Update com UX suave
registerSW({
  onNeedRefresh() {
    // Mostrar toast não-intrusivo
    showUpdateToast('Nova versão disponível!', {
      action: () => updateSW(true)
    })
  }
})

// ❌ EVITAR - Reload forçado
registerSW({
  onNeedRefresh() {
    location.reload() // ruim para UX!
  }
})
```

## 🧪 Testes (Quando Implementado)

```typescript
// Padrão de teste esperado
import { describe, it, expect } from 'vitest'

describe('calculateScore', () => {
  it('should return 100 for perfect score', () => {
    expect(calculateScore(10, 10)).toBe(100)
  })
  
  it('should return 0 for no correct answers', () => {
    expect(calculateScore(0, 10)).toBe(0)
  })
  
  it('should round to nearest integer', () => {
    expect(calculateScore(7, 9)).toBe(78)
  })
})
```

## 📝 Documentação

### Comentários de Código
- **Evitar** comentários óbvios
- **Preferir** código auto-explicativo
- **Usar** JSDoc para funções públicas complexas

```typescript
// ❌ EVITAR
// Incrementa o contador
counter++

// ✅ BOM
/**
 * Calcula pontuação baseado em acertos, tempo e dificuldade.
 * 
 * @param correct - Número de respostas corretas
 * @param total - Total de questões
 * @param timeBonus - Bônus de tempo (0-1)
 * @returns Pontuação final (0-100)
 */
function calculateScore(
  correct: number, 
  total: number, 
  timeBonus: number
): number {
  const baseScore = (correct / total) * 100
  return Math.round(baseScore * (1 + timeBonus * 0.2))
}
```

## 🎨 UX/UI Guidelines

### Cores e Tema
- Usar variáveis CSS definidas em `:root`
- Manter consistência com paleta verde/eco
- Suportar temas futuros (preparar código)

### Feedback Visual
- **Ações de sucesso:** verde com ícone de check
- **Erros:** vermelho com ícone de alerta
- **Loading:** spinner/skeleton com texto descritivo
- **Animações:** suaves, máx 300ms

### Mobile First
- Design para mobile primeiro
- Touch targets mínimo 44x44px
- Evitar hover-only interactions
- Testar em telas pequenas (320px+)

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor dev com PWA

# Build e Deploy
npm run build        # Build de produção (TypeScript + Vite)
npm run preview      # Preview do build
npm run deploy       # Build + Deploy para GitHub Pages

# Qualidade (quando configurado)
npm run lint         # ESLint
npm run format       # Prettier
npm test             # Vitest
```

## 🐛 Debug

### Problemas Comuns

**Service Worker não atualiza:**
```typescript
// Força atualização em dev
if (import.meta.env.DEV) {
  navigator.serviceWorker.getRegistrations().then(regs => 
    regs.forEach(reg => reg.unregister())
  )
}
```

**CSS não carrega:**
- Verificar caminho: usar `import.meta.env.BASE_URL`
- Verificar build: CSS deve ser injetado automaticamente

**TypeScript errors:**
- Executar `npm run build` para ver todos os erros
- Verificar `tsconfig.json` para configurações strict

## 📚 Recursos de Referência

- **Vite:** https://vitejs.dev/
- **PWA:** https://vite-pwa-org.netlify.app/
- **TypeScript:** https://www.typescriptlang.org/docs/
- **WCAG:** https://www.w3.org/WAI/WCAG21/quickref/
- **Web Vitals:** https://web.dev/vitals/

## 🎯 Quando Auxiliar o Desenvolvedor

### Priorize sugestões que:
1. Melhorem **performance** (Web Vitals)
2. Aumentem **acessibilidade** (WCAG AA)
3. Simplifiquem **manutenção** (código limpo)
4. Melhorem **experiência offline** (PWA)
5. Reduzam **bundle size** (<200KB gzipped)

### Evite sugestões que:
1. Adicionem frameworks grandes (React, Vue, etc)
2. Aumentem complexidade desnecessariamente
3. Quebrem funcionalidade offline
4. Piorem performance
5. Reduzam acessibilidade

## 🌱 Filosofia do Projeto

> "Educar crianças sobre sustentabilidade através de tecnologia acessível, performática e inclusiva."

**Mantra:** Simplicidade, Performance, Acessibilidade, Sustentabilidade.

---

**Última atualização:** 2025-11-01  
**Versão:** 1.0.0
