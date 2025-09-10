type Ecoponto = {
  id: string;
  nome: string;
  endereco: string;
  semana: string;
  sabado: string;
};

const PAGE_SIZE = 2;
const DATA_URL = `${import.meta.env.BASE_URL}data/ecopontos.json`;

async function loadEcopontos(): Promise<Ecoponto[]> {
  const res = await fetch(DATA_URL, { cache: 'no-cache' });
  return (await res.json()) as Ecoponto[];
}

function buildMapsUrl(query: string) {
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

function card(ep: Ecoponto) {
  const mapsUrl = buildMapsUrl(`${ep.nome}, ${ep.endereco}`);
  return /*html*/ `
    <article class="eco-card" data-id="${ep.id}">
      <header class="eco-card-hd">
        <i class="fa-sharp-duotone fa-location-dot"></i>
        <h3 class="eco-title">${ep.nome}</h3>

        <div class="eco-actions">
            <a class="btn" href="${mapsUrl}" target="_blank" rel="noopener" aria-label="Abrir no Google Maps">
              <i class="fa-sharp-duotone fa-route" style="margin-right:.35rem;"></i>
            </a>
        </div>
      </header>

      <p class="eco-address">
        <i class="fa-sharp-duotone fa-map-location-dot"></i>
        ${ep.endereco}
      </p>

      <ul class="eco-hours">
        <li>
          <i class="fa-sharp-duotone fa-calendar-days"></i>
          ${ep.semana}
        </li>
        <li>
          <i class="fa-sharp-duotone fa-calendar-day"></i>
          ${ep.sabado}
        </li>
      </ul>
    </article>
  `;
}

export function EcoPontos() {
  return /*html*/ `
    <section class="eco-wrap shout">
      <h2 class="eco-h2">
        <i class="fa-sharp-duotone fa-recycle"></i>
        ECOPONTOS DE JUNDIAÍ
      </h2>

      <div id="eco-list" class="eco-list"></div>

      <div class="eco-pager">
        <button id="eco-prev" class="btn btn-ghost" aria-label="Página anterior">
          <i class="fa-sharp-duotone fa-circle-left"></i>
        </button>

        <span id="eco-page" class="eco-page-indicator">1</span>

        <button id="eco-next" class="btn" aria-label="Próxima página">
          <i class="fa-sharp-duotone fa-circle-right"></i>
        </button>
      </div>
    </section>
  `;
}

export async function initEcoPontos() {
  const list = document.getElementById('eco-list') as HTMLDivElement | null;
  const btnPrev = document.getElementById('eco-prev') as HTMLButtonElement | null;
  const btnNext = document.getElementById('eco-next') as HTMLButtonElement | null;
  const pageIndicator = document.getElementById('eco-page') as HTMLSpanElement | null;

  if (!list || !btnPrev || !btnNext || !pageIndicator) return;

  const ECOPONTOS = await loadEcopontos();

  let page = 0;
  const totalPages = Math.ceil(ECOPONTOS.length / PAGE_SIZE);

  const render = () => {
    const start = page * PAGE_SIZE;
    const slice = ECOPONTOS.slice(start, start + PAGE_SIZE);
    list.innerHTML = slice.map(card).join('');
    pageIndicator.textContent = `${page + 1}/${totalPages}`;
    btnPrev.disabled = page === 0;
    btnNext.disabled = page >= totalPages - 1;
  };

  btnPrev.addEventListener('click', () => { if (page > 0) { page--; render(); } });
  btnNext.addEventListener('click', () => { if (page < totalPages - 1) { page++; render(); } });

  render();
}
