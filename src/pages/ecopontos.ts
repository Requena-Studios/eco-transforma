type Ecoponto = {
  id: string;
  nome: string;
  endereco: string;
  semana: string;
  sabado: string;
};

const ECOPONTOS: Ecoponto[] = [
  {
    id: 'cidade-nova',
    nome: 'ECOPONTO CIDADE NOVA',
    endereco: 'R. DORACI CAMARGO ALEGRE, S/Nº – CIDADE NOVA, JUNDIAÍ, 13219-410',
    semana: 'SEG. - SEX.: 8H ÀS 12H – 13H ÀS 17H',
    sabado: 'SÁBADO: 8H ÀS 12H',
  },
  {
    id: 'jardim-do-lago',
    nome: 'ECOPONTO JARDIM DO LAGO',
    endereco: 'R. GERALDO SANTOS, 195 – JARDIM DO LAGO, JUNDIAÍ, 13203-650',
    semana: 'SEG. - SEX.: 7H30 ÀS 12H – 13H ÀS 16H',
    sabado: 'SÁBADO: 7H ÀS 12H – 13H ÀS 15H',
  },
  {
    id: 'jardim-taruma',
    nome: 'ECOPONTO JARDIM TARUMÃ',
    endereco: 'RUA RIO DE JANEIRO, S/N – JARDIM TARUMÃ, JUNDIAÍ, 13216-570',
    semana: 'SEG. - SEX.: 8H ÀS 12H30 – 13H30 ÀS 16H30',
    sabado: 'SÁBADO: 8H ÀS 12H',
  },
  {
    id: 'morada-das-vinhas',
    nome: 'ECOPONTO MORADA DAS VINHAS',
    endereco: 'R. UVA NIÁGARA, 376 – PARQUE CECAP, JUNDIAÍ, 13214-719 (PARQUE ECOLÓGICO MORADA DAS VINHAS – “JOSÉ ROBERTO MOTA BARROCA”)',
    semana: 'SEG. - SEX.: 8H ÀS 12H – 13H ÀS 16H30',
    sabado: 'SÁBADO: 8H ÀS 12H',
  },
  {
    id: 'residencial-jundiai',
    nome: 'ECOPONTO RESIDENCIAL JUNDIAÍ',
    endereco: 'AV. EUNICE C. DE SOUZA QUEIROZ, S/Nº – PARQUE RESIDENCIAL JUNDIAÍ, 13212-463',
    semana: 'SEG. - SEX.: 8H ÀS 12H – 13H ÀS 17H',
    sabado: 'SÁBADO: 8H ÀS 12H',
  },
  {
    id: 'vila-nambi',
    nome: 'ECOPONTO VILA NAMBI',
    endereco: 'R. MARQUÊS DE MARICÁ, S/Nº – VILA NAMBI, JUNDIAÍ, 13219-020',
    semana: 'SEG. - SEX.: 8H ÀS 12H – 13H ÀS 17H',
    sabado: 'SÁBADO: 8H ÀS 12H',
  },
];

const PAGE_SIZE = 2;

function buildMapsUrl(query: string) {
  const q = encodeURIComponent(query);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

function card(ep: Ecoponto) {
  const mapsUrl = buildMapsUrl(`${ep.nome}, ${ep.endereco}`);
  return /*html*/ `
    <article class="eco-card" data-id="${ep.id}">
      <header class="eco-card-hd">
        <i class="fa-sharp-duotone fa-location-dot"
          ></i>
        <h3 class="eco-title">${ep.nome}</h3>

        <div class="eco-actions">
            <a class="btn" href="${mapsUrl}" target="_blank" rel="noopener"
               aria-label="Abrir no Google Maps">
              <i class="fa-sharp-duotone fa-route"
                 style="margin-right:.35rem;"></i>
            </a>
        </div>
      </header>

      <p class="eco-address">
        <i class="fa-sharp-duotone fa-map-location-dot"
          ></i>
        ${ep.endereco}
      </p>

      <ul class="eco-hours">
        <li>
          <i class="fa-sharp-duotone fa-calendar-days"
            ></i>
          ${ep.semana}
        </li>
        <li>
          <i class="fa-sharp-duotone fa-calendar-day"
            ></i>
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
        <i class="fa-sharp-duotone fa-recycle"
          ></i>
        ECOPONTOS DE JUNDIAÍ
      </h2>

      <div id="eco-list" class="eco-list"></div>

      <div class="eco-pager">
        <button id="eco-prev" class="btn btn-ghost" aria-label="Página anterior">
          <i class="fa-sharp-duotone fa-circle-left"
            ></i>
        </button>

        <span id="eco-page" class="eco-page-indicator">1</span>

        <button id="eco-next" class="btn" aria-label="Próxima página">
          <i class="fa-sharp-duotone fa-circle-right"
            ></i>
        </button>
      </div>
    </section>
  `;
}

export function initEcoPontos() {
  const list = document.getElementById('eco-list') as HTMLDivElement | null;
  const btnPrev = document.getElementById('eco-prev') as HTMLButtonElement | null;
  const btnNext = document.getElementById('eco-next') as HTMLButtonElement | null;
  const pageIndicator = document.getElementById('eco-page') as HTMLSpanElement | null;

  if (!list || !btnPrev || !btnNext || !pageIndicator) return;

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
