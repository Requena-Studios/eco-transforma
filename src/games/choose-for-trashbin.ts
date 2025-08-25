import type { Game } from './types'
import './choose-for-trashbin.css'

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
const OPTIONS_PER_ROUND = 4

const BINS: BinInfo[] = [
    { id: 'papel', title: 'PAPEL', color: '#3087b2', img: lixeiraPapelImg },
    { id: 'plastico', title: 'PLÁSTICO', color: '#cd3623', img: lixeiraPlasticoImg },
    { id: 'metal', title: 'METAL', color: '#e8ae29', img: lixeiraMetalImg },
    { id: 'vidro', title: 'VIDRO', color: '#488f2e', img: lixeiraVidroImg },
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
        root.innerHTML = `
      <div class="cftb-wrap shout">
        <header class="cftb-hd">
          <i class="fa-sharp-duotone fa-recycle"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
          <h3>TOQUE NO OBJETO CERTO</h3>
          <div class="cftb-progress">
            <span id="cftb-pos">1</span>/<span id="cftb-total">${TOTAL}</span>
          </div>
        </header>

        <div id="cftb-stage" class="cftb-stage"></div>

        <footer class="cftb-ft">
          <button id="cftb-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
               style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
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

        function startNewRun() {
            // balanceia a aparição de cada lixeira
            const types: BinType[] = ['papel', 'plastico', 'metal', 'vidro']
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
                ; (root.querySelector('#cftb-total') as HTMLSpanElement).textContent = String(QUEUE.length)
            renderRound()
        }

        function renderRound() {
            const currentBin = QUEUE[index]
            pos.textContent = String(index + 1)
            resolving = false

            // opções: 1 correta (mesma categoria) + (OPTIONS_PER_ROUND-1) incorretas
            const correctPool = ALL_ITEMS.filter(i => i.type === currentBin.id)
            const wrongPool = ALL_ITEMS.filter(i => i.type !== currentBin.id)

            const correctItem = pickOne(correctPool)
            const wrongItems = sample(wrongPool, Math.max(0, OPTIONS_PER_ROUND - 1))
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
    <i class="fa-sharp-duotone fa-circle-right"
       style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-left:.35rem;"></i>
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
            const s = document.getElementById('cftb-stage') as HTMLDivElement
            s.innerHTML = `
        <div class="cftb-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${msg}</h3>
          <p>SUA PONTUAÇÃO: <strong>${pct}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${score}</strong> DE <strong>${QUEUE.length}</strong>.</p>
          <div class="cftb-end-actions">
            <button id="cftb-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `
                ; (s.querySelector('#cftb-retry') as HTMLButtonElement).addEventListener('click', startNewRun)
        }

        startNewRun()
    },
}
