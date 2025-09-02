import mascoteImg from '/img/mascote.webp'
import { openModal, closeModal } from '../components/modal';
import { SOBRE_PAGES } from '../content/sobre';

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
          <i class="fa-sharp-duotone fa-circle-left"
            ></i>
        </button>
        <span id="progress" class="progress"></span>
        <button id="next" class="btn" aria-label="Avançar">
          <i class="fa-sharp-duotone fa-circle-right"
            ></i>
        </button>
      </div>
    </div>
  </div>

  <div class="hero-figure">
    <img src="${mascoteImg}" alt="Mascote EcoTransforma" class="hero-mascote" />
  </div>

  <div style="display: flex; gap: .3rem;">
      <div id='divInstall' class="hidden hero-cta">
        <button id="btnInstall" class="btn" aria-label="Instalar App">
        <i class="fa-sharp-duotone fa-download"
             style="margin-right:.35rem;"></i>
             INSTALAR APP</button>
      </div>

      <div class="hero-cta">
        <button id="btn-sobre" class="btn" aria-label="Abrir Sobre">
          <i class="fa-sharp-duotone fa-circle-question"
             style="margin-right:.35rem;"></i>
          SOBRE
        </button>
      </div>
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
    const btnSobre = document.getElementById('btn-sobre') as HTMLButtonElement | null;
    const divInstall = document.getElementById('divInstall') as HTMLDivElement | null;
    const btnInstall = document.getElementById('btnInstall') as HTMLButtonElement | null;

    const render = () => {
        text.innerHTML = DIALOGS[idx]
        btnPrev.disabled = idx === 0
        progress.textContent = `${idx + 1}/${DIALOGS.length}`
    }

    function isInstalled(): boolean {
        const mq = (q: string) => matchMedia(q).matches;

        const appLike =
            mq('(display-mode: fullscreen)') ||
            mq('(display-mode: standalone)') ||
            mq('(display-mode: window-controls-overlay)') ||
            mq('(display-mode: minimal-ui)');

        const iosStandalone = (navigator as any).standalone === true;

        const twa = document.referrer?.startsWith('android-app://') ?? false;

        return appLike || iosStandalone || twa;
    }

    let deferredPrompt: BeforeInstallPromptEvent | null = null

    window.addEventListener('beforeinstallprompt', (e: Event) => {
        e.preventDefault()
        deferredPrompt = e as BeforeInstallPromptEvent
        if (isInstalled()) return
        divInstall?.classList.remove('hidden')
    }, { once: true });

    async function installPWA(): Promise<void> {
        if (!deferredPrompt) return
        if (isInstalled()) return
        await deferredPrompt.prompt()
        await deferredPrompt.userChoice
        deferredPrompt = null;
        divInstall?.classList.add('hidden');
    }

    window.addEventListener('appinstalled', () => {
        deferredPrompt = null;
        divInstall?.classList.add('hidden');
    });

    btnInstall?.addEventListener('click', installPWA)

    const next = () => { if (idx < DIALOGS.length - 1) idx++; render() }
    const prev = () => { if (idx > 0) idx--; render() }

    bubble.addEventListener('click', (e) => {
        const t = e.target as HTMLElement
        if (t.closest('button')) return
        next()
    })

    btnSobre?.addEventListener('click', () => {
        let page = 0;

        const mount = () => {
            openModal(`
            <h3 style="display: flex; justify-content: center; align-items: center;">
                <i class="fa-sharp-duotone fa-circle-info"
                    style="margin-right:.35rem;"></i>
                SOBRE NÓS
            </h3>

            <div class="modal-content" id="sobre-content">${SOBRE_PAGES[page]}</div>

            <div class="modal-footer">
                <div class="left">
                <button id="sobre-prev" class="btn btn-ghost" ${page === 0 ? 'disabled' : ''} aria-label="Voltar">
                    <i class="fa-sharp-duotone fa-circle-left"
                       ></i>
                </button>
                </div>

                <div class="modal-progress" id="sobre-progress">${page + 1}/${SOBRE_PAGES.length}</div>

                <div class="right">
                <button id="sobre-close" class="btn btn-ghost" aria-label="Fechar">
                    <i class="fa-sharp-duotone fa-circle-xmark"
                       ></i>
                </button>
                <button id="sobre-next" class="btn" ${page === SOBRE_PAGES.length - 1 ? 'disabled' : ''} aria-label="Avançar">
                    <i class="fa-sharp-duotone fa-circle-right"
                       ></i>
                </button>
                </div>
            </div>
            `);

            const prev = document.getElementById('sobre-prev') as HTMLButtonElement | null;
            const next = document.getElementById('sobre-next') as HTMLButtonElement | null;
            const close = document.getElementById('sobre-close') as HTMLButtonElement | null;

            prev?.addEventListener('click', () => {
                if (page > 0) {
                    page--;
                    mount();
                }
            });
            next?.addEventListener('click', () => {
                if (page < SOBRE_PAGES.length - 1) {
                    page++;
                    mount();
                }
            });
            close?.addEventListener('click', () => closeModal());
        };

        mount();
    });

    btnNext.addEventListener('click', next)

    btnPrev.addEventListener('click', prev)

    bubble.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') next()
        if (e.key === 'ArrowLeft') prev()
    })

    idx = 0

    render()
}
