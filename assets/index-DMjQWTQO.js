const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/odd-one-out-trashbin-2pmn07_O.js","assets/odd-one-out-trashbin-AnAEAaoO.css","assets/choose-for-trashbin-DKpSJdhe.js","assets/choose-for-trashbin-ZOpaeZbA.css","assets/memory-match-DEpwZLrB.js","assets/memory-match-DxZU0kuZ.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const $="modulepreload",k=function(e){return"/eco-transforma/"+e},N={},h=function(t,s,r){let i=Promise.resolve();if(s&&s.length>0){let c=function(d){return Promise.all(d.map(n=>Promise.resolve(n).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};var u=c;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),o=l?.nonce||l?.getAttribute("nonce");i=c(s.map(d=>{if(d=k(d),d in N)return;N[d]=!0;const n=d.endsWith(".css"),m=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const f=document.createElement("link");if(f.rel=n?"stylesheet":$,n||(f.as="script"),f.crossOrigin="",f.href=d,o&&f.setAttribute("nonce",o),document.head.appendChild(f),n)return new Promise((E,A)=>{f.addEventListener("load",E),f.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return i.then(l=>{for(const o of l||[])o.status==="rejected"&&a(o.reason);return t().catch(a)})};function B(e={}){const{immediate:t=!1,onNeedRefresh:s,onOfflineReady:r,onRegistered:i,onRegisteredSW:a,onRegisterError:u}=e;let l,o;const c=async(n=!0)=>{await o};async function d(){if("serviceWorker"in navigator){if(l=await h(async()=>{const{Workbox:n}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:n}},[]).then(({Workbox:n})=>new n("/eco-transforma/sw.js",{scope:"/eco-transforma/",type:"classic"})).catch(n=>{u?.(n)}),!l)return;l.addEventListener("activated",n=>{(n.isUpdate||n.isExternal)&&window.location.reload()}),l.addEventListener("installed",n=>{n.isUpdate||r?.()}),l.register({immediate:t}).then(n=>{a?a("/eco-transforma/sw.js",n):i?.(n)}).catch(n=>{u?.(n)})}}return o=d(),c}const _="/eco-transforma/img/mascote.webp";function G(e){g();const t=document.createElement("div");t.className="modal-backdrop",t.innerHTML=`
    <div class="modal">
      <button class="modal-close" aria-label="Fechar">×</button>
      <div class="modal-content">${e}</div>
    </div>`,document.body.appendChild(t),t.querySelector(".modal-close")?.addEventListener("click",g),t.addEventListener("click",s=>{s.target===t&&g()}),window.addEventListener("keydown",w)}function g(){const e=document.querySelector(".modal-backdrop");e&&(e.remove(),window.removeEventListener("keydown",w))}function w(e){e.key==="Escape"&&g()}const O=[`
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
  `],v=["OLÁ! EU SOU O SUCATECO,<br/>MASCOTINHO DO ECOTRANSFORMA.","JUNTE-SE A NÓS NESSA MISSÃO<br/>SUSTENTÁVEL E VENHA CUIDAR<br/> DO PLANETA COM A GENTE!","SELECIONE UMA DAS OPÇÕES<br/>ABAIXO E DESCUBRA COMO FAZER ISSO!"];let p=0;function V(){return`
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
    <img src="${_}" alt="Mascote EcoTransforma" class="hero-mascote" />
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
  `}function H(){const e=document.getElementById("bubble"),t=document.getElementById("bubble-text"),s=document.getElementById("prev"),r=document.getElementById("next"),i=document.getElementById("progress"),a=document.getElementById("btn-sobre"),u=document.getElementById("divInstall"),l=document.getElementById("btnInstall"),o=()=>{t.innerHTML=v[p],s.disabled=p===0,i.textContent=`${p+1}/${v.length}`};function c(){const E=y=>matchMedia(y).matches,A=E("(display-mode: fullscreen)")||E("(display-mode: standalone)")||E("(display-mode: window-controls-overlay)")||E("(display-mode: minimal-ui)"),S=navigator.standalone===!0,R=document.referrer?.startsWith("android-app://")??!1;return A||S||R}let d=null;window.addEventListener("beforeinstallprompt",E=>{E.preventDefault(),d=E,!c()&&u?.classList.remove("hidden")},{once:!0});async function n(){d&&(c()||(await d.prompt(),await d.userChoice,d=null,u?.classList.add("hidden")))}window.addEventListener("appinstalled",()=>{d=null,u?.classList.add("hidden")}),l?.addEventListener("click",n);const m=()=>{p<v.length-1&&p++,o()},f=()=>{p>0&&p--,o()};e.addEventListener("click",E=>{E.target.closest("button")||m()}),a?.addEventListener("click",()=>{let E=0;const A=()=>{G(`
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
            `);const S=document.getElementById("sobre-prev"),R=document.getElementById("sobre-next"),y=document.getElementById("sobre-close");S?.addEventListener("click",()=>{E>0&&(E--,A())}),R?.addEventListener("click",()=>{E<O.length-1&&(E++,A())}),y?.addEventListener("click",()=>g())};A()}),r.addEventListener("click",m),s.addEventListener("click",f),e.addEventListener("keydown",E=>{(E.key==="ArrowRight"||E.key==="Enter"||E.key===" ")&&m(),E.key==="ArrowLeft"&&f()}),p=0,o()}const F="/eco-transforma/data/ecoscan-items.json",L=e=>e?`/eco-transforma/img/${e}`:"";async function j(){return await(await fetch(F,{cache:"no-cache"})).json()}function C(){const e="ecoscan-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
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
`,document.head.appendChild(t)}function J(e){C();const t=document.createElement("div");t.className="eco-modal",t.innerHTML=`
    <div class="eco-modal__backdrop" data-close></div>
    <div class="eco-modal__panel" role="dialog" aria-modal="true">
      <button class="eco-modal__close btn btn-ghost" type="button" data-close aria-label="Fechar">
        <i class="fa-sharp-duotone fa-circle-xmark"></i>
      </button>
      <div class="eco-modal__body">${e}</div>
    </div>
  `;const s=()=>{t.parentElement&&document.body.removeChild(t),document.removeEventListener("keydown",r,!0)},r=i=>{i.key==="Escape"&&s()};t.addEventListener("click",i=>{i.target.closest("[data-close]")&&s()},!0),document.addEventListener("keydown",r,!0),document.body.appendChild(t)}function q(){return`
    <section class="shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-camera"></i>
        ECOSCAN
      </h2>
      <div id="ecoscan-root"></div>
    </section>
  `}async function Z(){C();const e=document.getElementById("ecoscan-root");if(!e)return;const t=e,s=await j(),r=s.bins.filter(o=>["PAPEL","PLÁSTICO","VIDRO","METAL","ORGÂNICO"].includes(o.id));t.innerHTML=`
    <div class="ecoscan-filters card">
      <div class="filters-wrap">
        ${r.map(o=>`
          <button class="filter-chip" data-bin="${o.id}" aria-pressed="false" title="${o.nome}">
            ${o.img?`<img alt="${o.nome}" src="${L(o.img)}"/>`:`<span class="dot" style="background:${o.cor}"></span>`}
            <span class="label">${o.id}</span>
          </button>
        `).join("")}
        <button class="filter-chip" data-bin="ALL" aria-pressed="true" title="TODOS">
          <i class="fa-sharp-duotone fa-magnifying-glass"></i>
          <span class="label">TODOS</span>
        </button>
      </div>
    </div>

    <div id="eco-grid" class="eco-grid"></div>
  `;const i=t.querySelector("#eco-grid");function a(o){i.innerHTML=o.map(c=>`
      <button class="eco-card-tile" data-id="${c.id}" title="${c.nome}">
        <div class="eco-card-tile__img">
          ${c.img?`<img alt="${c.nome}" src="${L(c.img)}"/>`:`<i class="${c.icone||"fa-sharp-duotone fa-recycle"}"></i>`}
        </div>
        <div class="eco-card-tile__txt">
          <strong>${c.nome}</strong>
          <small>${c.material}</small>
        </div>
      </button>
    `).join("")}function u(o){J(`
      <article class="eco-detail">
        <header>
          <div class="media">
            ${o.img?`<img alt="${o.nome}" src="${L(o.img)}"/>`:`<i class="${o.icone||"fa-sharp-duotone fa-recycle"}"></i>`}
          </div>
          <div>
            <h3>${o.nome}</h3>
            <small>${o.material}</small>
          </div>
        </header>
        <ul class="eco-facts">
          <li><strong>LIXEIRA:</strong> ${o.lixeira}</li>
          <li><strong>TEMPO DE DECOMPOSIÇÃO:</strong> ${o.tempo_decomposicao}</li>
          ${o.exemplos?.length?`<li><strong>EXEMPLOS:</strong> ${o.exemplos.join(", ")}</li>`:""}
          ${o.observacoes?`<li><strong>DICA:</strong> ${o.observacoes}</li>`:""}
        </ul>
      </article>
    `)}function l(o){t.querySelectorAll(".filter-chip").forEach(n=>{const m=n.dataset.bin===String(o);n.classList.toggle("is-active",m),n.setAttribute("aria-pressed",m?"true":"false")});const d=o==="ALL"?s.items:s.items.filter(n=>n.lixeira===o);a(d)}l("ALL"),t.addEventListener("click",o=>{const c=o.target.closest(".filter-chip");if(c){l(c.dataset.bin||"ALL");return}const d=o.target.closest(".eco-card-tile");if(d){const n=d.dataset.id,m=s.items.find(f=>f.id===n);m&&u(m);return}})}const P=[{id:"quiz",title:"QUIZ DA RECICLAGEM",subtitle:"RESPONDA E APRENDA ♻️",icon:"fa-sharp-duotone fa-circle-question",emoji:"❓",load:()=>h(()=>import("./quiz-CmkzqPTw.js"),[]).then(e=>e.QuizGame)},{id:"odd-one-out-trashbin",title:"TOQUE NA LIXEIRA CERTA",subtitle:"SEPARAÇÃO DE RESÍDUOS",icon:"fa-sharp-duotone fa-recycle",emoji:"🗑️",load:()=>h(()=>import("./odd-one-out-trashbin-2pmn07_O.js"),__vite__mapDeps([0,1])).then(e=>e.OddOneOutTrashbinGame)},{id:"choose-for-trashbin",title:"TOQUE NO OBJETO CERTO",subtitle:"SEPARAÇÃO DE RESÍDUOS",icon:"fa-sharp-duotone fa-recycle",emoji:"🗑️",load:()=>h(()=>import("./choose-for-trashbin-DKpSJdhe.js"),__vite__mapDeps([2,3])).then(e=>e.ChooseForTrashbinGame)},{id:"memory-match",title:"JOGO DA MEMÓRIA",subtitle:"COMBINE OS PARES ♻️",icon:"fa-sharp-duotone fa-cards",emoji:"🃏",load:()=>h(()=>import("./memory-match-DEpwZLrB.js"),__vite__mapDeps([4,5])).then(e=>e.MemoryMatchGame)}];let b=null;function Q(e,t,s,r,i){return`
    <button class="game-card" data-id="${e}" aria-label="${t}">
      <i class="${r}"></i>
      <div class="game-card-txt">
        <strong>${i?`${i} `:""}${t}</strong>
        ${s?`<small>${s}</small>`:""}
      </div>
    </button>
  `}function W(){return`
    <section class="games-wrap shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-gamepad"></i>
        ECOJOGOS
      </h2>

      <div id="games-selector" class="games-selector">
        ${P.map(e=>Q(e.id,e.title,e.subtitle,e.icon,e.emoji)).join("")}
      </div>

      <div id="game-area" class="game-area" hidden></div>
    </section>
  `}function X(){const e=document.getElementById("games-selector"),t=document.getElementById("game-area");if(!e||!t)return;const s=()=>{b?.destroy&&b.destroy(),b=null,t.hidden=!0,e.hidden=!1,t.innerHTML=""},r=async i=>{const a=P.find(l=>l.id===i);if(!a)return;e.hidden=!0,t.hidden=!1;const u=await a.load();b=u,u.mount(t)};e.addEventListener("click",i=>{const a=i.target.closest(".game-card");if(!a)return;const u=a.getAttribute("data-id");r(u)}),document.addEventListener("game:exit",s)}const D=2,z="/eco-transforma/data/ecopontos.json";async function K(){return await(await fetch(z,{cache:"no-cache"})).json()}function Y(e){return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`}function ee(e){const t=Y(`${e.nome}, ${e.endereco}`);return`
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
  `}function te(){return`
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
  `}async function ne(){const e=document.getElementById("eco-list"),t=document.getElementById("eco-prev"),s=document.getElementById("eco-next"),r=document.getElementById("eco-page");if(!e||!t||!s||!r)return;const i=await K();let a=0;const u=Math.ceil(i.length/D),l=()=>{const o=a*D,c=i.slice(o,o+D);e.innerHTML=c.map(ee).join(""),r.textContent=`${a+1}/${u}`,t.disabled=a===0,s.disabled=a>=u-1};t.addEventListener("click",()=>{a>0&&(a--,l())}),s.addEventListener("click",()=>{a<u-1&&(a++,l())}),l()}function ie(){return`
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
  `}function oe(){se()}async function se(){const e="/eco-transforma/data/assets.json",t="/eco-transforma/data/ecoscan-items.json",s=document.getElementById("dbg-rows"),r=document.getElementById("dbg-summary");if(!(!s||!r))try{const[i,a]=await Promise.all([T(e),T(t)]),u=[];for(const n of i.bins??[])u.push({kind:"bin",title:n.title??n.id,typeOrId:n.id??"",imgPath:I(n.img)});for(const n of i.items??[])u.push({kind:"item",title:n.name??"",typeOrId:n.type??"",imgPath:I(n.img)});const l=[];for(const n of a.bins??[])l.push({kind:"bin",title:n.nome??n.id,typeOrId:n.id??"",imgPath:I(n.img)});for(const n of a.items??[])l.push({kind:"item",title:n.nome??n.id??"",typeOrId:n.lixeira??n.id??"",imgPath:I(n.img)});const o=new Map;for(const n of[...u,...l]){const m=n.imgPath??`title:${n.title.toLowerCase()}`;o.has(m)||o.set(m,n)}const c=Array.from(o.values());await Promise.all(c.map(async n=>{n.exists=n.imgPath?await ae(n.imgPath):!1})),c.sort((n,m)=>n.exists!==m.exists?n.exists?1:-1:n.title.localeCompare(m.title)),s.innerHTML="";let d=0;for(const n of c){n.exists||d++;const m=document.createElement("tr");n.exists||(m.style.background="#fff3f3");const f=n.imgPath?U(n.imgPath):"";m.innerHTML=`
        <td style="border:1px solid #ccc;padding:.35rem .5rem;width:40px;text-align:center;vertical-align:middle">
          ${f?`<img src="${f}" alt="" width="32" height="32"
                 loading="lazy" decoding="async"
                 style="width:32px;height:32px;object-fit:contain;border:1px solid ${n.exists?"#ddd":"#f00"};background:#fff;border-radius:2px" />`:'<span style="display:inline-block;width:32px;height:32px;border:1px solid #f00;border-radius:2px;background:#fff"></span>'}
        </td>
        <td style="border:1px solid #ccc;padding:.5rem">${ce(n.title)}</td>
        <td style="border:1px solid #ccc;padding:.5rem;width:40px;text-align:center;vertical-align:middle">${n.exists?"✅":"❌"}</td>
      `,s.appendChild(m)}r.textContent=`Total: ${c.length} • Missing: ${d} • OK: ${c.length-d}`}catch(i){r.textContent=`Error: ${i?.message??String(i)}`,console.error(i)}}function I(e){if(!e)return null;let t=String(e).trim();return t=t.replace(/^\.?\//,""),`/eco-transforma/img/${t}`}function U(e){return e+(e.includes("?")?"&":"?")+"cb="+Date.now()}async function ae(e){const t=U(e);try{const s=await fetch(t,{method:"HEAD",cache:"no-store",redirect:"follow"}),r=(s.headers.get("content-type")||"").toLowerCase(),i=s.headers.get("content-length");if(s.ok&&r.startsWith("image/")&&(i===null||Number(i)>0))return!0}catch{}try{const s=await fetch(t,{method:"GET",cache:"no-store",redirect:"follow",headers:{Accept:"image/*"}}),r=(s.headers.get("content-type")||"").toLowerCase(),i=s.headers.get("content-length");if(s.ok&&r.startsWith("image/")&&(i===null||Number(i)>0))return!0}catch{}return await re(t)}function re(e){return new Promise(t=>{const s=new Image;s.onload=()=>t(!0),s.onerror=()=>t(!1),s.src=e})}async function T(e){const t=await fetch(e+"?t="+Date.now(),{cache:"no-store"});if(!t.ok)throw new Error(`Failed to load ${e}: ${t.status}`);return t.json()}function ce(e){return e.replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function le(){return`
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
  `}async function de(){const e="eco:updatePending",t=document.getElementById("upd-bar"),s=document.getElementById("upd-msg"),r=document.getElementById("upd-actions");let i=10,a=1;const u=window.setInterval(()=>{t&&(i+=a*7,i>=90&&(a=-1),i<=10&&(a=1),t.style.width=`${i}%`)},150);function l(){window.clearInterval(u),t&&(t.style.width="100%"),s&&(s.textContent="Atualização concluída!"),r&&(r.style.display="block",document.getElementById("upd-home")?.addEventListener("click",()=>{sessionStorage.removeItem(e),location.hash="#/"}))}const o=await navigator.serviceWorker.getRegistration(),c=()=>{!o?.installing&&!o?.waiting&&l()};c(),navigator.serviceWorker.addEventListener("controllerchange",()=>{setTimeout(c,0)})}const M="eco:updatePending",ue=B({immediate:!0,onNeedRefresh(){try{sessionStorage.setItem(M,"1")}catch{}location.hash!=="#/updating"&&(location.hash="#/updating"),setTimeout(()=>ue(!0),150)},onRegisteredSW(e,t){t&&setInterval(()=>t.update(),600*1e3)},onOfflineReady(){}}),me={"/":{view:V,init:H},"/ecoscan":{view:q,init:Z},"/ecogames":{view:W,init:X},"/ecopontos":{view:te,init:ne},"/debug-assets":{view:ie,init:oe},"/updating":{view:le,init:de}};function x(){const e=location.hash.replace("#","")||"/",t=me[e]??{view:()=>"<h2>404</h2><p>Página não encontrada</p>"},s=document.getElementById("app");s&&(s.innerHTML=t.view(),t.init?.()),document.querySelectorAll("nav a").forEach(r=>{const i=r.getAttribute("href")||"#/";r.classList.toggle("active",i===`#${e}`)})}sessionStorage.getItem(M)==="1"&&location.hash!=="#/updating"&&(location.hash="#/updating");window.addEventListener("hashchange",x);window.addEventListener("load",x);
