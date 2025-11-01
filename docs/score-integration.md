# Sistema de Pontuação - Guia de Integração

## Como Adicionar Pontos nos Jogos

### Importar o módulo:
```typescript
import { addScore } from '../components/score-system'
```

### Adicionar pontos:
```typescript
// Quando o jogador acerta uma questão
addScore('quiz', 10, false) // gameId, pontos, completed

// Quando completa o jogo
addScore('quiz', 50, true) // completed = true
```

### Game IDs:
- `'quiz'` - Quiz Eco
- `'memory-match'` - Jogo da Memória
- `'choose-for-trashbin'` - Escolha a Lixeira
- `'odd-one-out-trashbin'` - Encontre o Intruso

### Exemplo de Integração:

```typescript
// No final de uma rodada/jogo
function finishGame(correctAnswers: number, totalQuestions: number) {
  const pointsPerCorrect = 10
  const bonusForCompletion = 50
  
  // Pontos por respostas corretas
  const points = (correctAnswers * pointsPerCorrect) + bonusForCompletion
  
  // Adicionar ao sistema
  addScore('quiz', points, true)
  
  // Mostrar resultado
  showResults(correctAnswers, totalQuestions, points)
}
```

### Sistema de Badges

Os badges são desbloqueados automaticamente quando o jogador atinge os critérios:
- `first-game`: Primeiro jogo jogado
- `points-100`: 100 pontos totais
- `points-500`: 500 pontos totais
- `points-1000`: 1000 pontos totais
- `games-10`: 10 jogos completados
- `games-25`: 25 jogos completados

### Notificações

Quando um badge é desbloqueado, uma notificação aparece automaticamente na tela.

### Listener de Atualizações

Para atualizar a UI quando pontos são adicionados:

```typescript
window.addEventListener('score-updated', (e: CustomEvent) => {
  const data = e.detail
  console.log('Nova pontuação:', data.totalPoints)
})
```
