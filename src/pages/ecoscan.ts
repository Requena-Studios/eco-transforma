type BinId = 'AZUL' | 'VERMELHA' | 'VERDE' | 'AMARELA' | 'MARROM' | 'CINZA' | 'ECOPONTO'
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

/* modal mínimo */
function showModal(html: string) {
    const overlay = document.createElement('div')
    overlay.className = 'eco-modal'
    overlay.innerHTML = `
    <div class="eco-modal__backdrop" data-close></div>
    <div class="eco-modal__panel" role="dialog" aria-modal="true">
      <button class="eco-modal__close btn btn-ghost" data-close aria-label="Fechar">
        <i class="fa-sharp-duotone fa-circle-xmark"></i>
      </button>
      <div class="eco-modal__body">${html}</div>
    </div>
  `
    overlay.addEventListener('click', e => {
        const el = e.target as HTMLElement
        if (el.dataset.close !== undefined) document.body.removeChild(overlay)
    })
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
    const host = document.getElementById('ecoscan-root') as HTMLDivElement | null
    if (!host) return
    const root = host as HTMLDivElement; // 👈 fixa o narrowing para closures

    const db = await loadDB()
    const bins = db.bins.filter(b => ['AZUL', 'VERMELHA', 'VERDE', 'AMARELA', 'MARROM', 'CINZA'].includes(b.id))

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
