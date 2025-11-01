# 🛠️ Como Criar um Custom Agent para GitHub Copilot CLI

Este guia explica como criar um agent customizado para auxiliar no desenvolvimento do EcoTransforma.

## 📚 O que é um Custom Agent?

Um **Custom Agent** é um assistente especializado que você pode criar para ajudar em tarefas específicas do seu projeto. Ele age como um membro expert da equipe com conhecimento profundo do domínio.

## 🎯 Tipos de Agents que Você Pode Criar

### 1. **Agent de Performance** 
Especialista em otimização de Web Vitals, bundle size, e PWA performance.

### 2. **Agent de Acessibilidade**
Especialista em WCAG, ARIA, navegação por teclado e leitores de tela.

### 3. **Agent de Jogos Educativos**
Especialista em criar jogos interativos educacionais para crianças.

### 4. **Agent de PWA**
Especialista em Service Workers, caching strategies e offline-first.

### 5. **Agent de TypeScript**
Especialista em tipos avançados, padrões TypeScript e refatoração.

## 🔧 Métodos para Criar Agents

### Método 1: Arquivo de Instruções do Projeto (Recomendado)

✅ **Criado:** `.github/copilot-instructions.md`

Este arquivo contém as instruções customizadas que o GitHub Copilot vai usar automaticamente quando você trabalhar neste repositório.

**Como funciona:**
- GitHub Copilot lê automaticamente este arquivo
- Aplica as instruções em sugestões de código
- Funciona no VS Code, GitHub.com e CLI

**Ativar no VS Code:**
1. Instale a extensão GitHub Copilot
2. Abra o projeto
3. O Copilot vai usar as instruções automaticamente

---

### Método 2: Custom Instructions no Copilot Chat

Você pode criar instruções customizadas diretamente no Copilot Chat.

**VS Code:**
```
1. Abra Copilot Chat (Ctrl+Alt+I ou Cmd+Alt+I)
2. Clique no ícone de configurações
3. Adicione "Custom Instructions"
```

**Exemplo de Custom Instruction:**
```markdown
You are an expert in TypeScript PWA development for educational apps.
Focus on:
- Performance (Web Vitals)
- Accessibility (WCAG AA)
- Offline-first design
- Child-friendly UX
- Code simplicity

Always suggest mobile-first, accessible solutions.
```

---

### Método 3: Agent Configuration File (Avançado)

Para criar um agent completamente customizado com ferramentas próprias.

**Criar `.github/copilot/agents/eco-expert.yml`:**

```yaml
name: eco-expert
description: Expert in EcoTransforma development
version: 1.0.0

instructions: |
  You are an expert TypeScript developer specializing in:
  - Educational PWA applications
  - Accessibility (WCAG AA compliance)
  - Performance optimization for mobile devices
  - Offline-first architecture
  - Child-friendly UX design
  
  When helping with code:
  1. Always prioritize accessibility
  2. Ensure offline functionality
  3. Optimize for low-end mobile devices
  4. Use TypeScript strict mode
  5. Keep bundle size minimal
  
  Project constraints:
  - No frameworks (Vanilla JS/TS only)
  - Must work offline
  - Target audience: children 7-12 years old
  - Must be installable as PWA

tools:
  - name: analyze-performance
    description: Analyze Web Vitals and suggest optimizations
  
  - name: check-accessibility
    description: Check WCAG compliance and suggest fixes
  
  - name: optimize-bundle
    description: Analyze bundle size and suggest reductions

examples:
  - question: "Como posso melhorar a performance desta página?"
    answer: |
      Vou analisar a performance com foco em Web Vitals:
      1. Lazy loading de imagens
      2. Code splitting para jogos
      3. Preload de recursos críticos
      4. Otimização de fontes
      
  - question: "Este componente está acessível?"
    answer: |
      Vou verificar acessibilidade:
      1. Semântica HTML
      2. ARIA labels
      3. Navegação por teclado
      4. Contraste de cores
      5. Leitor de tela
```

---

### Método 4: Criar Agent com Claude/ChatGPT (Alternativo)

Se você usa outras ferramentas de IA, pode criar instruções customizadas:

**Exemplo para Claude:**

Criar arquivo `claude-eco-agent.md`:

```markdown
# EcoTransforma Development Agent

You are an expert TypeScript PWA developer with specialization in:

## Core Expertise
- Educational applications for children
- Progressive Web Apps (PWA)
- Accessibility (WCAG AA)
- Performance optimization
- Offline-first architecture

## Code Style
- TypeScript strict mode
- Vanilla JS (no frameworks)
- Functional programming when possible
- Mobile-first responsive design
- Semantic HTML5

## Key Principles
1. **Accessibility First**: Every feature must be accessible
2. **Performance Matters**: Target low-end mobile devices
3. **Offline Ready**: All core features work offline
4. **Child-Friendly**: Simple, intuitive, fun UX
5. **Sustainability**: Minimal bundle, green coding

## When Reviewing Code
- Check TypeScript types are strict
- Verify accessibility (ARIA, keyboard nav)
- Ensure offline functionality
- Validate performance impact
- Confirm mobile responsiveness

## Project Context
- Target: Children 7-12 years old
- Location: EMEB school in Jundiaí, Brazil
- Purpose: Teach recycling and sustainability
- Features: EcoScan, EcoGames, EcoPontos
- Stack: Vite, TypeScript, vanilla JS, Workbox

Refer to .github/copilot-instructions.md for detailed coding standards.
```

---

## 🚀 Como Usar os Agents

### No GitHub Copilot CLI:

```bash
# Perguntar ao agent padrão
gh copilot suggest "Como otimizar o carregamento de imagens?"

# Explicar código
gh copilot explain "O que faz esta função de debounce?"

# No chat (se disponível)
gh copilot chat
```

### No VS Code:

```
# No Copilot Chat
@workspace Como posso melhorar a acessibilidade deste jogo?

# Com contexto do arquivo
Explique como este service worker funciona e sugira melhorias

# Inline suggestions
# Copilot vai usar as instruções automaticamente
```

### No GitHub.com:

```
# Em Pull Requests
O Copilot vai revisar código usando as instruções customizadas

# Em Issues
Copilot pode sugerir soluções baseadas nas instruções
```

---

## 📊 Exemplo de Uso Prático

### Antes (sem agent):
```typescript
// Pedido: "Crie um botão de fechar"
<div onclick="close()">X</div>
```

### Depois (com agent de acessibilidade):
```typescript
// Pedido: "Crie um botão de fechar"
<button 
  type="button"
  class="btn-close"
  aria-label="Fechar modal"
  onclick="closeModal()"
>
  <i class="fa fa-times" aria-hidden="true"></i>
  <span class="sr-only">Fechar</span>
</button>
```

---

## 🎯 Agents Recomendados para EcoTransforma

### 1. **Agent de Performance**
```markdown
Focus: Web Vitals, bundle optimization, lazy loading
Tools: Lighthouse, Bundle Analyzer
Priority: ALTA
```

### 2. **Agent de Acessibilidade**
```markdown
Focus: WCAG AA, ARIA, keyboard navigation
Tools: axe, WAVE, screen readers
Priority: ALTA
```

### 3. **Agent de Jogos**
```markdown
Focus: Educational game mechanics, child UX
Tools: Game loop patterns, scoring systems
Priority: MÉDIA
```

### 4. **Agent de PWA**
```markdown
Focus: Service workers, offline, caching
Tools: Workbox, PWA best practices
Priority: MÉDIA
```

---

## 📝 Próximos Passos

### Passo 1: Testar as Instruções Atuais
```bash
# Abra o VS Code
# Comece a codificar e observe as sugestões do Copilot
# Veja se ele sugere código acessível e performático
```

### Passo 2: Refinar as Instruções
```bash
# Edite .github/copilot-instructions.md
# Adicione padrões específicos que você quer
# Teste novamente
```

### Passo 3: Criar Agents Especializados
```bash
# Crie agentes para tarefas específicas
# Exemplo: eco-performance-agent.yml
# Exemplo: eco-a11y-agent.yml
```

### Passo 4: Integrar no Workflow
```bash
# Use agents durante desenvolvimento
# Use agents em code reviews
# Use agents para refatoração
```

---

## 🔗 Recursos Adicionais

- **GitHub Copilot Docs:** https://docs.github.com/copilot
- **Custom Instructions:** https://docs.github.com/copilot/customizing-copilot
- **Agent Builder (Beta):** https://github.com/features/copilot/agents
- **VS Code Extension:** https://marketplace.visualstudio.com/items?itemName=GitHub.copilot

---

## ✅ Checklist de Implementação

- [x] Criar `.github/copilot-instructions.md`
- [ ] Testar instruções no VS Code
- [ ] Criar agent de performance (opcional)
- [ ] Criar agent de acessibilidade (opcional)
- [ ] Documentar resultados
- [ ] Treinar equipe no uso dos agents

---

**Criado em:** 2025-11-01  
**Projeto:** EcoTransforma  
**Versão:** 1.0.0
