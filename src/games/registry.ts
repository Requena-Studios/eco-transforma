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
        id: 'odd-one-out-trashbin',
        title: 'TOQUE NA LIXEIRA CERTA',
        subtitle: 'SEPARAÇÃO DE RESÍDUOS',
        icon: 'fa-sharp-duotone fa-recycle',
        emoji: '🗑️',
        load: () => import('./odd-one-out-trashbin').then(m => m.OddOneOutTrashbinGame),
    },
    {
        id: 'choose-for-trashbin',
        title: 'TOQUE NO OBJETO CERTO',
        subtitle: 'SEPARAÇÃO DE RESÍDUOS',
        icon: 'fa-sharp-duotone fa-recycle',
        emoji: '🗑️',
        load: () => import('./choose-for-trashbin').then(m => m.ChooseForTrashbinGame),
    },
    {
        id: 'memory-match',
        title: 'JOGO DA MEMÓRIA',
        subtitle: 'COMBINE OS PARES ♻️',
        icon: 'fa-sharp-duotone fa-cards',
        emoji: '🃏',
        load: () => import('./memory-match').then(m => m.MemoryMatchGame),
    },
]
