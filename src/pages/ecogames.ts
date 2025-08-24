import { GAMES } from '../games/registry'
import type { Game } from '../games/types'

let currentGame: Game | null = null

function gameCardHTML(id: string, title: string, subtitle: string | undefined, icon: string, emoji?: string) {
  return /*html*/`
    <button class="game-card" data-id="${id}" aria-label="${title}">
      <i class="${icon}" style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
      <div class="game-card-txt">
        <strong>${emoji ? `${emoji} ` : ''}${title}</strong>
        ${subtitle ? `<small>${subtitle}</small>` : ''}
      </div>
    </button>
  `
}

export function EcoGames() {
  return /*html*/`
    <section class="games-wrap shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-gamepad" style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
        ECOJOGOS
      </h2>

      <div id="games-selector" class="games-selector">
        ${GAMES.map(g => gameCardHTML(g.id, g.title, g.subtitle, g.icon, g.emoji)).join('')}
      </div>

      <div id="game-area" class="game-area" hidden></div>
    </section>
  `
}

export function initEcoGames() {
  const selector = document.getElementById('games-selector') as HTMLDivElement | null
  const area = document.getElementById('game-area') as HTMLDivElement | null
  if (!selector || !area) return

  const showSelector = () => {
    if (currentGame?.destroy) currentGame.destroy()
    currentGame = null
    area.hidden = true
    selector.hidden = false
    area.innerHTML = ''
  }

  const launchGame = async (id: string) => {
    const info = GAMES.find(g => g.id === id)
    if (!info) return
    selector.hidden = true
    area.hidden = false
    const game = await info.load()
    currentGame = game
    game.mount(area)
  }

  selector.addEventListener('click', (e) => {
    const btn = (e.target as HTMLElement).closest('.game-card') as HTMLButtonElement | null
    if (!btn) return
    const id = btn.getAttribute('data-id')!
    launchGame(id)
  })

  // Saída do jogo é responsabilidade do próprio jogo (dispara este evento)
  document.addEventListener('game:exit', showSelector)
}
