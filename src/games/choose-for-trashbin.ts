import type { Game } from './types'
import { addScore } from '../components/score-system'
import './choose-for-trashbin.css'

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

const TOTAL = 10
const OPTIONS_PER_ROUND = 4

const DATA_URL = `${import.meta.env.BASE_URL}data/assets.json`
const IMG = (p?: string) => (p ? `${import.meta.env.BASE_URL}img/${p}` : '')

async function loadDB(): Promise<DragTrashDB> {
  const res = await fetch(DATA_URL, { cache: 'no-cache' })
  const db = (await res.json()) as DragTrashDB
  db.items = db.items.map(i => ({ ...i, img: IMG(i.img) }))
  db.bins = db.bins.map(b => ({ ...b, img: b.img ? IMG(b.img) : undefined }))
  return db
}

// utils
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
function pickOne<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const ChooseForTrashbinGame: Game = {
  async mount(root: HTMLElement) {
    const { bins: BINS, items: ALL_ITEMS } = await loadDB()

    root.innerHTML = `
      <div class="cftb-wrap shout">
        <header class="cftb-hd">
          <i class="fa-sharp-duotone fa-recycle"></i>
          <h3>TOQUE NO OBJETO CERTO</h3>
          <div class="cftb-progress">
            <span id="cftb-pos">1</span>/<span id="cftb-total">${TOTAL}</span>
          </div>
        </header>

        <div id="cftb-stage" class="cftb-stage"></div>

        <footer class="cftb-ft">
          <button id="cftb-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `

    const stage = root.querySelector('#cftb-stage') as HTMLDivElement
    const pos = root.querySelector('#cftb-pos') as HTMLSpanElement
    const exitBtn = root.querySelector('#cftb-exit') as HTMLButtonElement
    exitBtn.addEventListener('click', () => document.dispatchEvent(new CustomEvent('game:exit')))

    let QUEUE: BinInfo[] = []
    let index = 0
    let score = 0
    let resolving = false

    // Track items already shown (correct or wrong) to avoid repeats in the run
    const usedItems = new Set<string>() // key: item.name

    function takeUnique(pool: Item[], n: number): Item[] {
      const result: Item[] = []
      const need = Math.min(n, pool.length)
      const unused = pool.filter(i => !usedItems.has(i.name))
      const first = sample(unused, Math.min(need, unused.length))
      result.push(...first)
      // fallback if not enough unused left
      if (result.length < need) {
        const remainingPool = pool.filter(i => !result.includes(i))
        const extra = sample(remainingPool, need - result.length)
        result.push(...extra)
      }
      // mark used
      result.forEach(i => usedItems.add(i.name))
      return result
    }

    function startNewRun() {
      usedItems.clear()

      // balanceia a aparição de cada lixeira
      const types: BinType[] = ['papel', 'plastico', 'metal', 'vidro', 'organico']
      const base = Math.floor(TOTAL / types.length)
      const remainder = TOTAL % types.length
      const seq: BinInfo[] = []
      const shuffledTypes = shuffle(types)

      for (const t of types) {
        const bin = BINS.find(b => b.id === t)!
        for (let i = 0; i < base; i++) seq.push(bin)
      }
      for (let i = 0; i < remainder; i++) {
        const bin = BINS.find(b => b.id === shuffledTypes[i])!
        seq.push(bin)
      }

      QUEUE = shuffle(seq)
      index = 0
      score = 0
      ;(root.querySelector('#cftb-total') as HTMLSpanElement).textContent = String(QUEUE.length)
      renderRound()
    }

    function renderRound() {
      const currentBin = QUEUE[index]
      pos.textContent = String(index + 1)
      resolving = false

      // opções: 1 correta (mesma categoria) + (OPTIONS_PER_ROUND-1) incorretas
      const correctPool = ALL_ITEMS.filter(i => i.type === currentBin.id)
      const wrongPool = ALL_ITEMS.filter(i => i.type !== currentBin.id)

      const unusedCorrect = correctPool.filter(i => !usedItems.has(i.name))
      const correctItem = pickOne(unusedCorrect.length ? unusedCorrect : correctPool)
      usedItems.add(correctItem.name) // avoid repeating this correct item later

      const wrongItems = takeUnique(wrongPool, Math.max(0, OPTIONS_PER_ROUND - 1))
      const options = shuffle([correctItem, ...wrongItems])

      stage.innerHTML = `
        <div class="cftb-q">
          <p class="cftb-instr">Qual objeto vai na lixeira?</p>

          <div class="cftb-items-container">
            <!-- LADO ESQUERDO: 2 opções -->
            <div class="cftb-bins">
              ${options.slice(0, 2).map(opt => `
                <button class="cftb-option" data-correct="${String(opt === correctItem)}" aria-label="${opt.name}">
                  <div class="cftb-option-frame">
                    <img class="img-fit" src="${opt.img}" alt="${opt.name}" />
                  </div>
                  <span class="cftb-option-title">${opt.name}</span>
                </button>
              `).join('')}
            </div>

            <!-- CENTRO: Lixeira alvo -->
            <div class="cftb-item-wrap">
              <div id="cftb-target" class="cftb-item" data-bin="${currentBin.id}">
                <div class="cftb-item-frame" style="border-color:${currentBin.color}">
                  <img class="img-fit" src="${currentBin.img}" alt="Lixeira ${currentBin.title}" />
                </div>
                <div class="cftb-item-name">${currentBin.title}</div>
              </div>
            </div>

            <!-- LADO DIREITO: 2 opções -->
            <div class="cftb-bins">
              ${options.slice(2).map(opt => `
                <button class="cftb-option" data-correct="${String(opt === correctItem)}" aria-label="${opt.name}">
                  <div class="cftb-option-frame">
                    <img class="img-fit" src="${opt.img}" alt="${opt.name}" />
                  </div>
                  <span class="cftb-option-title">${opt.name}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      `

      const optionEls = Array.from(stage.querySelectorAll<HTMLButtonElement>('.cftb-option'))
      optionEls.forEach(btn => {
        btn.addEventListener('click', () => {
          if (resolving) return
          const isCorrect = btn.dataset.correct === 'true'
          resolveRound(isCorrect, btn)
        })
      })
    }

    function resolveRound(isCorrect: boolean, chosenBtn: HTMLButtonElement) {
      if (resolving) return
      resolving = true

      const all = Array.from(document.querySelectorAll<HTMLButtonElement>('.cftb-option'))
      all.forEach(btn => {
        const ok = btn.dataset.correct === 'true'
        btn.classList.toggle('is-correct', ok)
        btn.classList.toggle('is-wrong', !ok && btn === chosenBtn)
        btn.disabled = true
      })

      if (isCorrect) score++

      const next = document.createElement('button')
      next.className = 'btn cftb-next'
      const last = index >= (QUEUE.length - 1)
      next.innerHTML = `
        ${last ? 'FINALIZAR' : 'PRÓXIMA'}
        <i class="fa-sharp-duotone fa-circle-right" style="margin-left:.35rem;"></i>
      `
      next.addEventListener('click', advance)
      document.getElementById('cftb-stage')?.appendChild(next)
    }

    function advance() {
      index++
      if (index < QUEUE.length) renderRound()
      else renderEnd()
    }

    function renderEnd() {
      const pct = Math.round((score / QUEUE.length) * 100)
      const msg = pct >= 80 ? 'PARABÉNS! 🌟' : (pct >= 50 ? 'BOA! 👍' : 'VAMOS TENTAR DE NOVO? 💪')
      
      const pointsEarned = score * 10
      addScore('choose-for-trashbin', pointsEarned, true)
      
      const s = document.getElementById('cftb-stage') as HTMLDivElement
      s.innerHTML = `
        <div class="cftb-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${msg}</h3>
          <p>SUA PONTUAÇÃO: <strong>${pct}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${score}</strong> DE <strong>${QUEUE.length}</strong>.</p>
          <p class="points-earned">+${pointsEarned} PONTOS 🌟</p>
          <div class="cftb-end-actions">
            <button id="cftb-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right" style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `
      ;(s.querySelector('#cftb-retry') as HTMLButtonElement).addEventListener('click', startNewRun)
    }

    startNewRun()
  },
}
