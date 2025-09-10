const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/odd-one-out-trashbin-2pmn07_O.js","assets/odd-one-out-trashbin-AnAEAaoO.css","assets/choose-for-trashbin-DKpSJdhe.js","assets/choose-for-trashbin-ZOpaeZbA.css","assets/memory-match-DEpwZLrB.js","assets/memory-match-DxZU0kuZ.css"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const $="modulepreload",x=function(e){return"/eco-transforma/"+e},D={},h=function(o,s,r){let i=Promise.resolve();if(s&&s.length>0){let l=function(d){return Promise.all(d.map(t=>Promise.resolve(t).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var u=l;document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),n=c?.nonce||c?.getAttribute("nonce");i=l(s.map(d=>{if(d=x(d),d in D)return;D[d]=!0;const t=d.endsWith(".css"),m=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const f=document.createElement("link");if(f.rel=t?"stylesheet":$,t||(f.as="script"),f.crossOrigin="",f.href=d,n&&f.setAttribute("nonce",n),document.head.appendChild(f),t)return new Promise((E,A)=>{f.addEventListener("load",E),f.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(c){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=c,window.dispatchEvent(n),!n.defaultPrevented)throw c}return i.then(c=>{for(const n of c||[])n.status==="rejected"&&a(n.reason);return o().catch(a)})};function k(e={}){const{immediate:o=!1,onNeedRefresh:s,onOfflineReady:r,onRegistered:i,onRegisteredSW:a,onRegisterError:u}=e;let c,n;const l=async(t=!0)=>{await n};async function d(){if("serviceWorker"in navigator){if(c=await h(async()=>{const{Workbox:t}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:t}},[]).then(({Workbox:t})=>new t("/eco-transforma/sw.js",{scope:"/eco-transforma/",type:"classic"})).catch(t=>{u?.(t)}),!c)return;c.addEventListener("activated",t=>{(t.isUpdate||t.isExternal)&&window.location.reload()}),c.addEventListener("installed",t=>{t.isUpdate||r?.()}),c.register({immediate:o}).then(t=>{a?a("/eco-transforma/sw.js",t):i?.(t)}).catch(t=>{u?.(t)})}}return n=d(),l}const B="/eco-transforma/img/mascote.webp";function _(e){g();const o=document.createElement("div");o.className="modal-backdrop",o.innerHTML=`
    <div class="modal">
      <button class="modal-close" aria-label="Fechar">×</button>
      <div class="modal-content">${e}</div>
    </div>`,document.body.appendChild(o),o.querySelector(".modal-close")?.addEventListener("click",g),o.addEventListener("click",s=>{s.target===o&&g()}),window.addEventListener("keydown",C)}function g(){const e=document.querySelector(".modal-backdrop");e&&(e.remove(),window.removeEventListener("keydown",C))}function C(e){e.key==="Escape"&&g()}const O=[`
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
  `],y=["OLÁ! EU SOU O SUCATECO,<br/>MASCOTINHO DO ECOTRANSFORMA.","JUNTE-SE A NÓS NESSA MISSÃO<br/>SUSTENTÁVEL E VENHA CUIDAR<br/> DO PLANETA COM A GENTE!","SELECIONE UMA DAS OPÇÕES<br/>ABAIXO E DESCUBRA COMO FAZER ISSO!"];let p=0;function G(){return`
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
    <img src="${B}" alt="Mascote EcoTransforma" class="hero-mascote" />
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
  `}function V(){const e=document.getElementById("bubble"),o=document.getElementById("bubble-text"),s=document.getElementById("prev"),r=document.getElementById("next"),i=document.getElementById("progress"),a=document.getElementById("btn-sobre"),u=document.getElementById("divInstall"),c=document.getElementById("btnInstall"),n=()=>{o.innerHTML=y[p],s.disabled=p===0,i.textContent=`${p+1}/${y.length}`};function l(){const E=v=>matchMedia(v).matches,A=E("(display-mode: fullscreen)")||E("(display-mode: standalone)")||E("(display-mode: window-controls-overlay)")||E("(display-mode: minimal-ui)"),I=navigator.standalone===!0,R=document.referrer?.startsWith("android-app://")??!1;return A||I||R}let d=null;window.addEventListener("beforeinstallprompt",E=>{E.preventDefault(),d=E,!l()&&u?.classList.remove("hidden")},{once:!0});async function t(){d&&(l()||(await d.prompt(),await d.userChoice,d=null,u?.classList.add("hidden")))}window.addEventListener("appinstalled",()=>{d=null,u?.classList.add("hidden")}),c?.addEventListener("click",t);const m=()=>{p<y.length-1&&p++,n()},f=()=>{p>0&&p--,n()};e.addEventListener("click",E=>{E.target.closest("button")||m()}),a?.addEventListener("click",()=>{let E=0;const A=()=>{_(`
            <h3 style="display: flex; justify-content: center; align-items: center;">
                <i class="fa-sharp-duotone fa-circle-info"
                    style="margin-right:.35rem;"></i>
                SOBRE NÓS
            </h3>

            <div class="modal-content" id="sobre-content">${O[E]}</div>

            <div class="modal-footer">
                <div class="left">
                <button id="sobre-prev" class="btn btn-ghost" ${E===0?"disabled":""} aria-label="Voltar">
                    <i class="fa-sharp-duotone fa-circle-left"
                       ></i>
                </button>
                </div>

                <div class="modal-progress" id="sobre-progress">${E+1}/${O.length}</div>

                <div class="right">
                <button id="sobre-close" class="btn btn-ghost" aria-label="Fechar">
                    <i class="fa-sharp-duotone fa-circle-xmark"
                       ></i>
                </button>
                <button id="sobre-next" class="btn" ${E===O.length-1?"disabled":""} aria-label="Avançar">
                    <i class="fa-sharp-duotone fa-circle-right"
                       ></i>
                </button>
                </div>
            </div>
            `);const I=document.getElementById("sobre-prev"),R=document.getElementById("sobre-next"),v=document.getElementById("sobre-close");I?.addEventListener("click",()=>{E>0&&(E--,A())}),R?.addEventListener("click",()=>{E<O.length-1&&(E++,A())}),v?.addEventListener("click",()=>g())};A()}),r.addEventListener("click",m),s.addEventListener("click",f),e.addEventListener("keydown",E=>{(E.key==="ArrowRight"||E.key==="Enter"||E.key===" ")&&m(),E.key==="ArrowLeft"&&f()}),p=0,n()}const H="/eco-transforma/data/ecoscan-items.json",L=e=>e?`/eco-transforma/img/${e}`:"";async function F(){return await(await fetch(H,{cache:"no-cache"})).json()}function w(){const e="ecoscan-styles";if(document.getElementById(e))return;const o=document.createElement("style");o.id=e,o.textContent=`
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
`,document.head.appendChild(o)}function j(e){w();const o=document.createElement("div");o.className="eco-modal",o.innerHTML=`
    <div class="eco-modal__backdrop" data-close></div>
    <div class="eco-modal__panel" role="dialog" aria-modal="true">
      <button class="eco-modal__close btn btn-ghost" type="button" data-close aria-label="Fechar">
        <i class="fa-sharp-duotone fa-circle-xmark"></i>
      </button>
      <div class="eco-modal__body">${e}</div>
    </div>
  `;const s=()=>{o.parentElement&&document.body.removeChild(o),document.removeEventListener("keydown",r,!0)},r=i=>{i.key==="Escape"&&s()};o.addEventListener("click",i=>{i.target.closest("[data-close]")&&s()},!0),document.addEventListener("keydown",r,!0),document.body.appendChild(o)}function J(){return`
    <section class="shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-camera"></i>
        ECOSCAN
      </h2>
      <div id="ecoscan-root"></div>
    </section>
  `}async function q(){w();const e=document.getElementById("ecoscan-root");if(!e)return;const o=e,s=await F(),r=s.bins.filter(n=>["PAPEL","PLÁSTICO","VIDRO","METAL","ORGÂNICO"].includes(n.id));o.innerHTML=`
    <div class="ecoscan-filters card">
      <div class="filters-wrap">
        ${r.map(n=>`
          <button class="filter-chip" data-bin="${n.id}" aria-pressed="false" title="${n.nome}">
            ${n.img?`<img alt="${n.nome}" src="${L(n.img)}"/>`:`<span class="dot" style="background:${n.cor}"></span>`}
            <span class="label">${n.id}</span>
          </button>
        `).join("")}
        <button class="filter-chip" data-bin="ALL" aria-pressed="true" title="TODOS">
          <i class="fa-sharp-duotone fa-magnifying-glass"></i>
          <span class="label">TODOS</span>
        </button>
      </div>
    </div>

    <div id="eco-grid" class="eco-grid"></div>
  `;const i=o.querySelector("#eco-grid");function a(n){i.innerHTML=n.map(l=>`
      <button class="eco-card-tile" data-id="${l.id}" title="${l.nome}">
        <div class="eco-card-tile__img">
          ${l.img?`<img alt="${l.nome}" src="${L(l.img)}"/>`:`<i class="${l.icone||"fa-sharp-duotone fa-recycle"}"></i>`}
        </div>
        <div class="eco-card-tile__txt">
          <strong>${l.nome}</strong>
          <small>${l.material}</small>
        </div>
      </button>
    `).join("")}function u(n){j(`
      <article class="eco-detail">
        <header>
          <div class="media">
            ${n.img?`<img alt="${n.nome}" src="${L(n.img)}"/>`:`<i class="${n.icone||"fa-sharp-duotone fa-recycle"}"></i>`}
          </div>
          <div>
            <h3>${n.nome}</h3>
            <small>${n.material}</small>
          </div>
        </header>
        <ul class="eco-facts">
          <li><strong>LIXEIRA:</strong> ${n.lixeira}</li>
          <li><strong>TEMPO:</strong> ${n.tempo_decomposicao}</li>
          ${n.exemplos?.length?`<li><strong>EXEMPLOS:</strong> ${n.exemplos.join(", ")}</li>`:""}
          ${n.observacoes?`<li><strong>DICA:</strong> ${n.observacoes}</li>`:""}
        </ul>
      </article>
    `)}function c(n){o.querySelectorAll(".filter-chip").forEach(t=>{const m=t.dataset.bin===String(n);t.classList.toggle("is-active",m),t.setAttribute("aria-pressed",m?"true":"false")});const d=n==="ALL"?s.items:s.items.filter(t=>t.lixeira===n);a(d)}c("ALL"),o.addEventListener("click",n=>{const l=n.target.closest(".filter-chip");if(l){c(l.dataset.bin||"ALL");return}const d=n.target.closest(".eco-card-tile");if(d){const t=d.dataset.id,m=s.items.find(f=>f.id===t);m&&u(m);return}})}const P=[{id:"quiz",title:"QUIZ DA RECICLAGEM",subtitle:"RESPONDA E APRENDA ♻️",icon:"fa-sharp-duotone fa-circle-question",emoji:"❓",load:()=>h(()=>import("./quiz-CmkzqPTw.js"),[]).then(e=>e.QuizGame)},{id:"odd-one-out-trashbin",title:"TOQUE NA LIXEIRA CERTA",subtitle:"SEPARAÇÃO DE RESÍDUOS",icon:"fa-sharp-duotone fa-recycle",emoji:"🗑️",load:()=>h(()=>import("./odd-one-out-trashbin-2pmn07_O.js"),__vite__mapDeps([0,1])).then(e=>e.OddOneOutTrashbinGame)},{id:"choose-for-trashbin",title:"TOQUE NO OBJETO CERTO",subtitle:"SEPARAÇÃO DE RESÍDUOS",icon:"fa-sharp-duotone fa-recycle",emoji:"🗑️",load:()=>h(()=>import("./choose-for-trashbin-DKpSJdhe.js"),__vite__mapDeps([2,3])).then(e=>e.ChooseForTrashbinGame)},{id:"memory-match",title:"JOGO DA MEMÓRIA",subtitle:"COMBINE OS PARES ♻️",icon:"fa-sharp-duotone fa-cards",emoji:"🃏",load:()=>h(()=>import("./memory-match-DEpwZLrB.js"),__vite__mapDeps([4,5])).then(e=>e.MemoryMatchGame)}];let b=null;function Z(e,o,s,r,i){return`
    <button class="game-card" data-id="${e}" aria-label="${o}">
      <i class="${r}"></i>
      <div class="game-card-txt">
        <strong>${i?`${i} `:""}${o}</strong>
        ${s?`<small>${s}</small>`:""}
      </div>
    </button>
  `}function Q(){return`
    <section class="games-wrap shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-gamepad"></i>
        ECOJOGOS
      </h2>

      <div id="games-selector" class="games-selector">
        ${P.map(e=>Z(e.id,e.title,e.subtitle,e.icon,e.emoji)).join("")}
      </div>

      <div id="game-area" class="game-area" hidden></div>
    </section>
  `}function W(){const e=document.getElementById("games-selector"),o=document.getElementById("game-area");if(!e||!o)return;const s=()=>{b?.destroy&&b.destroy(),b=null,o.hidden=!0,e.hidden=!1,o.innerHTML=""},r=async i=>{const a=P.find(c=>c.id===i);if(!a)return;e.hidden=!0,o.hidden=!1;const u=await a.load();b=u,u.mount(o)};e.addEventListener("click",i=>{const a=i.target.closest(".game-card");if(!a)return;const u=a.getAttribute("data-id");r(u)}),document.addEventListener("game:exit",s)}const N=2,X="/eco-transforma/data/ecopontos.json";async function z(){return await(await fetch(X,{cache:"no-cache"})).json()}function K(e){return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`}function Y(e){const o=K(`${e.nome}, ${e.endereco}`);return`
    <article class="eco-card" data-id="${e.id}">
      <header class="eco-card-hd">
        <i class="fa-sharp-duotone fa-location-dot"></i>
        <h3 class="eco-title">${e.nome}</h3>

        <div class="eco-actions">
            <a class="btn" href="${o}" target="_blank" rel="noopener" aria-label="Abrir no Google Maps">
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
  `}function ee(){return`
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
  `}async function te(){const e=document.getElementById("eco-list"),o=document.getElementById("eco-prev"),s=document.getElementById("eco-next"),r=document.getElementById("eco-page");if(!e||!o||!s||!r)return;const i=await z();let a=0;const u=Math.ceil(i.length/N),c=()=>{const n=a*N,l=i.slice(n,n+N);e.innerHTML=l.map(Y).join(""),r.textContent=`${a+1}/${u}`,o.disabled=a===0,s.disabled=a>=u-1};o.addEventListener("click",()=>{a>0&&(a--,c())}),s.addEventListener("click",()=>{a<u-1&&(a++,c())}),c()}function oe(){return`
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
  `}function ne(){ie()}async function ie(){const e="/eco-transforma/data/assets.json",o="/eco-transforma/data/ecoscan-items.json",s=document.getElementById("dbg-rows"),r=document.getElementById("dbg-summary");if(!(!s||!r))try{const[i,a]=await Promise.all([T(e),T(o)]),u=[];for(const t of i.bins??[])u.push({kind:"bin",title:t.title??t.id,typeOrId:t.id??"",imgPath:S(t.img)});for(const t of i.items??[])u.push({kind:"item",title:t.name??"",typeOrId:t.type??"",imgPath:S(t.img)});const c=[];for(const t of a.bins??[])c.push({kind:"bin",title:t.nome??t.id,typeOrId:t.id??"",imgPath:S(t.img)});for(const t of a.items??[])c.push({kind:"item",title:t.nome??t.id??"",typeOrId:t.lixeira??t.id??"",imgPath:S(t.img)});const n=new Map;for(const t of[...u,...c]){const m=t.imgPath??`title:${t.title.toLowerCase()}`;n.has(m)||n.set(m,t)}const l=Array.from(n.values());await Promise.all(l.map(async t=>{t.exists=t.imgPath?await se(t.imgPath):!1})),l.sort((t,m)=>t.exists!==m.exists?t.exists?1:-1:t.title.localeCompare(m.title)),s.innerHTML="";let d=0;for(const t of l){t.exists||d++;const m=document.createElement("tr");t.exists||(m.style.background="#fff3f3");const f=t.imgPath?U(t.imgPath):"";m.innerHTML=`
        <td style="border:1px solid #ccc;padding:.35rem .5rem;width:40px;text-align:center;vertical-align:middle">
          ${f?`<img src="${f}" alt="" width="32" height="32"
                 loading="lazy" decoding="async"
                 style="width:32px;height:32px;object-fit:contain;border:1px solid ${t.exists?"#ddd":"#f00"};background:#fff;border-radius:2px" />`:'<span style="display:inline-block;width:32px;height:32px;border:1px solid #f00;border-radius:2px;background:#fff"></span>'}
        </td>
        <td style="border:1px solid #ccc;padding:.5rem">${re(t.title)}</td>
        <td style="border:1px solid #ccc;padding:.5rem;width:40px;text-align:center;vertical-align:middle">${t.exists?"✅":"❌"}</td>
      `,s.appendChild(m)}r.textContent=`Total: ${l.length} • Missing: ${d} • OK: ${l.length-d}`}catch(i){r.textContent=`Error: ${i?.message??String(i)}`,console.error(i)}}function S(e){if(!e)return null;let o=String(e).trim();return o=o.replace(/^\.?\//,""),`/eco-transforma/img/${o}`}function U(e){return e+(e.includes("?")?"&":"?")+"cb="+Date.now()}async function se(e){const o=U(e);try{const s=await fetch(o,{method:"HEAD",cache:"no-store",redirect:"follow"}),r=(s.headers.get("content-type")||"").toLowerCase(),i=s.headers.get("content-length");if(s.ok&&r.startsWith("image/")&&(i===null||Number(i)>0))return!0}catch{}try{const s=await fetch(o,{method:"GET",cache:"no-store",redirect:"follow",headers:{Accept:"image/*"}}),r=(s.headers.get("content-type")||"").toLowerCase(),i=s.headers.get("content-length");if(s.ok&&r.startsWith("image/")&&(i===null||Number(i)>0))return!0}catch{}return await ae(o)}function ae(e){return new Promise(o=>{const s=new Image;s.onload=()=>o(!0),s.onerror=()=>o(!1),s.src=e})}async function T(e){const o=await fetch(e+"?t="+Date.now(),{cache:"no-store"});if(!o.ok)throw new Error(`Failed to load ${e}: ${o.status}`);return o.json()}function re(e){return e.replace(/[&<>"']/g,o=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[o])}const ce=k({immediate:!0,onNeedRefresh(){const e=document.createElement("div");e.className="update-banner",e.innerHTML=`
      <span>🔄 Nova versão disponível</span>
      <button>Atualizar</button>
    `,document.body.appendChild(e),e.querySelector("button").addEventListener("click",()=>{ce(!0)})},onOfflineReady(){console.log("✅ App pronto para uso offline")}}),le={"/":{view:G,init:V},"/ecoscan":{view:J,init:q},"/ecogames":{view:Q,init:W},"/ecopontos":{view:ee,init:te},"/debug-assets":{view:oe,init:ne}};function M(){const e=location.hash.replace("#","")||"/",o=le[e]??{view:()=>"<h2>404</h2><p>Página não encontrada</p>"},s=document.getElementById("app");s&&(s.innerHTML=o.view(),o.init?.()),document.querySelectorAll("nav a").forEach(r=>{const i=r.getAttribute("href")||"#/";r.classList.toggle("active",i===`#${e}`)})}window.addEventListener("hashchange",M);window.addEventListener("load",M);
