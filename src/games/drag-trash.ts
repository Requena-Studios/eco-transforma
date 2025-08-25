import type { Game } from './types'
import './drag-trash.css'

import aluminioImg from '/img/drag-trash/aluminio.png'
import clipesImg from '/img/drag-trash/clipes.png'
import copoVidroImg from '/img/drag-trash/copo_vidro.png'
import garrafaPetImg from '/img/drag-trash/garrafa_pet.png'
import garrafaVidroImg from '/img/drag-trash/garrafa_vidro.png'
import iogurteImg from '/img/drag-trash/iogurte.png'
import jornalImg from '/img/drag-trash/jornal.png'
import lataImg from '/img/drag-trash/lata.png'
import papelaoImg from '/img/drag-trash/papelao.png'
import poteVidroImg from '/img/drag-trash/pote_vidro.png'
import revistaImg from '/img/drag-trash/revista.png'
import sacolaImg from '/img/drag-trash/sacola.png'

import lixeiraPlasticoImg from '/img/drag-trash/lixeira-plastico.png'
import lixeiraPapelImg from '/img/drag-trash/lixeira-papel.png'
import lixeiraVidroImg from '/img/drag-trash/lixeira-vidro.png'
import lixeiraMetalImg from '/img/drag-trash/lixeira-metal.png'

type BinType = 'papel' | 'plastico' | 'metal' | 'vidro'

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

const TOTAL = 10

const BINS: BinInfo[] = [
    { id: 'papel', title: 'PAPEL', color: '#1e3a8a', img: lixeiraPapelImg },
    { id: 'plastico', title: 'PLÁSTICO', color: '#b91c1c', img: lixeiraPlasticoImg },
    { id: 'metal', title: 'METAL', color: '#b45309', img: lixeiraMetalImg },
    { id: 'vidro', title: 'VIDRO', color: '#065f46', img: lixeiraVidroImg },
]

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

export const DragTrashGame: Game = {
  async mount(root: HTMLElement) {
    root.innerHTML = `
      <div class="dragtrash-wrap shout">
        <header class="dragtrash-hd">
          <i class="fa-sharp-duotone fa-recycle"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
          <h3>ARRASTE PARA A LIXEIRA CERTA</h3>
          <div class="dragtrash-progress">
            <span id="drag-pos">1</span>/<span id="drag-total">${TOTAL}</span>
          </div>
        </header>

        <div id="drag-stage" class="dragtrash-stage"></div>

        <footer class="dragtrash-ft">
          <button id="drag-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
               style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `

    const stage = root.querySelector('#drag-stage') as HTMLDivElement
    const pos = root.querySelector('#drag-pos') as HTMLSpanElement
    const exitBtn = root.querySelector('#drag-exit') as HTMLButtonElement
    exitBtn.addEventListener('click', () => document.dispatchEvent(new CustomEvent('game:exit')))

    let QUEUE: Item[] = []
    let index = 0
    let score = 0

    function startNewRun() {
      const byType = {
        papel: ALL_ITEMS.filter(i => i.type === 'papel'),
        plastico: ALL_ITEMS.filter(i => i.type === 'plastico'),
        metal: ALL_ITEMS.filter(i => i.type === 'metal'),
        vidro: ALL_ITEMS.filter(i => i.type === 'vidro'),
      } as Record<BinType, Item[]>

      const types: BinType[] = ['papel', 'plastico', 'metal', 'vidro']
      const shuffledTypes = shuffle(types)

      const base = Math.floor(TOTAL / types.length)
      const remainder = TOTAL % types.length
      const desired: Record<BinType, number> = {
        papel: base,
        plastico: base,
        metal: base,
        vidro: base,
      }
      for (let i = 0; i < remainder; i++) desired[shuffledTypes[i]]++

      const chosenSet = new Set<Item>()
      let chosen: Item[] = []
      for (const t of types) {
        const count = Math.min(desired[t], byType[t].length)
        const picks = sample(byType[t], count)
        for (const p of picks) {
          if (!chosenSet.has(p)) {
            chosenSet.add(p)
            chosen.push(p)
          }
        }
      }

      const runTotal = Math.min(TOTAL, ALL_ITEMS.length)
      if (chosen.length < runTotal) {
        const remainingPool = ALL_ITEMS.filter(i => !chosenSet.has(i))
        const extra = sample(remainingPool, Math.min(remainingPool.length, runTotal - chosen.length))
        chosen = chosen.concat(extra)
      }

      const totalEl = root.querySelector('#drag-total') as HTMLSpanElement | null
      if (totalEl) totalEl.textContent = String(runTotal)

      QUEUE = shuffle(chosen).slice(0, runTotal)
      index = 0
      score = 0
      renderRound()
    }

    function renderRound() {
      const current = QUEUE[index]
      pos.textContent = String(index + 1)

      stage.innerHTML = `
        <div class="dragtrash-q">
          <p class="dragtrash-instr">Arraste o item até a lixeira correta ou toque na lixeira para classificar.</p>

          <div class="dragtrash-item-wrap">
            <div id="drag-item" class="dragtrash-item" draggable="true" data-type="${current.type}" aria-grabbed="false">
              <div class="dragtrash-item-frame">
                <img class="img-fit" src="${current.img}" alt="${current.name}" />
              </div>
              <div class="dragtrash-item-name">${current.name}</div>
            </div>
          </div>

          <div class="dragtrash-bins">
            ${BINS.map(b => `
              <button class="dragtrash-bin" data-bin="${b.id}" aria-label="${b.title}" style="--bin-color:${b.color}">
                <div class="dragtrash-bin-frame">
                  <img class="img-fit" src="${b.img}" alt="Lixeira ${b.title}" />
                </div>
                <span class="dragtrash-bin-title">${b.title}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `

      const itemEl = stage.querySelector('#drag-item') as HTMLDivElement
      const bins = Array.from(stage.querySelectorAll<HTMLButtonElement>('.dragtrash-bin'))

      itemEl.addEventListener('dragstart', (e) => {
        e.dataTransfer?.setData('text/plain', (itemEl.dataset.type || ''))
        itemEl.setAttribute('aria-grabbed', 'true')
        setTimeout(() => itemEl.classList.add('is-dragging'), 0)
      })
      itemEl.addEventListener('dragend', () => {
        itemEl.setAttribute('aria-grabbed', 'false')
        itemEl.classList.remove('is-dragging')
      })

      bins.forEach(bin => {
        bin.addEventListener('dragover', (e) => e.preventDefault())
        bin.addEventListener('drop', (e) => {
          e.preventDefault()
          const droppedType = (e.dataTransfer?.getData('text/plain') || '') as BinType
          handleClassify(bin.dataset.bin as BinType, droppedType)
        })

        bin.addEventListener('click', () => {
          handleClassify(bin.dataset.bin as BinType, itemEl.dataset.type as BinType)
        })
      })
    }

    function handleClassify(targetBin: BinType, itemType: BinType) {
      const isCorrect = targetBin === itemType

      const itemEl = document.getElementById('drag-item') as HTMLDivElement | null
      const binEl = document.querySelector<HTMLButtonElement>(`.dragtrash-bin[data-bin="${targetBin}"]`)

      if (itemEl) itemEl.classList.toggle('is-correct', isCorrect)
      if (itemEl) itemEl.classList.toggle('is-wrong', !isCorrect)
      if (binEl) binEl.classList.add(isCorrect ? 'is-correct' : 'is-wrong')

      if (isCorrect) score++

      setTimeout(() => {
        if (binEl) binEl.classList.remove('is-correct', 'is-wrong')
        advance()
      }, 650)
    }

    function advance() {
      index++
      if (index < QUEUE.length) renderRound()
      else renderEnd()
    }

    function renderEnd() {
      const pct = Math.round((score / QUEUE.length) * 100)
      const msg = pct >= 80 ? 'PARABÉNS! 🌟' : (pct >= 50 ? 'BOA! 👍' : 'VAMOS TENTAR DE NOVO? 💪')
      stage.innerHTML = `
        <div class="dragtrash-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${msg}</h3>
          <p>SUA PONTUAÇÃO: <strong>${pct}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${score}</strong> DE <strong>${QUEUE.length}</strong>.</p>
          <div class="dragtrash-end-actions">
            <button id="drag-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `
      ;(stage.querySelector('#drag-retry') as HTMLButtonElement)
        .addEventListener('click', startNewRun)
    }

    startNewRun()
  },
}
