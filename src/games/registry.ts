import type { GameInfo } from './types'

export const GAMES: GameInfo[] = [
  {
    id: 'quiz',
    title: 'QUIZ DA RECICLAGEM',
    subtitle: 'RESPONDA E APRENDA ♻️',
    icon: 'fa-sharp-duotone fa-circle-question',
    emoji: '❓',
    load: () => import('./quiz').then(m => m.QuizGame),
  },
  {
    id: 'drag-trash',
    title: 'ARRASTE PARA A LIXEIRA CERTA',
    subtitle: 'SEPARAÇÃO DE RESÍDUOS',
    icon: 'fa-sharp-duotone fa-recycle',
    emoji: '🗑️',
    load: () => import('./drag-trash').then(m => m.DragTrashGame),
  },
]
