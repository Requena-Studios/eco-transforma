import mascoteImg from '/img/mascote.png'

const DIALOGS = [
    'OLÁ! EU SOU O SUCATECO,<br/>MASCOTINHO DO ECOTRANSFORMA.',
    'JUNTE-SE A NÓS NESSA MISSÃO<br/>SUSTENTÁVEL E VENHA CUIDAR<br/> DO PLANETA COM A GENTE!',
    'SELECIONE UMA DAS OPÇÕES<br/>ABAIXO E DESCUBRA COMO FAZER ISSO!'
]

let idx = 0

export function Home() {
    return `
<section class="hero">
    <div class="hero-bubble-container">
        <div class="hero-bubble" id="bubble" tabindex="0" role="button" aria-label="Avançar diálogo">
            <p id="bubble-text" class="bubble-text"></p>
            <div class="hero-actions">
                <button id="prev" class="btn" aria-label="Voltar">
                    <i class="fa-regular fa-lg fa-circle-left"></i>
                </button>
                <span id="progress" class="progress"></span>
                <button id="next" class="btn" aria-label="Avançar">
                    <i class="fa-regular fa-lg fa-circle-right"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="hero-figure">
        <img src="${mascoteImg}" alt="Mascote EcoTransforma" class="hero-mascote" />
    </div>

    <div class="hero-cta">
        <button id="btn-sobre" class="btn">
            <i class="fa-regular fa-circle-question"></i> Sobre
        </button>
    </div>
</section>
  `
}

export function initHome() {
    const bubble = document.getElementById('bubble') as HTMLDivElement
    const text = document.getElementById('bubble-text') as HTMLParagraphElement
    const btnPrev = document.getElementById('prev') as HTMLButtonElement
    const btnNext = document.getElementById('next') as HTMLButtonElement
    const progress = document.getElementById('progress') as HTMLSpanElement

    const render = () => {
        text.innerHTML = DIALOGS[idx]
        btnPrev.disabled = idx === 0
        progress.textContent = `${idx + 1}/${DIALOGS.length}`
    }

    const next = () => { if (idx < DIALOGS.length - 1) idx++; render() }
    const prev = () => { if (idx > 0) idx--; render() }

    bubble.addEventListener('click', (e) => {
        const t = e.target as HTMLElement
        if (t.closest('button')) return
        next()
    })
    btnNext.addEventListener('click', next)
    btnPrev.addEventListener('click', prev)
    bubble.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') next()
        if (e.key === 'ArrowLeft') prev()
    })

    idx = 0
    render()
}