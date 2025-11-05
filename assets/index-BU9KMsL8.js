const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/odd-one-out-trashbin-CeRyzMDP.js","assets/odd-one-out-trashbin-AnAEAaoO.css","assets/choose-for-trashbin-AWjyFa4F.js","assets/choose-for-trashbin-ZOpaeZbA.css","assets/memory-match-DtffwDOA.js","assets/memory-match-DxZU0kuZ.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();const z="modulepreload",W=function(e){return"/eco-transforma/"+e},x={},v=function(t,i,o){let n=Promise.resolve();if(i&&i.length>0){let r=function(l){return Promise.all(l.map(m=>Promise.resolve(m).then(s=>({status:"fulfilled",value:s}),s=>({status:"rejected",reason:s}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),c=d?.nonce||d?.getAttribute("nonce");n=r(i.map(l=>{if(l=W(l),l in x)return;x[l]=!0;const m=l.endsWith(".css"),s=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${s}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":z,m||(u.as="script"),u.crossOrigin="",u.href=l,c&&u.setAttribute("nonce",c),document.head.appendChild(u),m)return new Promise((E,f)=>{u.addEventListener("load",E),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(d){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=d,window.dispatchEvent(c),!c.defaultPrevented)throw d}return n.then(d=>{for(const c of d||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})};function X(e={}){const{immediate:t=!1,onNeedRefresh:i,onOfflineReady:o,onRegistered:n,onRegisteredSW:a,onRegisterError:d}=e;let c,r;const l=async(s=!0)=>{await r};async function m(){if("serviceWorker"in navigator){if(c=await v(async()=>{const{Workbox:s}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:s}},[]).then(({Workbox:s})=>new s("/eco-transforma/sw.js",{scope:"/eco-transforma/",type:"classic"})).catch(s=>{d?.(s)}),!c)return;c.addEventListener("activated",s=>{(s.isUpdate||s.isExternal)&&window.location.reload()}),c.addEventListener("installed",s=>{s.isUpdate||o?.()}),c.register({immediate:t}).then(s=>{a?a("/eco-transforma/sw.js",s):n?.(s)}).catch(s=>{d?.(s)})}}return r=m(),l}let p=null;function K(){Y(),ee(),D()}function Y(){if(p)return;const e=document.querySelector(".app-header-container");e&&(p=document.createElement("i"),p.id="network-status-icon",p.className="network-status-icon",p.setAttribute("role","status"),p.setAttribute("aria-live","polite"),e.appendChild(p))}function ee(){window.addEventListener("online",D),window.addEventListener("offline",D)}function D(){if(!p)return;navigator.onLine?(p.className="network-status-icon online",p.setAttribute("aria-label","Conectado à internet"),p.innerHTML='<i class="fa-sharp-duotone fa-wifi"></i>'):(p.className="network-status-icon offline",p.setAttribute("aria-label","Sem conexão com a internet"),p.innerHTML='<i class="fa-sharp-duotone fa-wifi-slash"></i>')}const te="/eco-transforma/img/mascote.webp";function ne(e){O();const t=document.createElement("div");t.className="modal-backdrop",t.innerHTML=`
    <div class="modal">
      <button class="modal-close" aria-label="Fechar">×</button>
      <div class="modal-content">${e}</div>
    </div>`,document.body.appendChild(t),t.querySelector(".modal-close")?.addEventListener("click",O),t.addEventListener("click",i=>{i.target===t&&O()}),window.addEventListener("keydown",G)}function O(){const e=document.querySelector(".modal-backdrop");e&&(e.remove(),window.removeEventListener("keydown",G))}function G(e){e.key==="Escape"&&O()}const I=[`
  <h4><i class="fa-sharp-duotone fa-lightbulb-on sobre-icon" style="--fa-primary-color:#f5b301;--fa-secondary-color:#ffd566;"></i> COMO SURGIU?</h4>
  <p>O PROJETO ECOTRANSFORMA SURGIU ATRAVÉS DO PROGRAMA STEAM, REALIZADO PELA PARCERIA DA LSI-TEC, FUNDAÇÃO SIEMENS E MAESTRO EDUCAÇÃO, QUE VISA INSERIR A PESQUISA, TECNOLOGIA E METODOLOGIA CIENTÍFICA PARA ALUNOS DO ENSINO FUNDAMENTAL.</p>
  `,`
  <h4><i class="fa-sharp-duotone fa-users sobre-icon" ></i> QUEM SOMOS?</h4>
  <p>O PROJETO ECOTRANSFORMA FOI CRIADO POR ALUNOS DO 3º ANO B DA EMEB DEPUTADO RANIERI MAZZILLI, DO MUNICÍPIO DE JUNDIAÍ, COM ORIENTAÇÃO DA PROFESSORA RAYANE MORAES.</p>
  <p>O PRINCIPAL OBJETIVO É DESPERTAR A CONSCIÊNCIA AMBIENTAL NA COMUNIDADE E CONTRIBUIR ATIVAMENTE PARA UM MUNDO MELHOR, PRATICANDO A SUSTENTABILIDADE, FAZENDO USO DOS 5 RS E DANDO O DESCARTE ADEQUADO PARA OS RESÍDUOS GERADOS. ♻️</p>
  `,`
  <h4><i class="fa-sharp-duotone fa-clipboard-list-check sobre-icon" style="--fa-primary-color:#2f855a;--fa-secondary-color:#b7dfc9;"></i> RESPONSÁVEIS PELO PROJETO</h4>
  <p><strong>DIRETORA:</strong></p>
  <p>THAÍS ALVES MACEDO DE SOUZA</p>
  <p><strong>COORDENADORA PEDAGÓGICA:</strong></p>
  <p>JANIEIDE DA SILVA NEUBAUER</p>
  <p><strong>PROFESSORA:</strong></p>
  <p>RAYANE DE MORAES B. SANTOS</p>
  `,`
  <h4><i class="fa-sharp-duotone fa-children sobre-icon" ></i> ESTUDANTES (1/3)</h4>
  <ul style="padding-inline-start: 1rem;">
    <li>ALANA BARRAGAN KAZMIRCZUK</li>
    <li>ALÉXIA AZEVEDO DE JESUS</li>
    <li>ALICE FOGANHOLI</li>
    <li>ANTHONY EMANUEL DOS SANTOS SILVA</li>
    <li>ARTHUR VINICIUS DOS SANTOS SILVA</li>
    <li>BÁRBARA LOPES XAVIER DA COSTA</li>
    <li>DAPHYNE DIAS MARTINS</li>
    <li>DAVI LUCAS FERREIRA PENA</li>
  </ul>
  `,`
  <h4><i class="fa-sharp-duotone fa-children sobre-icon" ></i> ESTUDANTES (2/3)</h4>
  <ul style="padding-inline-start: 1rem;">
    <li>ELISABETE LIMA</li>
    <li>ENZO GABRIEL DE OLIVEIRA MARQUES</li>
    <li>ENZO HENRIQUE SILVA DE MENESES</li>
    <li>GABRIELLE CORREIA SANCIANI</li>
    <li>GUILHERME MIGUEL MUKAI ROSA</li>
    <li>HEITOR FECCO CADORINI</li>
    <li>JOÃO LUCAS DA CUNHA ZAGO</li>
    <li>JOÃO VICTOR BELMIRO CARDOSO</li>
    <li>KAYNAN SPOLADORE BORGES</li>
  </ul>
  `,`
  <h4><i class="fa-sharp-duotone fa-children sobre-icon" ></i> ESTUDANTES (3/3)</h4>
  <ul style="padding-inline-start: 1rem;">
    <li>LORENA D'URBANO TURRA</li>
    <li>MIGUEL AZEVEDO DA SILVA</li>
    <li>PABLO MANOEL BARROS HERMANO</li>
    <li>PEDRO SOUZA COSTA</li>
    <li>PYETRO RUAN RODRIGUES SILVA</li>
    <li>RYAN DAVI DA SILVA FERNANDES</li>
    <li>SAMUEL TABOADA FILHO</li>
    <li>SOPHIE ARIADINE CARLOS RODRIGUES</li>
  </ul>
  `,`
  <h4><i class="fa-sharp-duotone fa-hands-holding-circle sobre-icon" ></i> COMO AJUDAR? (1/2)</h4>
  <ul style="padding-inline-start: 1rem;">
    <li>♻️ SEPARAR O LIXO RECICLÁVEL DO ORGÂNICO;</li>
    <li>🗑️ FAZER O DESCARTE ADEQUADO DOS RESÍDUOS (LIXEIRA CERTA);</li>
    <li>🚯 NÃO JOGAR LIXO NA RUA, CALÇADAS OU CÓRREGOS;</li>
    <li>🏗️ LEVAR ENTULHOS, MÓVEIS E PODAS ATÉ UM ECOPONTO;</li>
  </ul>
  `,`
  <h4><i class="fa-sharp-duotone fa-hands-holding-circle sobre-icon" ></i> COMO AJUDAR? (2/2)</h4>
  <ul style="padding-inline-start: 1rem;">
    <li>🛍️ DIMINUIR O USO DE MATERIAIS (COMPRAR APENAS O NECESSÁRIO);</li>
    <li>🎨 USAR A CRIATIVIDADE PARA REUTILIZAR MATERIAIS RECICLÁVEIS;</li>
    <li>🚿 FECHAR TORNEIRA/CHUVEIRO ENQUANTO ESCOVA OS DENTES OU LAVA A LOUÇA;</li>
    <li>⚡ EVITAR DESPERDÍCIO DE ALIMENTOS, ÁGUA E ENERGIA.</li>
  </ul>
  `,`
  <p><em>
  <i class="fa-sharp-duotone fa-trash-can-check sobre-icon"></i>
  * LEMBRE-SE:
  </em></p>
  <p><em>
  LUGAR DE LIXO, É NO LIXO!
  </em></p>
  <p>🌎 UMA INICIATIVA QUE BUSCA CUIDAR DO MEIO AMBIENTE E PRESERVAR A VIDA. VENHA PARTICIPAR DESSA MISSÃO COM A GENTE! ✨</p>
  `,`
  <h4><i class="fa-sharp-duotone fa-code sobre-icon" style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe29a;"></i> CRÉDITOS</h4>
  <p>👨‍💻 DESENVOLVIDO POR: <strong>LEANDRO REQUENA</strong></p>
  <p>🏢 REQUENA STUDIOS DESENVOLVIMENTO E TECNOLOGIA LTDA</p>
  <p>🪪 CNPJ: <strong>49.433.965/0001-67</strong></p>
  <p>✉️ <a href="mailto:requenastudios@gmail.com" style="text-transform: lowercase;">requenastudios@gmail.com</a></p>
  `],L=["OLÁ! EU SOU O SUCATECO,<br/>MASCOTINHO DO ECOTRANSFORMA.","JUNTE-SE A NÓS NESSA MISSÃO<br/>SUSTENTÁVEL E VENHA CUIDAR<br/> DO PLANETA COM A GENTE!","SELECIONE UMA DAS OPÇÕES<br/>ABAIXO E DESCUBRA COMO FAZER ISSO!"];let h=0;function ie(){return`
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
    <img src="${te}" alt="Mascote EcoTransforma" class="hero-mascote" />
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
  `}function se(){const e=document.getElementById("bubble"),t=document.getElementById("bubble-text"),i=document.getElementById("prev"),o=document.getElementById("next"),n=document.getElementById("progress"),a=document.getElementById("btn-sobre"),d=document.getElementById("divInstall"),c=document.getElementById("btnInstall"),r=()=>{t.innerHTML=L[h],i.disabled=h===0,n.textContent=`${h+1}/${L.length}`},l=()=>{g&&!j()?d?.classList.remove("hidden"):d?.classList.add("hidden")};l();const m=()=>l(),s=()=>l();window.addEventListener("pwa-installable",m),window.addEventListener("pwa-installed",s),c?.addEventListener("click",async()=>{await _e(),l()});const u=()=>{h<L.length-1&&h++,r()},E=()=>{h>0&&h--,r()};return e.addEventListener("click",f=>{f.target.closest("button")||u()}),a?.addEventListener("click",()=>{let f=0;const b=()=>{ne(`
            <h3 style="display: flex; justify-content: center; align-items: center;">
                <i class="fa-sharp-duotone fa-circle-info"
                    style="margin-right:.35rem;"></i>
                SOBRE NÓS
            </h3>

            <div class="modal-content" id="sobre-content">${I[f]}</div>

            <div class="modal-footer">
                <div class="left">
                <button id="sobre-prev" class="btn btn-ghost" ${f===0?"disabled":""} aria-label="Voltar">
                    <i class="fa-sharp-duotone fa-circle-left"
                       ></i>
                </button>
                </div>

                <div class="modal-progress" id="sobre-progress">${f+1}/${I.length}</div>

                <div class="right">
                <button id="sobre-close" class="btn btn-ghost" aria-label="Fechar">
                    <i class="fa-sharp-duotone fa-circle-xmark"
                       ></i>
                </button>
                <button id="sobre-next" class="btn" ${f===I.length-1?"disabled":""} aria-label="Avançar">
                    <i class="fa-sharp-duotone fa-circle-right"
                       ></i>
                </button>
                </div>
            </div>
            `);const q=document.getElementById("sobre-prev"),Q=document.getElementById("sobre-next"),Z=document.getElementById("sobre-close");q?.addEventListener("click",()=>{f>0&&(f--,b())}),Q?.addEventListener("click",()=>{f<I.length-1&&(f++,b())}),Z?.addEventListener("click",()=>O())};b()}),o.addEventListener("click",u),i.addEventListener("click",E),e.addEventListener("keydown",f=>{(f.key==="ArrowRight"||f.key==="Enter"||f.key===" ")&&u(),f.key==="ArrowLeft"&&E()}),h=0,r(),()=>{window.removeEventListener("pwa-installable",m),window.removeEventListener("pwa-installed",s)}}const oe="/eco-transforma/data/ecoscan-items.json",w=e=>e?`/eco-transforma/img/${e}`:"";async function ae(){return await(await fetch(oe,{cache:"no-cache"})).json()}function _(){const e="ecoinfo-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
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
`,document.head.appendChild(t)}function re(e){_();const t=document.createElement("div");t.className="eco-modal",t.innerHTML=`
    <div class="eco-modal__backdrop" data-close></div>
    <div class="eco-modal__panel" role="dialog" aria-modal="true">
      <button class="eco-modal__close btn btn-ghost" type="button" data-close aria-label="Fechar">
        <i class="fa-sharp-duotone fa-circle-xmark"></i>
      </button>
      <div class="eco-modal__body">${e}</div>
    </div>
  `;const i=()=>{t.parentElement&&document.body.removeChild(t),document.removeEventListener("keydown",o,!0)},o=n=>{n.key==="Escape"&&i()};t.addEventListener("click",n=>{n.target.closest("[data-close]")&&i()},!0),document.addEventListener("keydown",o,!0),document.body.appendChild(t)}function ce(){return`
    <section class="shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-circle-info"></i>
        ECOINFO
      </h2>
      <div id="ecoinfo-root"></div>
    </section>
  `}async function le(){_();const e=document.getElementById("ecoinfo-root");if(!e)return;const t=e,i=await ae(),o=i.bins.filter(r=>["PAPEL","PLÁSTICO","VIDRO","METAL","ORGÂNICO"].includes(r.id));t.innerHTML=`
    <div class="ecoinfo-filters card">
      <div class="filters-wrap">
        ${o.map(r=>`
          <button class="filter-chip" data-bin="${r.id}" aria-pressed="false" title="${r.nome}">
            ${r.img?`<img alt="${r.nome}" src="${w(r.img)}"/>`:`<span class="dot" style="background:${r.cor}"></span>`}
            <span class="label">${r.id}</span>
          </button>
        `).join("")}
        <button class="filter-chip" data-bin="ALL" aria-pressed="true" title="TODOS">
          <i class="fa-sharp-duotone fa-magnifying-glass"></i>
          <span class="label">TODOS</span>
        </button>
      </div>
    </div>

    <div id="eco-grid" class="eco-grid"></div>
  `;const n=t.querySelector("#eco-grid");function a(r){n.innerHTML=r.map(l=>`
      <button class="eco-card-tile" data-id="${l.id}" title="${l.nome}">
        <div class="eco-card-tile__img">
          ${l.img?`<img alt="${l.nome}" src="${w(l.img)}"/>`:`<i class="${l.icone||"fa-sharp-duotone fa-recycle"}"></i>`}
        </div>
        <div class="eco-card-tile__txt">
          <strong>${l.nome}</strong>
          <small>${l.material}</small>
        </div>
      </button>
    `).join("")}function d(r){re(`
      <article class="eco-detail">
        <header>
          <div class="media">
            ${r.img?`<img alt="${r.nome}" src="${w(r.img)}"/>`:`<i class="${r.icone||"fa-sharp-duotone fa-recycle"}"></i>`}
          </div>
          <div>
            <h3>${r.nome}</h3>
            <small>${r.material}</small>
          </div>
        </header>
        <ul class="eco-facts">
          <li><strong>LIXEIRA:</strong> ${r.lixeira}</li>
          <li><strong>TEMPO DE DECOMPOSIÇÃO:</strong> ${r.tempo_decomposicao}</li>
          ${r.exemplos?.length?`<li><strong>EXEMPLOS:</strong> ${r.exemplos.join(", ")}</li>`:""}
          ${r.observacoes?`<li><strong>DICA:</strong> ${r.observacoes}</li>`:""}
        </ul>
      </article>
    `)}function c(r){t.querySelectorAll(".filter-chip").forEach(s=>{const u=s.dataset.bin===String(r);s.classList.toggle("is-active",u),s.setAttribute("aria-pressed",u?"true":"false")});const m=r==="ALL"?i.items:i.items.filter(s=>s.lixeira===r);a(m)}c("ALL"),t.addEventListener("click",r=>{const l=r.target.closest(".filter-chip");if(l){c(l.dataset.bin||"ALL");return}const m=r.target.closest(".eco-card-tile");if(m){const s=m.dataset.id,u=i.items.find(E=>E.id===s);u&&d(u);return}})}const V=[{id:"quiz",title:"QUIZ DA RECICLAGEM",subtitle:"RESPONDA E APRENDA ♻️",icon:"fa-sharp-duotone fa-circle-question",emoji:"❓",load:()=>v(()=>import("./quiz-BR9YSvaZ.js"),[]).then(e=>e.QuizGame)},{id:"odd-one-out-trashbin",title:"TOQUE NA LIXEIRA CERTA",subtitle:"SEPARAÇÃO DE RESÍDUOS",icon:"fa-sharp-duotone fa-recycle",emoji:"🗑️",load:()=>v(()=>import("./odd-one-out-trashbin-CeRyzMDP.js"),__vite__mapDeps([0,1])).then(e=>e.OddOneOutTrashbinGame)},{id:"choose-for-trashbin",title:"TOQUE NO OBJETO CERTO",subtitle:"SEPARAÇÃO DE RESÍDUOS",icon:"fa-sharp-duotone fa-recycle",emoji:"🗑️",load:()=>v(()=>import("./choose-for-trashbin-AWjyFa4F.js"),__vite__mapDeps([2,3])).then(e=>e.ChooseForTrashbinGame)},{id:"memory-match",title:"JOGO DA MEMÓRIA",subtitle:"COMBINE OS PARES ♻️",icon:"fa-sharp-duotone fa-cards",emoji:"🃏",load:()=>v(()=>import("./memory-match-DtffwDOA.js"),__vite__mapDeps([4,5])).then(e=>e.MemoryMatchGame)}];let S=null;function de(e,t,i,o,n){return`
    <button class="game-card" data-id="${e}" aria-label="${t}">
      <i class="${o}"></i>
      <div class="game-card-txt">
        <strong>${n?`${n} `:""}${t}</strong>
        ${i?`<small>${i}</small>`:""}
      </div>
    </button>
  `}function ue(){return`
    <section class="games-wrap shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-gamepad"></i>
        ECOJOGOS
      </h2>

      <div id="games-selector" class="games-selector">
        ${V.map(e=>de(e.id,e.title,e.subtitle,e.icon,e.emoji)).join("")}
      </div>

      <div id="game-area" class="game-area" hidden></div>
    </section>
  `}function me(){const e=document.getElementById("games-selector"),t=document.getElementById("game-area");if(!e||!t)return;const i=()=>{S?.destroy&&S.destroy(),S=null,t.hidden=!0,e.hidden=!1,t.innerHTML=""},o=async n=>{const a=V.find(c=>c.id===n);if(!a)return;e.hidden=!0,t.hidden=!1;const d=await a.load();S=d,d.mount(t)};e.addEventListener("click",n=>{const a=n.target.closest(".game-card");if(!a)return;const d=a.getAttribute("data-id");o(d)}),document.addEventListener("game:exit",i)}const N=2,fe="/eco-transforma/data/ecopontos.json";async function pe(){return await(await fetch(fe,{cache:"no-cache"})).json()}function Ee(e){return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`}function he(e){const t=Ee(`${e.nome}, ${e.endereco}`);return`
    <article class="eco-card" data-id="${e.id}">
      <header class="eco-card-hd">
        <i class="fa-sharp-duotone fa-location-dot"></i>
        <h3 class="eco-title">${e.nome}</h3>

        <div class="eco-actions">
            <a class="btn" href="${t}" target="_blank" rel="noopener" aria-label="Abrir no Google Maps">
              <i class="fa-sharp-duotone fa-route" style="margin-right:.35rem;"></i>
            </a>
        </div>
      </header>

      <p class="eco-address">
        <i class="fa-sharp-duotone fa-map-location-dot"></i>
        ${e.endereco}
      </p>

      <ul class="eco-hours">
        <li>
          <i class="fa-sharp-duotone fa-calendar-days"></i>
          ${e.semana}
        </li>
        <li>
          <i class="fa-sharp-duotone fa-calendar-day"></i>
          ${e.sabado}
        </li>
      </ul>
    </article>
  `}function ge(){return`
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
  `}async function Ae(){const e=document.getElementById("eco-list"),t=document.getElementById("eco-prev"),i=document.getElementById("eco-next"),o=document.getElementById("eco-page");if(!e||!t||!i||!o)return;const n=await pe();let a=0;const d=Math.ceil(n.length/N),c=()=>{const r=a*N,l=n.slice(r,r+N);e.innerHTML=l.map(he).join(""),o.textContent=`${a+1}/${d}`,t.disabled=a===0,i.disabled=a>=d-1};t.addEventListener("click",()=>{a>0&&(a--,c())}),i.addEventListener("click",()=>{a<d-1&&(a++,c())}),c()}function $(e){if("vibrate"in navigator)try{navigator.vibrate(e)}catch{}}const M={success:50,error:[100,50,100],achievement:[50,100,50,100,50]};function He(){$(M.success)}function Je(){$(M.error)}function ve(){$(M.achievement)}const U="eco:score",T={totalPoints:0,gamesPlayed:0,gamesCompleted:0,history:[],badges:[]};function R(){try{const e=localStorage.getItem(U);return e?JSON.parse(e):{...T}}catch{return{...T}}}function Oe(e){try{localStorage.setItem(U,JSON.stringify(e))}catch(t){console.error("[Score] Failed to save:",t)}}function je(e,t,i=!1){const o=R(),n={gameId:e,points:t,timestamp:Date.now(),completed:i};o.totalPoints+=t,o.gamesPlayed+=1,i&&(o.gamesCompleted+=1),o.history.unshift(n),o.history.length>50&&(o.history=o.history.slice(0,50)),Ie(o),Oe(o),window.dispatchEvent(new CustomEvent("score-updated",{detail:o}))}function be(){localStorage.removeItem(U),window.dispatchEvent(new CustomEvent("score-updated",{detail:T}))}const C=[{id:"first-game",name:"Primeiro Passo",description:"Jogou o primeiro jogo!",icon:"fa-star"},{id:"points-100",name:"Iniciante Eco",description:"Alcançou 100 pontos",icon:"fa-seedling"},{id:"points-500",name:"Eco Aprendiz",description:"Alcançou 500 pontos",icon:"fa-leaf"},{id:"points-1000",name:"Eco Expert",description:"Alcançou 1000 pontos",icon:"fa-trophy"},{id:"games-10",name:"Jogador Dedicado",description:"Completou 10 jogos",icon:"fa-gamepad"},{id:"games-25",name:"Eco Mestre",description:"Completou 25 jogos",icon:"fa-crown"}];function Ie(e){const t=[];C.forEach(i=>{if(e.badges.includes(i.id))return;let o=!1;i.id==="first-game"&&e.gamesPlayed>=1&&(o=!0),i.id==="points-100"&&e.totalPoints>=100&&(o=!0),i.id==="points-500"&&e.totalPoints>=500&&(o=!0),i.id==="points-1000"&&e.totalPoints>=1e3&&(o=!0),i.id==="games-10"&&e.gamesCompleted>=10&&(o=!0),i.id==="games-25"&&e.gamesCompleted>=25&&(o=!0),o&&(e.badges.push(i.id),t.push(i.id))}),t.length>0&&t.forEach(i=>{const o=C.find(n=>n.id===i);o&&Se(o)})}function Se(e){ve();const t=document.createElement("div");t.className="badge-toast",t.innerHTML=`
    <i class="fa-sharp-duotone ${e.icon}"></i>
    <div>
      <strong>Nova Conquista!</strong>
      <span>${e.name}</span>
    </div>
  `,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),100),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},3e3)}function ye(){const e=R();return C.map(t=>({...t,unlocked:e.badges.includes(t.id)}))}function Re(){const t=R().totalPoints;return t<100?{level:1,title:"Iniciante",nextLevelPoints:100}:t<500?{level:2,title:"Aprendiz",nextLevelPoints:500}:t<1e3?{level:3,title:"Intermediário",nextLevelPoints:1e3}:t<2e3?{level:4,title:"Avançado",nextLevelPoints:2e3}:{level:5,title:"Mestre Eco",nextLevelPoints:-1}}function Le(){return`
    <section class="shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-chart-simple"></i>
        ESTATÍSTICAS
      </h2>
      <div id="ecostats-root"></div>
    </section>
  `}function we(){if(!document.getElementById("ecostats-root"))return;P();const t=()=>P();return window.addEventListener("score-updated",t),()=>{window.removeEventListener("score-updated",t)}}function P(){const e=document.getElementById("ecostats-root");if(!e)return;const t=R(),i=Re(),o=ye(),n=o.filter(c=>c.unlocked),a=o.filter(c=>!c.unlocked);if(t.totalPoints===0&&t.gamesPlayed===0){e.innerHTML=`
      <div class="stats-empty-state">
        <i class="fa-sharp-duotone fa-gamepad" style="font-size: 4rem; color: var(--primary); opacity: 0.5; margin-bottom: 1rem;"></i>
        <h3>NENHUM JOGO JOGADO AINDA</h3>
        <p>Comece a jogar para acumular pontos e desbloquear conquistas!</p>
        <a href="#/ecogames" class="btn" style="margin-top: 1rem;">
          <i class="fa-sharp-duotone fa-gamepad" style="margin-right: 0.5rem;"></i>
          COMEÇAR A JOGAR
        </a>
      </div>
    `;return}e.innerHTML=`
    <div class="stats-container">
      <!-- Level Card -->
      <div class="stats-card level-card">
        <div class="level-badge">
          <i class="fa-sharp-duotone fa-star"></i>
          <span class="level-number">NÍVEL ${i.level}</span>
        </div>
        <h3>${i.title.toUpperCase()}</h3>
        <div class="level-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${Ne(t.totalPoints,i.nextLevelPoints)}%"></div>
          </div>
          ${i.nextLevelPoints>0?`<small>${t.totalPoints} / ${i.nextLevelPoints} pontos</small>`:"<small>NÍVEL MÁXIMO!</small>"}
        </div>
      </div>
      
      <!-- Stats Grid -->
      <div class="stats-grid">
        <div class="stat-item">
          <i class="fa-sharp-duotone fa-coins"></i>
          <strong>${t.totalPoints}</strong>
          <span>PONTOS TOTAIS</span>
        </div>
        <div class="stat-item">
          <i class="fa-sharp-duotone fa-gamepad"></i>
          <strong>${t.gamesPlayed}</strong>
          <span>JOGOS JOGADOS</span>
        </div>
        <div class="stat-item">
          <i class="fa-sharp-duotone fa-circle-check"></i>
          <strong>${t.gamesCompleted}</strong>
          <span>JOGOS COMPLETOS</span>
        </div>
        <div class="stat-item">
          <i class="fa-sharp-duotone fa-trophy"></i>
          <strong>${n.length}/${o.length}</strong>
          <span>CONQUISTAS</span>
        </div>
      </div>
      
      <!-- Badges Section -->
      <div class="badges-section">
        <h3><i class="fa-sharp-duotone fa-award"></i> CONQUISTAS</h3>
        
        ${n.length>0?`
          <div class="badges-grid">
            ${n.map(c=>k(c,!0)).join("")}
          </div>
        `:'<p class="no-badges">Jogue mais para desbloquear conquistas!</p>'}
        
        ${a.length>0?`
          <h4 class="locked-title">BLOQUEADAS</h4>
          <div class="badges-grid locked">
            ${a.map(c=>k(c,!1)).join("")}
          </div>
        `:""}
      </div>
      
      <!-- Recent Activity -->
      ${t.history.length>0?`
        <div class="activity-section">
          <h3><i class="fa-sharp-duotone fa-clock-rotate-left"></i> ATIVIDADE RECENTE</h3>
          <div class="activity-list">
            ${t.history.slice(0,10).map(c=>`
              <div class="activity-item">
                <i class="fa-sharp-duotone fa-circle-play"></i>
                <span>${De(c.gameId)}</span>
                <strong class="points">+${c.points}</strong>
                <small>${Te(c.timestamp)}</small>
              </div>
            `).join("")}
          </div>
        </div>
      `:""}
      
      <!-- Reset Button -->
      <div class="reset-section">
        <button id="btn-reset-stats" class="btn">
          <i class="fa-sharp-duotone fa-trash-can"></i>
          Resetar Estatísticas
        </button>
      </div>
    </div>
  `,document.getElementById("btn-reset-stats")?.addEventListener("click",()=>{confirm("Tem certeza que deseja resetar todas as estatísticas? Esta ação não pode ser desfeita.")&&(be(),P())})}function k(e,t){return`
    <div class="badge-card ${t?"unlocked":"locked"}">
      <i class="fa-sharp-duotone ${e.icon}"></i>
      <strong>${e.name}</strong>
      <small>${e.description}</small>
    </div>
  `}function Ne(e,t){return t<=0?100:Math.min(e/t*100,100)}function De(e){return{quiz:"Quiz Eco","memory-match":"Jogo da Memória","choose-for-trashbin":"Escolha a Lixeira","odd-one-out-trashbin":"Encontre o Intruso"}[e]||e}function Te(e){const t=new Date(e),o=Date.now()-e,n=Math.floor(o/6e4),a=Math.floor(o/36e5),d=Math.floor(o/864e5);return n<1?"agora":n<60?`${n}min atrás`:a<24?`${a}h atrás`:d<7?`${d}d atrás`:t.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"})}function Ce(){return`
    <section style="padding:1rem">
      <h2 style="margin:0 0 .25rem">Debug Assets</h2>
      <p id="dbg-summary" style="margin:.25rem 0 1rem;color:#666">Loading…</p>
      <div style="overflow:auto; max-height:62vh; border:1px solid #e5e5e5; border-radius:6px">
        <table style="border-collapse:collapse;min-width:80vw;width:100%">
          <thead style="position:sticky; top:0; background:#f6f6f6; z-index:1">
            <tr>
              <th style="text-align:left;border:1px solid #ccc;padding:.5rem;background:#f6f6f6;width:40px">Image</th>
              <th style="text-align:left;border:1px solid #ccc;padding:.5rem;background:#f6f6f6">Name</th>
              <th style="text-align:left;border:1px solid #ccc;padding:.5rem;background:#f6f6f6;width:40px">Status</th>
            </tr>
          </thead>
          <tbody id="dbg-rows"></tbody>
        </table>
      </div>
    </section>
  `}function Pe(){$e()}async function $e(){const e="/eco-transforma/data/assets.json",t="/eco-transforma/data/ecoscan-items.json",i=document.getElementById("dbg-rows"),o=document.getElementById("dbg-summary");if(!(!i||!o))try{const[n,a]=await Promise.all([B(e),B(t)]),d=[];for(const s of n.bins??[])d.push({kind:"bin",title:s.title??s.id,typeOrId:s.id??"",imgPath:y(s.img)});for(const s of n.items??[])d.push({kind:"item",title:s.name??"",typeOrId:s.type??"",imgPath:y(s.img)});const c=[];for(const s of a.bins??[])c.push({kind:"bin",title:s.nome??s.id,typeOrId:s.id??"",imgPath:y(s.img)});for(const s of a.items??[])c.push({kind:"item",title:s.nome??s.id??"",typeOrId:s.lixeira??s.id??"",imgPath:y(s.img)});const r=new Map;for(const s of[...d,...c]){const u=s.imgPath??`title:${s.title.toLowerCase()}`;r.has(u)||r.set(u,s)}const l=Array.from(r.values());await Promise.all(l.map(async s=>{s.exists=s.imgPath?await Me(s.imgPath):!1})),l.sort((s,u)=>s.exists!==u.exists?s.exists?1:-1:s.title.localeCompare(u.title)),i.innerHTML="";let m=0;for(const s of l){s.exists||m++;const u=document.createElement("tr");s.exists||(u.style.background="#fff3f3");const E=s.imgPath?H(s.imgPath):"";u.innerHTML=`
        <td style="border:1px solid #ccc;padding:.35rem .5rem;width:40px;text-align:center;vertical-align:middle">
          ${E?`<img src="${E}" alt="" width="32" height="32"
                 loading="lazy" decoding="async"
                 style="width:32px;height:32px;object-fit:contain;border:1px solid ${s.exists?"#ddd":"#f00"};background:#fff;border-radius:2px" />`:'<span style="display:inline-block;width:32px;height:32px;border:1px solid #f00;border-radius:2px;background:#fff"></span>'}
        </td>
        <td style="border:1px solid #ccc;padding:.5rem">${xe(s.title)}</td>
        <td style="border:1px solid #ccc;padding:.5rem;width:40px;text-align:center;vertical-align:middle">${s.exists?"✅":"❌"}</td>
      `,i.appendChild(u)}o.textContent=`Total: ${l.length} • Missing: ${m} • OK: ${l.length-m}`}catch(n){o.textContent=`Error: ${n?.message??String(n)}`,console.error(n)}}function y(e){if(!e)return null;let t=String(e).trim();return t=t.replace(/^\.?\//,""),`/eco-transforma/img/${t}`}function H(e){return e+(e.includes("?")?"&":"?")+"cb="+Date.now()}async function Me(e){const t=H(e);try{const i=await fetch(t,{method:"HEAD",cache:"no-store",redirect:"follow"}),o=(i.headers.get("content-type")||"").toLowerCase(),n=i.headers.get("content-length");if(i.ok&&o.startsWith("image/")&&(n===null||Number(n)>0))return!0}catch{}try{const i=await fetch(t,{method:"GET",cache:"no-store",redirect:"follow",headers:{Accept:"image/*"}}),o=(i.headers.get("content-type")||"").toLowerCase(),n=i.headers.get("content-length");if(i.ok&&o.startsWith("image/")&&(n===null||Number(n)>0))return!0}catch{}return await Ue(t)}function Ue(e){return new Promise(t=>{const i=new Image;i.onload=()=>t(!0),i.onerror=()=>t(!1),i.src=e})}async function B(e){const t=await fetch(e+"?t="+Date.now(),{cache:"no-store"});if(!t.ok)throw new Error(`Failed to load ${e}: ${t.status}`);return t.json()}function xe(e){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ke(){return`
  <section class="shout" style="display:flex;flex-direction:column;align-items:center;gap:1rem;">
    <h2 style="margin:0;display:flex;align-items:center;gap:.5rem;">
      <i class="fa-sharp-duotone fa-rotate"></i>
      ATUALIZAÇÃO
    </h2>

    <p id="upd-msg" style="text-align:center;margin:0;">Baixando atualização...</p>

    <div style="width:min(520px,90vw);">
      <div style="height:10px;background:#e5e7eb;border-radius:999px;overflow:hidden;">
        <span id="upd-bar" style="
          display:block;height:100%;width:20%;
          background:#0a7a3d;border-radius:999px;
          transition:width .2s ease;
        "></span>
      </div>
    </div>

    <div id="upd-actions" style="display:none;">
      <button id="upd-home" class="btn" aria-label="Voltar à página inicial">
        <i class="fa-sharp-duotone fa-circle-left" style="margin-right:.35rem;"></i>
        VOLTAR AO INÍCIO
      </button>
    </div>
  </section>
  `}async function Be(){const e="eco:updatePending",t=document.getElementById("upd-bar"),i=document.getElementById("upd-msg"),o=document.getElementById("upd-actions");let n=10,a=1;const d=window.setInterval(()=>{t&&(n+=a*7,n>=90&&(a=-1),n<=10&&(a=1),t.style.width=`${n}%`)},150);function c(){window.clearInterval(d),t&&(t.style.width="100%"),i&&(i.textContent="Atualização concluída!"),o&&(o.style.display="block",document.getElementById("upd-home")?.addEventListener("click",()=>{sessionStorage.removeItem(e),location.hash="#/"}))}const r=await navigator.serviceWorker.getRegistration(),l=()=>{!r?.installing&&!r?.waiting&&c()};l(),navigator.serviceWorker.addEventListener("controllerchange",()=>{setTimeout(l,0)})}const J="eco:updatePending",Ge=X({immediate:!0,onNeedRefresh(){try{sessionStorage.setItem(J,"1")}catch{}location.hash!=="#/updating"&&(location.hash="#/updating"),setTimeout(()=>Ge(!0),150)},onRegisteredSW(e,t){t&&setInterval(()=>t.update(),600*1e3)},onOfflineReady(){}});let g=null;function j(){const e=n=>matchMedia(n).matches,t=e("(display-mode: fullscreen)")||e("(display-mode: standalone)")||e("(display-mode: window-controls-overlay)")||e("(display-mode: minimal-ui)"),i=navigator.standalone===!0,o=document.referrer?.startsWith("android-app://")??!1;return t||i||o}window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),g=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{g=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});async function _e(){g&&(j()||(await g.prompt(),await g.userChoice,g=null))}const Ve={"/":{view:ie,init:se},"/ecoinfo":{view:ce,init:le},"/ecogames":{view:ue,init:me},"/ecopontos":{view:ge,init:Ae},"/ecostats":{view:Le,init:we},"/debug-assets":{view:Ce,init:Pe},"/updating":{view:ke,init:Be}};let A;async function F(){const e=document.getElementById("app");if(!e)return;e.classList.add("page-transitioning-out"),await new Promise(n=>setTimeout(n,150)),A&&typeof A=="function"&&A(),A=void 0;const t=location.hash.replace("#","")||"/",i=Ve[t]??{view:()=>"<h2>404</h2><p>Página não encontrada</p>"};e.innerHTML=i.view();const o=i.init?.();o&&typeof o=="function"&&(A=o),e.classList.remove("page-transitioning-out"),e.classList.add("page-transitioning-in"),await new Promise(n=>setTimeout(n,150)),e.classList.remove("page-transitioning-in"),document.querySelectorAll("nav a").forEach(n=>{const a=n.getAttribute("href")||"#/";n.classList.toggle("active",a===`#${t}`)})}sessionStorage.getItem(J)==="1"&&location.hash!=="#/updating"&&(location.hash="#/updating");K();window.addEventListener("hashchange",F);window.addEventListener("load",F);export{Je as a,je as b,He as v};
