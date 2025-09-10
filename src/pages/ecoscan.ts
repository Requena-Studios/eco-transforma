type BinId = 'PAPEL' | 'PLÁSTICO' | 'VIDRO' | 'METAL' | 'ORGÂNICO' | 'ECOPONTO'
type EcoBin = { id: BinId | 'ECOPONTO'; nome: string; cor: string; emoji: string; img?: string }
type EcoItem = {
    id: string; nome: string; material: string; lixeira: BinId | 'ECOPONTO';
    tempo_decomposicao: string; exemplos?: string[]; observacoes?: string;
    icone?: string; img?: string
}
type EcoScanDB = { bins: EcoBin[]; items: EcoItem[] }

const DATA_URL = `${import.meta.env.BASE_URL}data/ecoscan-items.json`
const IMG = (p?: string) => p ? `${import.meta.env.BASE_URL}img/${p}` : ''

async function loadDB(): Promise<EcoScanDB> {
    const res = await fetch(DATA_URL, { cache: 'no-cache' })
    return await res.json()
}

// injects minimal CSS needed for scroll and modal close button layering/position
function ensureStyles() {
    const id = 'ecoscan-styles'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.textContent = `
/* eco-grid vertical scroll */
.eco-grid {
  overflow-y: auto;
  max-height: calc(100vh - 370px);
  padding-right: 2px; /* room for scrollbar */
}

/* modal layering and close button position */
.eco-modal { position: fixed; inset: 0; z-index: 1000; }
.eco-modal__panel { position: relative; max-width: 85vw; }
.eco-modal__close { position: absolute; top: .5rem; right: .5rem; z-index: 2; }
.eco-modal__body { margin-top: 1.5rem; }
`
    document.head.appendChild(style)
}

/* modal mínimo */
function showModal(html: string) {
    ensureStyles()
    const overlay = document.createElement('div')
    overlay.className = 'eco-modal'
    overlay.innerHTML = `
    <div class="eco-modal__backdrop" data-close></div>
    <div class="eco-modal__panel" role="dialog" aria-modal="true">
      <button class="eco-modal__close btn btn-ghost" type="button" data-close aria-label="Fechar">
        <i class="fa-sharp-duotone fa-circle-xmark"></i>
      </button>
      <div class="eco-modal__body">${html}</div>
    </div>
  `
    const close = () => {
        if (overlay.parentElement) document.body.removeChild(overlay)
        document.removeEventListener('keydown', onKeyDown, true)
    }
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') close()
    }

    overlay.addEventListener('click', e => {
        const el = e.target as HTMLElement
        // close if backdrop OR any element inside a [data-close] (e.g., the <i> inside the button)
        if (el.closest('[data-close]')) close()
    }, true)

    document.addEventListener('keydown', onKeyDown, true)
    document.body.appendChild(overlay)
}

export function EcoScan() {
    return /*html*/`
    <section class="shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-camera"></i>
        ECOSCAN
      </h2>
      <div id="ecoscan-root"></div>
    </section>
  `
}

export async function initEcoScan() {
    ensureStyles()

    const host = document.getElementById('ecoscan-root') as HTMLDivElement | null
    if (!host) return
    const root = host as HTMLDivElement; // 👈 fixa o narrowing para closures

    const db = await loadDB()
    const bins = db.bins.filter(b => ['PAPEL', 'PLÁSTICO', 'VIDRO', 'METAL', 'ORGÂNICO'].includes(b.id))

    root.innerHTML = `
    <div class="ecoscan-filters card">
      <div class="filters-wrap">
        ${bins.map(b => `
          <button class="filter-chip" data-bin="${b.id}" aria-pressed="false" title="${b.nome}">
            ${b.img ? `<img alt="${b.nome}" src="${IMG(b.img)}"/>` : `<span class="dot" style="background:${b.cor}"></span>`}
            <span class="label">${b.id}</span>
          </button>
        `).join('')}
        <button class="filter-chip" data-bin="ALL" aria-pressed="true" title="TODOS">
          <i class="fa-sharp-duotone fa-magnifying-glass"></i>
          <span class="label">TODOS</span>
        </button>
      </div>
    </div>

    <div id="eco-grid" class="eco-grid"></div>
  `

    const grid = root.querySelector('#eco-grid') as HTMLDivElement

    function renderGrid(items: EcoItem[]) {
        grid.innerHTML = items.map(it => `
      <button class="eco-card-tile" data-id="${it.id}" title="${it.nome}">
        <div class="eco-card-tile__img">
          ${it.img ? `<img alt="${it.nome}" src="${IMG(it.img)}"/>`
                : `<i class="${it.icone || 'fa-sharp-duotone fa-recycle'}"></i>`}
        </div>
        <div class="eco-card-tile__txt">
          <strong>${it.nome}</strong>
          <small>${it.material}</small>
        </div>
      </button>
    `).join('')
    }

    function renderDetails(it: EcoItem) {
        showModal(`
      <article class="eco-detail">
        <header>
          <div class="media">
            ${it.img ? `<img alt="${it.nome}" src="${IMG(it.img)}"/>`
                : `<i class="${it.icone || 'fa-sharp-duotone fa-recycle'}"></i>`}
          </div>
          <div>
            <h3>${it.nome}</h3>
            <small>${it.material}</small>
          </div>
        </header>
        <ul class="eco-facts">
          <li><strong>LIXEIRA:</strong> ${it.lixeira}</li>
          <li><strong>TEMPO:</strong> ${it.tempo_decomposicao}</li>
          ${it.exemplos?.length ? `<li><strong>EXEMPLOS:</strong> ${it.exemplos.join(', ')}</li>` : ''}
          ${it.observacoes ? `<li><strong>DICA:</strong> ${it.observacoes}</li>` : ''}
        </ul>
      </article>
    `)
    }

    function setActive(bin: BinId | 'ALL') {
        // marca chip ativo
        const chips = root.querySelectorAll<HTMLButtonElement>('.filter-chip')
        chips.forEach(c => {
            const on = c.dataset.bin === String(bin)
            c.classList.toggle('is-active', on)
            c.setAttribute('aria-pressed', on ? 'true' : 'false')
        })

        const list = bin === 'ALL' ? db.items : db.items.filter(it => it.lixeira === bin)
        renderGrid(list)
    }

    // init
    setActive('ALL')

    root.addEventListener('click', (e) => {
        const chip = (e.target as HTMLElement).closest('.filter-chip') as HTMLButtonElement | null
        if (chip) {
            setActive((chip.dataset.bin as BinId | 'ALL') || 'ALL')
            return
        }
        const tile = (e.target as HTMLElement).closest('.eco-card-tile') as HTMLButtonElement | null
        if (tile) {
            const id = tile.dataset.id!
            const item = db.items.find(i => i.id === id)
            if (item) renderDetails(item)
            return
        }
    })
}
