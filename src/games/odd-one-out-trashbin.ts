import type { Game } from './types'
import './odd-one-out-trashbin.css'

type BinType = 'papel' | 'plastico' | 'organico' | 'metal' | 'vidro'

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

const TOTAL = 10

const DATA_URL = `${import.meta.env.BASE_URL}data/assets.json`
const IMG = (p?: string) => (p ? `${import.meta.env.BASE_URL}img/${p}` : '')

async function loadDB(): Promise<DragTrashDB> {
  const res = await fetch(DATA_URL, { cache: 'no-cache' })
  const db = (await res.json()) as DragTrashDB
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

export const OddOneOutTrashbinGame: Game = {
  async mount(root: HTMLElement) {
    const { bins: BINS, items: ALL_ITEMS } = await loadDB()

    root.innerHTML = `
      <div class="ootb-wrap shout">
        <header class="ootb-hd">
          <i class="fa-sharp-duotone fa-recycle"></i>
          <h3>TOQUE NA LIXEIRA CERTA</h3>
          <div class="ootb-progress">
            <span id="ootb-pos">1</span>/<span id="ootb-total">${TOTAL}</span>
          </div>
        </header>

        <div id="ootb-stage" class="ootb-stage"></div>

        <footer class="ootb-ft">
          <button id="ootb-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `

    const stage = root.querySelector('#ootb-stage') as HTMLDivElement
    const pos = root.querySelector('#ootb-pos') as HTMLSpanElement
    const exitBtn = root.querySelector('#ootb-exit') as HTMLButtonElement
    exitBtn.addEventListener('click', () => document.dispatchEvent(new CustomEvent('game:exit')))

    let QUEUE: Item[] = []
    let index = 0
    let score = 0
    let resolving = false

    function startNewRun() {
      const byType = {
        papel: ALL_ITEMS.filter(i => i.type === 'papel'),
        plastico: ALL_ITEMS.filter(i => i.type === 'plastico'),
        metal: ALL_ITEMS.filter(i => i.type === 'metal'),
        vidro: ALL_ITEMS.filter(i => i.type === 'vidro'),
        organico: ALL_ITEMS.filter(i => i.type === 'organico'),
      } as Record<BinType, Item[]>

      const types: BinType[] = ['papel', 'plastico', 'metal', 'vidro', 'organico']
      const shuffledTypes = shuffle(types)

      const base = Math.floor(TOTAL / types.length)
      const remainder = TOTAL % types.length
      const desired: Record<BinType, number> = types.reduce((acc, t) => {
        acc[t] = base
        return acc
      }, {} as Record<BinType, number>)
      for (let i = 0; i < remainder; i++) desired[shuffledTypes[i]]++

      const chosenNames = new Set<string>()
      let chosen: Item[] = []
      for (const t of types) {
        const count = Math.min(desired[t], byType[t].length)
        const picks = sample(byType[t], count)
        for (const p of picks) {
          if (!chosenNames.has(p.name)) { chosenNames.add(p.name); chosen.push(p) }
        }
      }

      const runTotal = Math.min(TOTAL, ALL_ITEMS.length)
      if (chosen.length < runTotal) {
        const remainingPool = ALL_ITEMS.filter(i => !chosenNames.has(i.name))
        const extra = sample(remainingPool, Math.min(remainingPool.length, runTotal - chosen.length))
        chosen = chosen.concat(extra)
      }

      const totalEl = root.querySelector('#ootb-total') as HTMLSpanElement | null
      if (totalEl) totalEl.textContent = String(runTotal)

      QUEUE = shuffle(chosen).slice(0, runTotal)
      index = 0
      score = 0
      renderRound()
    }

    function renderRound() {
      const current = QUEUE[index]
      pos.textContent = String(index + 1)
      resolving = false

      stage.innerHTML = `
        <div class="ootb-q">
          <p class="ootb-instr">Em qual lixeira vai o objeto?</p>

          <div class="ootb-items-container">
            <div class="ootb-bins">
              ${BINS.slice(0, 2).map(b => `
                <button class="ootb-bin" data-bin="${b.id}" aria-label="${b.title}" style="--bin-color:${b.color}">
                  <div class="ootb-bin-frame">
                    <img class="img-fit" src="${b.img}" alt="Lixeira ${b.title}" />
                  </div>
                  <span class="ootb-bin-title">${b.title}</span>
                </button>
              `).join('')}
            </div>

            <div class="ootb-item-wrap">
              <div id="ootb-item" class="ootb-item" data-type="${current.type}">
                <div class="ootb-item-frame">
                  <img class="img-fit" src="${current.img}" alt="${current.name}" />
                </div>
                <div class="ootb-item-name">${current.name}</div>
              </div>

              ${BINS.slice(2, 3).map(b => `
                <button class="ootb-bin" data-bin="${b.id}" aria-label="${b.title}" style="--bin-color:${b.color}">
                  <div class="ootb-bin-frame">
                    <img class="img-fit" src="${b.img}" alt="Lixeira ${b.title}" />
                  </div>
                  <span class="ootb-bin-title">${b.title}</span>
                </button>
              `).join('')}
            </div>

            <div class="ootb-bins">
              ${BINS.slice(-2).map(b => `
                <button class="ootb-bin" data-bin="${b.id}" aria-label="${b.title}" style="--bin-color:${b.color}">
                  <div class="ootb-bin-frame">
                    <img class="img-fit" src="${b.img}" alt="Lixeira ${b.title}" />
                  </div>
                  <span class="ootb-bin-title">${b.title}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      `

      const itemEl = stage.querySelector('#ootb-item') as HTMLDivElement
      const bins = Array.from(stage.querySelectorAll<HTMLButtonElement>('.ootb-bin'))

      bins.forEach(bin => {
        bin.addEventListener('click', () => {
          if (resolving) return
          handleClassify(bin.dataset.bin as BinType, itemEl.dataset.type as BinType)
        })
      })
    }

    function handleClassify(targetBin: BinType, itemType: BinType) {
      if (resolving) return
      resolving = true

      const isCorrect = targetBin === itemType

      const itemEl = document.getElementById('ootb-item') as HTMLDivElement | null
      const chosenBinEl = document.querySelector<HTMLButtonElement>(`.ootb-bin[data-bin="${targetBin}"]`)
      const correctBinEl = document.querySelector<HTMLButtonElement>(`.ootb-bin[data-bin="${itemType}"]`)
      const allBins = Array.from(document.querySelectorAll<HTMLButtonElement>('.ootb-bin'))

      if (itemEl) itemEl.classList.add(isCorrect ? 'is-correct' : 'is-wrong')
      if (chosenBinEl) chosenBinEl.classList.add(isCorrect ? 'is-correct' : 'is-wrong')
      if (!isCorrect && correctBinEl) correctBinEl.classList.add('is-correct')

      allBins.forEach(b => b.disabled = true)
      if (isCorrect) score++

      const next = document.createElement('button')
      next.className = 'btn ootb-next'
      const last = index >= (QUEUE.length - 1)
      next.innerHTML = `
        ${last ? 'FINALIZAR' : 'PRÓXIMA'}
        <i class="fa-sharp-duotone fa-circle-right" style="margin-left:.35rem;"></i>
      `
      next.addEventListener('click', advance)
      const s = document.getElementById('ootb-stage') as HTMLDivElement | null
      s?.appendChild(next)
    }

    function advance() {
      index++
      if (index < QUEUE.length) renderRound()
      else renderEnd()
    }

    function renderEnd() {
      const pct = Math.round((score / QUEUE.length) * 100)
      const msg = pct >= 80 ? 'PARABÉNS! 🌟' : (pct >= 50 ? 'BOA! 👍' : 'VAMOS TENTAR DE NOVO? 💪')
      const s = document.getElementById('ootb-stage') as HTMLDivElement
      s.innerHTML = `
        <div class="ootb-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${msg}</h3>
          <p>SUA PONTUAÇÃO: <strong>${pct}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${score}</strong> DE <strong>${QUEUE.length}</strong>.</p>
          <div class="ootb-end-actions">
            <button id="ootb-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right" style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `
      ;(s.querySelector('#ootb-retry') as HTMLButtonElement).addEventListener('click', startNewRun)
    }

    startNewRun()
  },
}
