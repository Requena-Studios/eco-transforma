const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/drag-trash-BQ3-ajoQ.js","assets/drag-trash-CrghSDTr.css"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(a){if(a.ep)return;a.ep=!0;const t=n(a);fetch(a.href,t)}})();const U="modulepreload",C=function(e){return"/eco-transforma/"+e},h={},p=function(o,n,l){let a=Promise.resolve();if(n&&n.length>0){let c=function(A){return Promise.all(A.map(r=>Promise.resolve(r).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};var i=c;document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),d=s?.nonce||s?.getAttribute("nonce");a=c(n.map(A=>{if(A=C(A),A in h)return;h[A]=!0;const r=A.endsWith(".css"),f=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${A}"]${f}`))return;const E=document.createElement("link");if(E.rel=r?"stylesheet":U,r||(E.as="script"),E.crossOrigin="",E.href=A,d&&E.setAttribute("nonce",d),document.head.appendChild(E),r)return new Promise((g,L)=>{E.addEventListener("load",g),E.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${A}`)))})}))}function t(s){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s}return a.then(s=>{for(const d of s||[])d.status==="rejected"&&t(d.reason);return o().catch(t)})};function v(e={}){const{immediate:o=!1,onNeedRefresh:n,onOfflineReady:l,onRegistered:a,onRegisteredSW:t,onRegisterError:i}=e;let s,d;const c=async(r=!0)=>{await d};async function A(){if("serviceWorker"in navigator){if(s=await p(async()=>{const{Workbox:r}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:r}},[]).then(({Workbox:r})=>new r("/eco-transforma/sw.js",{scope:"/eco-transforma/",type:"classic"})).catch(r=>{i?.(r)}),!s)return;s.addEventListener("activated",r=>{(r.isUpdate||r.isExternal)&&window.location.reload()}),s.addEventListener("installed",r=>{r.isUpdate||l?.()}),s.register({immediate:o}).then(r=>{t?t("/eco-transforma/sw.js",r):a?.(r)}).catch(r=>{i?.(r)})}}return d=A(),c}const T="/eco-transforma/img/mascote2.png";function M(e){u();const o=document.createElement("div");o.className="modal-backdrop",o.innerHTML=`
    <div class="modal">
      <button class="modal-close" aria-label="Fechar">×</button>
      <div class="modal-content">${e}</div>
    </div>`,document.body.appendChild(o),o.querySelector(".modal-close")?.addEventListener("click",u),o.addEventListener("click",n=>{n.target===o&&u()}),window.addEventListener("keydown",N)}function u(){const e=document.querySelector(".modal-backdrop");e&&(e.remove(),window.removeEventListener("keydown",N))}function N(e){e.key==="Escape"&&u()}const S=[`
  <h4><i class="fa-sharp-duotone fa-lightbulb-on sobre-icon" style="--fa-primary-color:#f5b301;--fa-secondary-color:#ffd566;"></i> COMO SURGIU?</h4>
  <p>O PROJETO ECOTRANSFORMA SURGIU ATRAVÉS DO PROGRAMA STEAM, REALIZADO PELA PARCERIA DA LSI-TEC, FUNDAÇÃO SIEMENS E MAESTRO EDUCAÇÃO, QUE VISA INSERIR A PESQUISA, TECNOLOGIA E METODOLOGIA CIENTÍFICA PARA ALUNOS DO ENSINO FUNDAMENTAL.</p>
  `,`
  <h4><i class="fa-sharp-duotone fa-users sobre-icon" style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#9ad1b1;"></i> QUEM SOMOS?</h4>
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
  <h4><i class="fa-sharp-duotone fa-children sobre-icon" style="--fa-primary-color:#3b82f6;--fa-secondary-color:#a5c8ff;"></i> ESTUDANTES (1/3)</h4>
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
  <h4><i class="fa-sharp-duotone fa-children sobre-icon" style="--fa-primary-color:#3b82f6;--fa-secondary-color:#a5c8ff;"></i> ESTUDANTES (2/3)</h4>
  <ul style="padding-inline-start: 1rem;">
    <li>ELISABETE LIMA</li>
    <li>ENZO GABRIEL DE OLIVEIRA MARQUES</li>
    <li>ENZO HENRIQUE SILVA DE MENESES</li>
    <li>GUILHERME MIGUEL MUKAI ROSA</li>
    <li>HEITOR FECCO CADORINI</li>
    <li>JOÃO LUCAS DA CUNHA ZAGO</li>
    <li>JOÃO VICTOR BELMIRO CARDOSO</li>
    <li>KAYNAN SPOLADORE BORGES</li>
  </ul>
  `,`
  <h4><i class="fa-sharp-duotone fa-children sobre-icon" style="--fa-primary-color:#3b82f6;--fa-secondary-color:#a5c8ff;"></i> ESTUDANTES (3/3)</h4>
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
  <h4><i class="fa-sharp-duotone fa-hands-holding-circle sobre-icon" style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#93e1a3;"></i> COMO AJUDAR? (1/2)</h4>
  <ul style="padding-inline-start: 1rem;">
    <li>♻️ SEPARAR O LIXO RECICLÁVEL DO ORGÂNICO;</li>
    <li>🗑️ FAZER O DESCARTE ADEQUADO DOS RESÍDUOS (LIXEIRA CERTA);</li>
    <li>🚯 NÃO JOGAR LIXO NA RUA, CALÇADAS OU CÓRREGOS;</li>
    <li>🏗️ LEVAR ENTULHOS, MÓVEIS E PODAS A UM ECOPONTO;</li>
  </ul>
  `,`
  <h4><i class="fa-sharp-duotone fa-hands-holding-circle sobre-icon" style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#93e1a3;"></i> COMO AJUDAR? (2/2)</h4>
  <ul style="padding-inline-start: 1rem;">
    <li>🛍️ DIMINUIR O USO DE MATERIAIS (COMPRAR APENAS O NECESSÁRIO);</li>
    <li>🎨 USAR A CRIATIVIDADE PARA REUTILIZAR MATERIAIS RECICLÁVEIS;</li>
    <li>🚿 FECHAR TORNEIRA/CHUVEIRO ENQUANTO ESCOVA OS DENTES OU LAVA A LOUÇA;</li>
    <li>⚡ EVITAR DESPERDÍCIO DE ALIMENTOS, ÁGUA E ENERGIA.</li>
  </ul>
  `,`
  <p><em>
  <i class="fa-sharp-duotone fa-trash-can-check sobre-icon" style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#9bd7ac;"></i>
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
  <p>✉️ <a href="mailto:requenastudios@gmail.com">requenastudios@gmail.com</a></p>
  `],R=["OLÁ! EU SOU O SUCATECO,<br/>MASCOTINHO DO ECOTRANSFORMA.","JUNTE-SE A NÓS NESSA MISSÃO<br/>SUSTENTÁVEL E VENHA CUIDAR<br/> DO PLANETA COM A GENTE!","SELECIONE UMA DAS OPÇÕES<br/>ABAIXO E DESCUBRA COMO FAZER ISSO!"];let O=0;function P(){return`
<section class="hero">
  <div class="hero-bubble-container">
    <div class="hero-bubble" id="bubble" tabindex="0" role="button" aria-label="Avançar diálogo">
      <p id="bubble-text" class="bubble-text"></p>
      <div class="hero-actions">
        <button id="prev" class="btn" aria-label="Voltar">
          <i class="fa-sharp-duotone fa-circle-left"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
        </button>
        <span id="progress" class="progress"></span>
        <button id="next" class="btn" aria-label="Avançar">
          <i class="fa-sharp-duotone fa-circle-right"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
        </button>
      </div>
    </div>
  </div>

  <div class="hero-figure">
    <img src="${T}" alt="Mascote EcoTransforma" class="hero-mascote" />
  </div>

  <div class="hero-cta">
    <button id="btn-sobre" class="btn" aria-label="Abrir Sobre">
      <i class="fa-sharp-duotone fa-circle-question"
         style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
      SOBRE
    </button>
  </div>
</section>
  `}function H(){const e=document.getElementById("bubble"),o=document.getElementById("bubble-text"),n=document.getElementById("prev"),l=document.getElementById("next"),a=document.getElementById("progress"),t=document.getElementById("btn-sobre"),i=()=>{o.innerHTML=R[O],n.disabled=O===0,a.textContent=`${O+1}/${R.length}`},s=()=>{O<R.length-1&&O++,i()},d=()=>{O>0&&O--,i()};e.addEventListener("click",c=>{c.target.closest("button")||s()}),t?.addEventListener("click",()=>{let c=0;const A=()=>{M(`
            <h3 style="display: flex; justify-content: center; align-items: center;">
                <i class="fa-sharp-duotone fa-circle-info"
                    style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
                SOBRE NÓS
            </h3>

            <div class="modal-content" id="sobre-content">${S[c]}</div>

            <div class="modal-footer">
                <div class="left">
                <button id="sobre-prev" class="btn btn-ghost" ${c===0?"disabled":""} aria-label="Voltar">
                    <i class="fa-sharp-duotone fa-circle-left"
                        style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
                </button>
                </div>

                <div class="modal-progress" id="sobre-progress">${c+1}/${S.length}</div>

                <div class="right">
                <button id="sobre-close" class="btn btn-ghost" aria-label="Fechar">
                    <i class="fa-sharp-duotone fa-circle-xmark"
                        style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
                </button>
                <button id="sobre-next" class="btn" ${c===S.length-1?"disabled":""} aria-label="Avançar">
                    <i class="fa-sharp-duotone fa-circle-right"
                        style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
                </button>
                </div>
            </div>
            `);const r=document.getElementById("sobre-prev"),f=document.getElementById("sobre-next"),E=document.getElementById("sobre-close");r?.addEventListener("click",()=>{c>0&&(c--,A())}),f?.addEventListener("click",()=>{c<S.length-1&&(c++,A())}),E?.addEventListener("click",()=>u())};A()}),l.addEventListener("click",s),n.addEventListener("click",d),e.addEventListener("keydown",c=>{(c.key==="ArrowRight"||c.key==="Enter"||c.key===" ")&&s(),c.key==="ArrowLeft"&&d()}),O=0,i()}function B(){return`
    <h2>🔍 EcoScan</h2>
    <p>Selecione um material ou use a câmera (em breve).</p>
  `}const D=[{id:"quiz",title:"QUIZ DA RECICLAGEM",subtitle:"RESPONDA E APRENDA ♻️",icon:"fa-sharp-duotone fa-circle-question",emoji:"❓",load:()=>p(()=>import("./quiz-Bd5g92e6.js"),[]).then(e=>e.QuizGame)},{id:"drag-trash",title:"ARRASTE PARA A LIXEIRA CERTA",subtitle:"SEPARAÇÃO DE RESÍDUOS",icon:"fa-sharp-duotone fa-recycle",emoji:"🗑️",load:()=>p(()=>import("./drag-trash-BQ3-ajoQ.js"),__vite__mapDeps([0,1])).then(e=>e.DragTrashGame)}];let m=null;function G(e,o,n,l,a){return`
    <button class="game-card" data-id="${e}" aria-label="${o}">
      <i class="${l}" style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
      <div class="game-card-txt">
        <strong>${a?`${a} `:""}${o}</strong>
        ${n?`<small>${n}</small>`:""}
      </div>
    </button>
  `}function V(){return`
    <section class="games-wrap shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-gamepad" style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
        ECOJOGOS
      </h2>

      <div id="games-selector" class="games-selector">
        ${D.map(e=>G(e.id,e.title,e.subtitle,e.icon,e.emoji)).join("")}
      </div>

      <div id="game-area" class="game-area" hidden></div>
    </section>
  `}function w(){const e=document.getElementById("games-selector"),o=document.getElementById("game-area");if(!e||!o)return;const n=()=>{m?.destroy&&m.destroy(),m=null,o.hidden=!0,e.hidden=!1,o.innerHTML=""},l=async a=>{const t=D.find(s=>s.id===a);if(!t)return;e.hidden=!0,o.hidden=!1;const i=await t.load();m=i,i.mount(o)};e.addEventListener("click",a=>{const t=a.target.closest(".game-card");if(!t)return;const i=t.getAttribute("data-id");l(i)}),document.addEventListener("game:exit",n)}const b=[{id:"cidade-nova",nome:"ECOPONTO CIDADE NOVA",endereco:"R. DORACI CAMARGO ALEGRE, S/Nº – CIDADE NOVA, JUNDIAÍ, 13219-410",semana:"SEG. - SEX.: 8H ÀS 12H – 13H ÀS 17H",sabado:"SÁBADO: 8H ÀS 12H"},{id:"jardim-do-lago",nome:"ECOPONTO JARDIM DO LAGO",endereco:"R. GERALDO SANTOS, 195 – JARDIM DO LAGO, JUNDIAÍ, 13203-650",semana:"SEG. - SEX.: 7H30 ÀS 12H – 13H ÀS 16H",sabado:"SÁBADO: 7H ÀS 12H – 13H ÀS 15H"},{id:"jardim-taruma",nome:"ECOPONTO JARDIM TARUMÃ",endereco:"RUA RIO DE JANEIRO, S/N – JARDIM TARUMÃ, JUNDIAÍ, 13216-570",semana:"SEG. - SEX.: 8H ÀS 12H30 – 13H30 ÀS 16H30",sabado:"SÁBADO: 8H ÀS 12H"},{id:"morada-das-vinhas",nome:"ECOPONTO MORADA DAS VINHAS",endereco:"R. UVA NIÁGARA, 376 – PARQUE CECAP, JUNDIAÍ, 13214-719 (PARQUE ECOLÓGICO MORADA DAS VINHAS – “JOSÉ ROBERTO MOTA BARROCA”)",semana:"SEG. - SEX.: 8H ÀS 12H – 13H ÀS 16H30",sabado:"SÁBADO: 8H ÀS 12H"},{id:"residencial-jundiai",nome:"ECOPONTO RESIDENCIAL JUNDIAÍ",endereco:"AV. EUNICE C. DE SOUZA QUEIROZ, S/Nº – PARQUE RESIDENCIAL JUNDIAÍ, 13212-463",semana:"SEG. - SEX.: 8H ÀS 12H – 13H ÀS 17H",sabado:"SÁBADO: 8H ÀS 12H"},{id:"vila-nambi",nome:"ECOPONTO VILA NAMBI",endereco:"R. MARQUÊS DE MARICÁ, S/Nº – VILA NAMBI, JUNDIAÍ, 13219-020",semana:"SEG. - SEX.: 8H ÀS 12H – 13H ÀS 17H",sabado:"SÁBADO: 8H ÀS 12H"}],I=2;function $(e){return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`}function k(e){const o=$(`${e.nome}, ${e.endereco}`);return`
    <article class="eco-card" data-id="${e.id}">
      <header class="eco-card-hd">
        <i class="fa-sharp-duotone fa-location-dot"
           style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
        <h3 class="eco-title">${e.nome}</h3>

        <div class="eco-actions">
            <a class="btn" href="${o}" target="_blank" rel="noopener"
               aria-label="Abrir no Google Maps">
              <i class="fa-sharp-duotone fa-route"
                 style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
            </a>
        </div>
      </header>

      <p class="eco-address">
        <i class="fa-sharp-duotone fa-map-location-dot"
           style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
        ${e.endereco}
      </p>

      <ul class="eco-hours">
        <li>
          <i class="fa-sharp-duotone fa-calendar-days"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
          ${e.semana}
        </li>
        <li>
          <i class="fa-sharp-duotone fa-calendar-day"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
          ${e.sabado}
        </li>
      </ul>
    </article>
  `}function J(){return`
    <section class="eco-wrap shout">
      <h2 class="eco-h2">
        <i class="fa-sharp-duotone fa-recycle"
           style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
        ECOPONTOS DE JUNDIAÍ
      </h2>

      <div id="eco-list" class="eco-list"></div>

      <div class="eco-pager">
        <button id="eco-prev" class="btn btn-ghost" aria-label="Página anterior">
          <i class="fa-sharp-duotone fa-circle-left"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
        </button>

        <span id="eco-page" class="eco-page-indicator">1</span>

        <button id="eco-next" class="btn" aria-label="Próxima página">
          <i class="fa-sharp-duotone fa-circle-right"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
        </button>
      </div>
    </section>
  `}function x(){const e=document.getElementById("eco-list"),o=document.getElementById("eco-prev"),n=document.getElementById("eco-next"),l=document.getElementById("eco-page");if(!e||!o||!n||!l)return;let a=0;const t=Math.ceil(b.length/I),i=()=>{const s=a*I,d=b.slice(s,s+I);e.innerHTML=d.map(k).join(""),l.textContent=`${a+1}/${t}`,o.disabled=a===0,n.disabled=a>=t-1};o.addEventListener("click",()=>{a>0&&(a--,i())}),n.addEventListener("click",()=>{a<t-1&&(a++,i())}),i()}const F=v({immediate:!0,onNeedRefresh(){const e=document.createElement("div");e.className="update-banner",e.innerHTML=`
      <span>🔄 Nova versão disponível</span>
      <button>Atualizar</button>
    `,document.body.appendChild(e),e.querySelector("button").addEventListener("click",()=>{F(!0)})},onOfflineReady(){console.log("✅ App pronto para uso offline")}}),_={"/":{view:P,init:H},"/ecoscan":{view:B},"/ecogames":{view:V,init:w},"/ecopontos":{view:J,init:x}};function y(){const e=location.hash.replace("#","")||"/",o=_[e]??{view:()=>"<h2>404</h2><p>Página não encontrada</p>"},n=document.getElementById("app");n&&(n.innerHTML=o.view(),o.init?.()),document.querySelectorAll("nav a").forEach(l=>{const a=l.getAttribute("href")||"#/";l.classList.toggle("active",a===`#${e}`)})}window.addEventListener("hashchange",y);window.addEventListener("load",y);
