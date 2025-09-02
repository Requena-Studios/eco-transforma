import type { Game } from './types'
import './memory-match.css'

import aluminioImg from '/img/drag-trash/aluminio.webp'
import clipesImg from '/img/drag-trash/clipes.webp'
import copoVidroImg from '/img/drag-trash/copo_vidro.webp'
import garrafaPetImg from '/img/drag-trash/garrafa_pet.webp'
import garrafaVidroImg from '/img/drag-trash/garrafa_vidro.webp'
import iogurteImg from '/img/drag-trash/iogurte.webp'
import jornalImg from '/img/drag-trash/jornal.webp'
import lataImg from '/img/drag-trash/lata.webp'
import papelaoImg from '/img/drag-trash/papelao.webp'
import poteVidroImg from '/img/drag-trash/pote_vidro.webp'
import revistaImg from '/img/drag-trash/revista.webp'
import sacolaImg from '/img/drag-trash/sacola.webp'

type BinType = 'papel' | 'plastico' | 'metal' | 'vidro'

type Item = {
  name: string
  type: BinType
  img?: string
}

const ALL_ITEMS: Item[] = [
  { name: 'JORNAL', type: 'papel', img: jornalImg },
  { name: 'CAIXA DE PAPELÃO', type: 'papel', img: papelaoImg },
  { name: 'REVISTA', type: 'papel', img: revistaImg },
  { name: 'GARRAFA PET', type: 'plastico', img: garrafaPetImg },
  { name: 'SACO PLÁSTICO', type: 'plastico', img: sacolaImg },
  { name: 'POTE DE IOGURTE', type: 'plastico', img: iogurteImg },
  { name: 'LATA DE REFRI', type: 'metal', img: lataImg },
  { name: 'PAPEL ALUMÍNIO', type: 'metal', img: aluminioImg },
  { name: 'CLIPES', type: 'metal', img: clipesImg },
  { name: 'POTE DE VIDRO', type: 'vidro', img: poteVidroImg },
  { name: 'GARRAFA DE VIDRO', type: 'vidro', img: garrafaVidroImg },
  { name: 'COPO DE VIDRO', type: 'vidro', img: copoVidroImg },
]

const TYPE_COLOR: Record<BinType, string> = {
  papel: '#3087b2',
  plastico: '#cd3623',
  metal: '#e8ae29',
  vidro: '#488f2e',
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
          <i class="fa-sharp-duotone fa-cards"
            ></i>
          <h3>MEMÓRIA: ITENS E LIXEIRAS</h3>
          <div class="mm-progress">
            <span id="mm-found">0</span>/<span id="mm-total">${PAIRS}</span>
          </div>
        </header>

        <div id="mm-stage" class="mm-stage"></div>

        <footer class="mm-ft">
          <button id="mm-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
              ></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `

    const stage = root.querySelector('#mm-stage') as HTMLDivElement
    const foundEl = root.querySelector('#mm-found') as HTMLSpanElement
    const exitBtn = root.querySelector('#mm-exit') as HTMLButtonElement
    exitBtn.addEventListener('click', () => document.dispatchEvent(new CustomEvent('game:exit')))

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
      }
      const types: BinType[] = ['papel', 'plastico', 'metal', 'vidro']

      // Build sequence of pair types balanced across bins (e.g., for 8 pairs -> each type appears twice)
      const seq: BinType[] = []
      while (seq.length < PAIRS) {
        seq.push(...shuffle(types))
      }
      const pairTypes = seq.slice(0, PAIRS)

      const cards: Card[] = []
      let uid = 0
      for (const t of pairTypes) {
        // Pick two items for this pair; allow reuse if pool is small
        const pool = byType[t]
        const picks = pool.length >= 2 ? sample(pool, 2) : [pool[0], pool[0]]
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
          ${CARDS.map((c, i) => `
            <button
              class="mm-card ${c.faceUp || c.matched ? 'is-flipped' : ''} ${c.matched ? 'is-matched' : ''}"
              data-idx="${i}"
              style="--type-color:${TYPE_COLOR[c.type]};"
              aria-pressed="${c.faceUp || c.matched ? 'true' : 'false'}"
              aria-label="${c.matched ? c.name + ' (correspondência encontrada)' : c.name}">
              <div class="mm-card-inner">
                <div class="mm-card-face mm-card-front">
                  <i class="fa-sharp-duotone fa-recycle"
                    ></i>
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
          `).join('')}
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
            a.matched = b.matched = true
            foundPairs++
            foundEl.textContent = String(foundPairs)
            if (foundPairs >= PAIRS) {
              renderEnd()
              return
            }
          } else {
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
      const msg = efficiency >= 80 ? 'PARABÉNS! 🌟' : (efficiency >= 50 ? 'BOA! 👍' : 'VAMOS TENTAR DE NOVO? 💪')

      stage.innerHTML = `
        <div class="mm-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${msg}</h3>
          <p>VOCÊ ENCONTROU ${PAIRS} PARES.</p>
          <p>TEMPO: <strong>${secs}s</strong> • JOGADAS: <strong>${moves}</strong></p>
          <div class="mm-end-actions">
            <button id="mm-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `
      ;(stage.querySelector('#mm-retry') as HTMLButtonElement)
        .addEventListener('click', start)
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
