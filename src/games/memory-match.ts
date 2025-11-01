import type { Game } from './types'
import { addScore } from '../components/score-system'
import { vibrateSuccess, vibrateError } from '../components/haptic'
import './memory-match.css'

type BinType = 'papel' | 'plastico' | 'metal' | 'vidro' | 'organico'

type Item = {
  name: string
  type: BinType
  img?: string
}

type BinInfo = {
  id: BinType
  title: string
  color: string
  img?: string
}

type DragTrashDB = { bins: BinInfo[]; items: Item[] }

const DATA_URL = `${import.meta.env.BASE_URL}data/assets.json`
const IMG = (p?: string) => (p ? `${import.meta.env.BASE_URL}img/${p}` : '')

async function loadDB(): Promise<DragTrashDB> {
  const res = await fetch(DATA_URL, { cache: 'no-cache' })
  const db = (await res.json()) as DragTrashDB
  // Normalize image URLs to full path
  db.items = db.items.map(i => ({ ...i, img: IMG(i.img) }))
  db.bins = db.bins.map(b => ({ ...b, img: b.img ? IMG(b.img) : undefined }))
  return db
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n)
}

type Card = {
  id: string
  type: BinType
  name: string
  img?: string
  matched: boolean
  faceUp: boolean
}

const PAIRS = 8 // 4x4 grade (16 cartas)

export const MemoryMatchGame: Game = {
  async mount(root: HTMLElement) {
    root.innerHTML = `
      <div class="mm-wrap shout">
        <header class="mm-hd">
          <i class="fa-sharp-duotone fa-cards"></i>
          <h3>MEMÓRIA: ITENS E LIXEIRAS</h3>
          <div class="mm-progress">
            <span id="mm-found">0</span>/<span id="mm-total">${PAIRS}</span>
          </div>
        </header>

        <div id="mm-stage" class="mm-stage"></div>

        <footer class="mm-ft">
          <button id="mm-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `

    const stage = root.querySelector('#mm-stage') as HTMLDivElement
    const foundEl = root.querySelector('#mm-found') as HTMLSpanElement
    const exitBtn = root.querySelector('#mm-exit') as HTMLButtonElement
    exitBtn.addEventListener('click', () => document.dispatchEvent(new CustomEvent('game:exit')))

    const db = await loadDB()
    const ALL_ITEMS = db.items
    const TYPE_COLOR = db.bins.reduce<Record<BinType, string>>((acc, b) => {
      acc[b.id] = b.color
      return acc
    }, {} as Record<BinType, string>)

    let CARDS: Card[] = []
    let firstIdx: number | null = null
    let secondIdx: number | null = null
    let locking = false
    let foundPairs = 0
    let moves = 0
    let startTime = 0

    function buildDeck(): Card[] {
      const byType: Record<BinType, Item[]> = {
        papel: ALL_ITEMS.filter(i => i.type === 'papel'),
        plastico: ALL_ITEMS.filter(i => i.type === 'plastico'),
        metal: ALL_ITEMS.filter(i => i.type === 'metal'),
        vidro: ALL_ITEMS.filter(i => i.type === 'vidro'),
        organico: ALL_ITEMS.filter(i => i.type === 'organico'),
      }
      const types: BinType[] = ['papel', 'plastico', 'metal', 'vidro', 'organico']

      // Ensure all categories appear, distributed as evenly as possible
      const seq: BinType[] = []
      while (seq.length < PAIRS) seq.push(...shuffle(types))
      const pairTypes = seq.slice(0, PAIRS)

      // Avoid reusing the same item across different pairs where possible
      const used = new Set<string>() // item.name

      const cards: Card[] = []
      let uid = 0
      for (const t of pairTypes) {
        const pool = byType[t]
        // Defensive fallback if a type has no items
        if (pool.length === 0) continue

        let picks: Item[] = []
        const unused = pool.filter(p => !used.has(p.name))

        if (unused.length >= 2) {
          picks = sample(unused, 2)
        } else if (unused.length === 1) {
          const altPool = pool.filter(p => p.name !== unused[0].name)
          const second = sample(altPool.length ? altPool : [unused[0]], 1)[0]
          picks = [unused[0], second]
        } else {
          // No unused left: reuse items as last resort
          const s = sample(pool, Math.min(2, pool.length))
          picks = s.length === 2 ? s : [s[0], s[0]]
        }

        picks.forEach(p => used.add(p.name))

        for (const p of picks) {
          cards.push({
            id: `c${uid++}`,
            type: p.type,
            name: p.name,
            img: p.img,
            matched: false,
            faceUp: false,
          })
        }
      }
      return shuffle(cards)
    }

    function render() {
      stage.innerHTML = `
        <div class="mm-intro">
          <p class="mm-instr">Encontre pares de itens que vão para a mesma lixeira.</p>
        </div>
        <div class="mm-grid">
          ${CARDS.map(
            (c, i) => `
            <button
              class="mm-card ${c.faceUp || c.matched ? 'is-flipped' : ''} ${c.matched ? 'is-matched' : ''}"
              data-idx="${i}"
              style="--type-color:${TYPE_COLOR[c.type]};"
              aria-pressed="${c.faceUp || c.matched ? 'true' : 'false'}"
              aria-label="${c.matched ? c.name + ' (correspondência encontrada)' : c.name}">
              <div class="mm-card-inner">
                <div class="mm-card-face mm-card-front">
                  <i class="fa-sharp-duotone fa-recycle"></i>
                </div>
                <div class="mm-card-face mm-card-back">
                  <div class="mm-card-imgframe">
                    <img class="img-fit" src="${c.img}" alt="${c.name}" />
                  </div>
                  <div class="mm-chip" style="background:${TYPE_COLOR[c.type]};">
                    ${c.type.toUpperCase()}
                  </div>
                </div>
              </div>
            </button>
          `,
          ).join('')}
        </div>
      `

      stage.querySelectorAll<HTMLButtonElement>('.mm-card').forEach(btn => {
        btn.addEventListener('click', () => handleFlip(Number(btn.dataset.idx)))
      })
    }

    function handleFlip(idx: number) {
      if (locking) return
      const c = CARDS[idx]
      if (c.matched || c.faceUp) return

      c.faceUp = true
      if (firstIdx === null) {
        firstIdx = idx
        render()
        return
      }
      if (secondIdx === null) {
        secondIdx = idx
        moves++
        render()

        const a = CARDS[firstIdx]
        const b = CARDS[secondIdx]
        const isMatch = a.type === b.type

        locking = true
        setTimeout(() => {
          if (isMatch) {
            vibrateSuccess()
            a.matched = b.matched = true
            foundPairs++
            foundEl.textContent = String(foundPairs)
            if (foundPairs >= PAIRS) {
              renderEnd()
              return
            }
          } else {
            vibrateError()
            a.faceUp = b.faceUp = false
          }
          firstIdx = secondIdx = null
          locking = false
          render()
        }, isMatch ? 450 : 700)
      }
    }

    function renderEnd() {
      const elapsedMs = Date.now() - startTime
      const secs = Math.max(1, Math.round(elapsedMs / 1000))
      const efficiency = Math.max(0, Math.round((PAIRS / moves) * 100))
      const msg = efficiency >= 80 ? 'PARABÉNS! 🌟' : efficiency >= 50 ? 'BOA! 👍' : 'VAMOS TENTAR DE NOVO? 💪'

      // Calculate points: base 50 + efficiency bonus + time bonus
      const basePoints = 50
      const efficiencyBonus = Math.round(efficiency / 2)
      const timeBonus = secs < 30 ? 30 : secs < 60 ? 15 : 0
      const pointsEarned = basePoints + efficiencyBonus + timeBonus
      
      addScore('memory-match', pointsEarned, true)

      stage.innerHTML = `
        <div class="mm-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${msg}</h3>
          <p>VOCÊ ENCONTROU ${PAIRS} PARES.</p>
          <p>TEMPO: <strong>${secs}s</strong> • JOGADAS: <strong>${moves}</strong></p>
          <p>EFICIÊNCIA: <strong>${efficiency}%</strong></p>
          <p class="points-earned">+${pointsEarned} PONTOS 🌟</p>
          <div class="mm-end-actions">
            <button id="mm-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right" style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `
      ;(stage.querySelector('#mm-retry') as HTMLButtonElement).addEventListener('click', start)
    }

    function start() {
      CARDS = buildDeck()
      firstIdx = secondIdx = null
      locking = false
      foundPairs = 0
      moves = 0
      foundEl.textContent = '0'
      startTime = Date.now()
      render()
    }

    start()
  },
}
