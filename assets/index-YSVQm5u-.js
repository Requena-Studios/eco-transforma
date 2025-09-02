const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/odd-one-out-trashbin-CFm8qp_g.js","assets/sacola-DoWOobCU.js","assets/lixeira-metal-isAHy5yi.js","assets/odd-one-out-trashbin-DRz2vgGO.css","assets/choose-for-trashbin-D94Ryrbx.js","assets/choose-for-trashbin-ZOpaeZbA.css","assets/memory-match-619HEwrI.js","assets/memory-match-DxZU0kuZ.css"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))E(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&E(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function E(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const M="modulepreload",y=function(e){return"/eco-transforma/"+e},g={},I=function(n,s,E){let t=Promise.resolve();if(s&&s.length>0){let m=function(c){return Promise.all(c.map(a=>Promise.resolve(a).then(O=>({status:"fulfilled",value:O}),O=>({status:"rejected",reason:O}))))};var r=m;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");t=m(s.map(c=>{if(c=y(c),c in g)return;g[c]=!0;const a=c.endsWith(".css"),O=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${O}`))return;const A=document.createElement("link");if(A.rel=a?"stylesheet":M,a||(A.as="script"),A.crossOrigin="",A.href=c,d&&A.setAttribute("nonce",d),document.head.appendChild(A),a)return new Promise((i,u)=>{A.addEventListener("load",i),A.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return t.then(l=>{for(const d of l||[])d.status==="rejected"&&o(d.reason);return n().catch(o)})};function P(e={}){const{immediate:n=!1,onNeedRefresh:s,onOfflineReady:E,onRegistered:t,onRegisteredSW:o,onRegisterError:r}=e;let l,d;const m=async(a=!0)=>{await d};async function c(){if("serviceWorker"in navigator){if(l=await I(async()=>{const{Workbox:a}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:a}},[]).then(({Workbox:a})=>new a("/eco-transforma/sw.js",{scope:"/eco-transforma/",type:"classic"})).catch(a=>{r?.(a)}),!l)return;l.addEventListener("activated",a=>{(a.isUpdate||a.isExternal)&&window.location.reload()}),l.addEventListener("installed",a=>{a.isUpdate||E?.()}),l.register({immediate:n}).then(a=>{o?o("/eco-transforma/sw.js",a):t?.(a)}).catch(a=>{r?.(a)})}}return d=c(),m}const H="/eco-transforma/img/mascote.webp";function B(e){R();const n=document.createElement("div");n.className="modal-backdrop",n.innerHTML=`
    <div class="modal">
      <button class="modal-close" aria-label="Fechar">×</button>
      <div class="modal-content">${e}</div>
    </div>`,document.body.appendChild(n),n.querySelector(".modal-close")?.addEventListener("click",R),n.addEventListener("click",s=>{s.target===n&&R()}),window.addEventListener("keydown",C)}function R(){const e=document.querySelector(".modal-backdrop");e&&(e.remove(),window.removeEventListener("keydown",C))}function C(e){e.key==="Escape"&&R()}const f=[`
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
  `],D=["OLÁ! EU SOU O SUCATECO,<br/>MASCOTINHO DO ECOTRANSFORMA.","JUNTE-SE A NÓS NESSA MISSÃO<br/>SUSTENTÁVEL E VENHA CUIDAR<br/> DO PLANETA COM A GENTE!","SELECIONE UMA DAS OPÇÕES<br/>ABAIXO E DESCUBRA COMO FAZER ISSO!"];let S=0;function G(){return`
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
    <img src="${H}" alt="Mascote EcoTransforma" class="hero-mascote" />
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
  `}function w(){const e=document.getElementById("bubble"),n=document.getElementById("bubble-text"),s=document.getElementById("prev"),E=document.getElementById("next"),t=document.getElementById("progress"),o=document.getElementById("btn-sobre"),r=document.getElementById("divInstall"),l=document.getElementById("btnInstall"),d=()=>{n.innerHTML=D[S],s.disabled=S===0,t.textContent=`${S+1}/${D.length}`};function m(){const i=N=>matchMedia(N).matches,u=i("(display-mode: fullscreen)")||i("(display-mode: standalone)")||i("(display-mode: window-controls-overlay)")||i("(display-mode: minimal-ui)"),h=navigator.standalone===!0,b=document.referrer?.startsWith("android-app://")??!1;return u||h||b}let c=null;window.addEventListener("beforeinstallprompt",i=>{i.preventDefault(),c=i,!m()&&r?.classList.remove("hidden")},{once:!0});async function a(){c&&(m()||(await c.prompt(),await c.userChoice,c=null,r?.classList.add("hidden")))}window.addEventListener("appinstalled",()=>{c=null,r?.classList.add("hidden")}),l?.addEventListener("click",a);const O=()=>{S<D.length-1&&S++,d()},A=()=>{S>0&&S--,d()};e.addEventListener("click",i=>{i.target.closest("button")||O()}),o?.addEventListener("click",()=>{let i=0;const u=()=>{B(`
            <h3 style="display: flex; justify-content: center; align-items: center;">
                <i class="fa-sharp-duotone fa-circle-info"
                    style="margin-right:.35rem;"></i>
                SOBRE NÓS
            </h3>

            <div class="modal-content" id="sobre-content">${f[i]}</div>

            <div class="modal-footer">
                <div class="left">
                <button id="sobre-prev" class="btn btn-ghost" ${i===0?"disabled":""} aria-label="Voltar">
                    <i class="fa-sharp-duotone fa-circle-left"
                       ></i>
                </button>
                </div>

                <div class="modal-progress" id="sobre-progress">${i+1}/${f.length}</div>

                <div class="right">
                <button id="sobre-close" class="btn btn-ghost" aria-label="Fechar">
                    <i class="fa-sharp-duotone fa-circle-xmark"
                       ></i>
                </button>
                <button id="sobre-next" class="btn" ${i===f.length-1?"disabled":""} aria-label="Avançar">
                    <i class="fa-sharp-duotone fa-circle-right"
                       ></i>
                </button>
                </div>
            </div>
            `);const h=document.getElementById("sobre-prev"),b=document.getElementById("sobre-next"),N=document.getElementById("sobre-close");h?.addEventListener("click",()=>{i>0&&(i--,u())}),b?.addEventListener("click",()=>{i<f.length-1&&(i++,u())}),N?.addEventListener("click",()=>R())};u()}),E.addEventListener("click",O),s.addEventListener("click",A),e.addEventListener("keydown",i=>{(i.key==="ArrowRight"||i.key==="Enter"||i.key===" ")&&O(),i.key==="ArrowLeft"&&A()}),S=0,d()}function V(){return`
  `}const U=[{id:"quiz",title:"QUIZ DA RECICLAGEM",subtitle:"RESPONDA E APRENDA ♻️",icon:"fa-sharp-duotone fa-circle-question",emoji:"❓",load:()=>I(()=>import("./quiz-CmkzqPTw.js"),[]).then(e=>e.QuizGame)},{id:"odd-one-out-trashbin",title:"TOQUE NA LIXEIRA CERTA",subtitle:"SEPARAÇÃO DE RESÍDUOS",icon:"fa-sharp-duotone fa-recycle",emoji:"🗑️",load:()=>I(()=>import("./odd-one-out-trashbin-CFm8qp_g.js"),__vite__mapDeps([0,1,2,3])).then(e=>e.OddOneOutTrashbinGame)},{id:"choose-for-trashbin",title:"TOQUE NO OBJETO CERTO",subtitle:"SEPARAÇÃO DE RESÍDUOS",icon:"fa-sharp-duotone fa-recycle",emoji:"🗑️",load:()=>I(()=>import("./choose-for-trashbin-D94Ryrbx.js"),__vite__mapDeps([4,1,2,5])).then(e=>e.ChooseForTrashbinGame)},{id:"memory-match",title:"JOGO DA MEMÓRIA",subtitle:"COMBINE OS PARES ♻️",icon:"fa-sharp-duotone fa-cards",emoji:"🃏",load:()=>I(()=>import("./memory-match-619HEwrI.js"),__vite__mapDeps([6,1,7])).then(e=>e.MemoryMatchGame)}];let p=null;function $(e,n,s,E,t){return`
    <button class="game-card" data-id="${e}" aria-label="${n}">
      <i class="${E}"></i>
      <div class="game-card-txt">
        <strong>${t?`${t} `:""}${n}</strong>
        ${s?`<small>${s}</small>`:""}
      </div>
    </button>
  `}function k(){return`
    <section class="games-wrap shout">
      <h2 class="games-h2">
        <i class="fa-sharp-duotone fa-gamepad"></i>
        ECOJOGOS
      </h2>

      <div id="games-selector" class="games-selector">
        ${U.map(e=>$(e.id,e.title,e.subtitle,e.icon,e.emoji)).join("")}
      </div>

      <div id="game-area" class="game-area" hidden></div>
    </section>
  `}function J(){const e=document.getElementById("games-selector"),n=document.getElementById("game-area");if(!e||!n)return;const s=()=>{p?.destroy&&p.destroy(),p=null,n.hidden=!0,e.hidden=!1,n.innerHTML=""},E=async t=>{const o=U.find(l=>l.id===t);if(!o)return;e.hidden=!0,n.hidden=!1;const r=await o.load();p=r,r.mount(n)};e.addEventListener("click",t=>{const o=t.target.closest(".game-card");if(!o)return;const r=o.getAttribute("data-id");E(r)}),document.addEventListener("game:exit",s)}const v=[{id:"cidade-nova",nome:"ECOPONTO CIDADE NOVA",endereco:"R. DORACI CAMARGO ALEGRE, S/Nº – CIDADE NOVA, JUNDIAÍ, 13219-410",semana:"SEG. - SEX.: 8H ÀS 12H – 13H ÀS 17H",sabado:"SÁBADO: 8H ÀS 12H"},{id:"jardim-do-lago",nome:"ECOPONTO JARDIM DO LAGO",endereco:"R. GERALDO SANTOS, 195 – JARDIM DO LAGO, JUNDIAÍ, 13203-650",semana:"SEG. - SEX.: 7H30 ÀS 12H – 13H ÀS 16H",sabado:"SÁBADO: 7H ÀS 12H – 13H ÀS 15H"},{id:"jardim-taruma",nome:"ECOPONTO JARDIM TARUMÃ",endereco:"RUA RIO DE JANEIRO, S/N – JARDIM TARUMÃ, JUNDIAÍ, 13216-570",semana:"SEG. - SEX.: 8H ÀS 12H30 – 13H30 ÀS 16H30",sabado:"SÁBADO: 8H ÀS 12H"},{id:"morada-das-vinhas",nome:"ECOPONTO MORADA DAS VINHAS",endereco:"R. UVA NIÁGARA, 376 – PARQUE CECAP, JUNDIAÍ, 13214-719 (PARQUE ECOLÓGICO MORADA DAS VINHAS – “JOSÉ ROBERTO MOTA BARROCA”)",semana:"SEG. - SEX.: 8H ÀS 12H – 13H ÀS 16H30",sabado:"SÁBADO: 8H ÀS 12H"},{id:"residencial-jundiai",nome:"ECOPONTO RESIDENCIAL JUNDIAÍ",endereco:"AV. EUNICE C. DE SOUZA QUEIROZ, S/Nº – PARQUE RESIDENCIAL JUNDIAÍ, 13212-463",semana:"SEG. - SEX.: 8H ÀS 12H – 13H ÀS 17H",sabado:"SÁBADO: 8H ÀS 12H"},{id:"vila-nambi",nome:"ECOPONTO VILA NAMBI",endereco:"R. MARQUÊS DE MARICÁ, S/Nº – VILA NAMBI, JUNDIAÍ, 13219-020",semana:"SEG. - SEX.: 8H ÀS 12H – 13H ÀS 17H",sabado:"SÁBADO: 8H ÀS 12H"}],L=2;function _(e){return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}`}function x(e){const n=_(`${e.nome}, ${e.endereco}`);return`
    <article class="eco-card" data-id="${e.id}">
      <header class="eco-card-hd">
        <i class="fa-sharp-duotone fa-location-dot"
          ></i>
        <h3 class="eco-title">${e.nome}</h3>

        <div class="eco-actions">
            <a class="btn" href="${n}" target="_blank" rel="noopener"
               aria-label="Abrir no Google Maps">
              <i class="fa-sharp-duotone fa-route"
                 style="margin-right:.35rem;"></i>
            </a>
        </div>
      </header>

      <p class="eco-address">
        <i class="fa-sharp-duotone fa-map-location-dot"
          ></i>
        ${e.endereco}
      </p>

      <ul class="eco-hours">
        <li>
          <i class="fa-sharp-duotone fa-calendar-days"
            ></i>
          ${e.semana}
        </li>
        <li>
          <i class="fa-sharp-duotone fa-calendar-day"
            ></i>
          ${e.sabado}
        </li>
      </ul>
    </article>
  `}function F(){return`
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
  `}function Q(){const e=document.getElementById("eco-list"),n=document.getElementById("eco-prev"),s=document.getElementById("eco-next"),E=document.getElementById("eco-page");if(!e||!n||!s||!E)return;let t=0;const o=Math.ceil(v.length/L),r=()=>{const l=t*L,d=v.slice(l,l+L);e.innerHTML=d.map(x).join(""),E.textContent=`${t+1}/${o}`,n.disabled=t===0,s.disabled=t>=o-1};n.addEventListener("click",()=>{t>0&&(t--,r())}),s.addEventListener("click",()=>{t<o-1&&(t++,r())}),r()}const Z=P({immediate:!0,onNeedRefresh(){const e=document.createElement("div");e.className="update-banner",e.innerHTML=`
      <span>🔄 Nova versão disponível</span>
      <button>Atualizar</button>
    `,document.body.appendChild(e),e.querySelector("button").addEventListener("click",()=>{Z(!0)})},onOfflineReady(){console.log("✅ App pronto para uso offline")}}),q={"/":{view:G,init:w},"/ecoscan":{view:V},"/ecogames":{view:k,init:J},"/ecopontos":{view:F,init:Q}};function T(){const e=location.hash.replace("#","")||"/",n=q[e]??{view:()=>"<h2>404</h2><p>Página não encontrada</p>"},s=document.getElementById("app");s&&(s.innerHTML=n.view(),n.init?.()),document.querySelectorAll("nav a").forEach(E=>{const t=E.getAttribute("href")||"#/";E.classList.toggle("active",t===`#${e}`)})}window.addEventListener("hashchange",T);window.addEventListener("load",T);
