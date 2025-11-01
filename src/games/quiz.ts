import type { Game } from './types'
import { addScore } from '../components/score-system'
import { vibrateSuccess, vibrateError } from '../components/haptic'

type Q = { q: string; options: string[] }
type RunQ = { q: string; options: string[]; answer: number }

const TOTAL = 10
const DATA_URL = new URL(`${import.meta.env.BASE_URL}data/quiz-questions.json`, window.location.origin).toString()

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

function uniqueBy<T>(arr: T[], key: (t: T) => string): T[] {
  const seen = new Set<string>()
  const out: T[] = []
  for (const it of arr) {
    const k = key(it)
    if (!seen.has(k)) {
      seen.add(k)
      out.push(it)
    }
  }
  return out
}

/** Embaralha opções e calcula o novo índice da correta (que era 0 na origem) */
function shuffleOptions(q: Q): RunQ {
  const idx = [0,1,2]
  const perm = shuffle(idx)
  const options = perm.map(i => q.options[i])
  const answer = perm.indexOf(0)
  return { q: q.q, options, answer }
}

export const QuizGame: Game = {
  async mount(root: HTMLElement) {
    root.innerHTML = `
      <div class="quiz-wrap shout">
        <header class="quiz-hd">
          <i class="fa-sharp-duotone fa-circle-question"
            ></i>
          <h3>QUIZ DA RECICLAGEM</h3>
          <div class="quiz-progress">
            <span id="quiz-pos">1</span>/<span id="quiz-total">${TOTAL}</span>
          </div>
        </header>
        <div id="quiz-stage" class="quiz-stage"></div>
        <footer class="quiz-ft">
          <button id="quiz-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
              ></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `

    const stage = root.querySelector('#quiz-stage') as HTMLDivElement
    const pos = root.querySelector('#quiz-pos') as HTMLSpanElement
    const exitBtn = root.querySelector('#quiz-exit') as HTMLButtonElement

    exitBtn.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('game:exit'))
    })

    let bank: Q[] = []

    try {
      const res = await fetch(DATA_URL, { cache: 'no-cache' })
      bank = await res.json()
    } catch {
      stage.innerHTML = `<p>ERRO AO CARREGAR PERGUNTAS DO QUIZ.</p>`
      return
    }

    let QUESTIONS: RunQ[] = []
    let index = 0
    let score = 0

    function startNewRun() {
      // Garante perguntas únicas por texto e ajusta o total exibido
      const uniqueBank = uniqueBy(bank, b => (b.q || '').trim().toLowerCase())
      const runTotal = Math.min(TOTAL, uniqueBank.length)
      const totalEl = root.querySelector('#quiz-total') as HTMLSpanElement | null
      if (totalEl) totalEl.textContent = String(runTotal)

      QUESTIONS = sample(uniqueBank, runTotal).map(shuffleOptions)
      index = 0
      score = 0
      renderQuestion()
    }

    function renderQuestion() {
      const q = QUESTIONS[index]
      pos.textContent = String(index + 1)
      stage.innerHTML = `
        <div class="quiz-q">
          <p class="quiz-q-text">❓ ${q.q}</p>
          <div class="quiz-options">
            ${q.options.map((opt, i) => `
              <button class="quiz-opt" data-i="${i}">
                <span class="quiz-opt-letter">${String.fromCharCode(65 + i)})</span>
                <span class="quiz-opt-text">${opt}</span>
              </button>`).join('')}
          </div>
        </div>
      `
      stage.querySelectorAll<HTMLButtonElement>('.quiz-opt').forEach(btn => {
        btn.addEventListener('click', () => handleAnswer(Number(btn.dataset.i)))
      })
    }

    function handleAnswer(i: number) {
      const q = QUESTIONS[index]
      const isCorrect = i === q.answer
      
      // Haptic feedback
      if (isCorrect) {
        vibrateSuccess()
      } else {
        vibrateError()
      }
      
      const buttons = stage.querySelectorAll<HTMLButtonElement>('.quiz-opt')
      buttons.forEach((b, k) => {
        b.disabled = true
        if (k === q.answer) {
          b.classList.add('is-correct')
          b.insertAdjacentHTML('beforeend', `
            <i class="fa-sharp-duotone fa-circle-check"
               style="margin-left:.35rem;"></i>
          `)
        }
        if (k === i && i !== q.answer) {
          b.classList.add('is-wrong')
          b.insertAdjacentHTML('beforeend', `
            <i class="fa-sharp-duotone fa-circle-xmark"
               style="--fa-primary-color:#c53030;--fa-secondary-color:#f5a6a6;margin-left:.35rem;"></i>
          `)
        }
      })
      if (isCorrect) score++

      const next = document.createElement('button')
      next.className = 'btn quiz-next'
      const last = index >= (QUESTIONS.length - 1)
      next.innerHTML = `
        ${last ? 'FINALIZAR' : 'PRÓXIMA'}
        <i class="fa-sharp-duotone fa-circle-right"
           style="margin-left:.35rem;"></i>
      `
      next.addEventListener('click', advance)
      stage.appendChild(next)
    }

    function advance() {
      index++
      if (index < QUESTIONS.length) renderQuestion()
      else renderEnd()
    }

    function renderEnd() {
      const pct = Math.round((score / QUESTIONS.length) * 100)
      const msg = pct >= 80 ? 'PARABÉNS! 🌟' : (pct >= 50 ? 'BOA! 👍' : 'VAMOS TENTAR DE NOVO? 💪')
      
      // Add score to system
      const pointsEarned = score * 10
      addScore('quiz', pointsEarned, true)
      
      stage.innerHTML = `
        <div class="quiz-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${msg}</h3>
          <p>SUA PONTUAÇÃO: <strong>${pct}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${score}</strong> DE <strong>${QUESTIONS.length}</strong>.</p>
          <p class="points-earned">+${pointsEarned} PONTOS 🌟</p>
          <div class="quiz-end-actions">
            <button id="quiz-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `
      ;(stage.querySelector('#quiz-retry') as HTMLButtonElement).addEventListener('click', startNewRun)
    }

    startNewRun()
  },
}
