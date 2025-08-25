import{j as $,p as D,r as x,g as C,s as V,i as N,l as U,a as k,c as q,b as G,d as j,e as w}from"./sacola-BO_g5ryX.js";const v=[{name:"JORNAL",type:"papel",img:$},{name:"CAIXA DE PAPELÃO",type:"papel",img:D},{name:"REVISTA",type:"papel",img:x},{name:"GARRAFA PET",type:"plastico",img:C},{name:"SACO PLÁSTICO",type:"plastico",img:V},{name:"POTE DE IOGURTE",type:"plastico",img:N},{name:"LATA DE REFRI",type:"metal",img:U},{name:"PAPEL ALUMÍNIO",type:"metal",img:k},{name:"CLIPES",type:"metal",img:q},{name:"POTE DE VIDRO",type:"vidro",img:G},{name:"GARRAFA DE VIDRO",type:"vidro",img:j},{name:"COPO DE VIDRO",type:"vidro",img:w}],T={papel:"#3087b2",plastico:"#cd3623",metal:"#e8ae29",vidro:"#488f2e"};function I(n){const a=n.slice();for(let r=a.length-1;r>0;r--){const E=Math.floor(Math.random()*(r+1));[a[r],a[E]]=[a[E],a[r]]}return a}function B(n,a){return I(n).slice(0,a)}const m=8,J={async mount(n){n.innerHTML=`
      <div class="mm-wrap shout">
        <header class="mm-hd">
          <i class="fa-sharp-duotone fa-cards"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
          <h3>MEMÓRIA: ITENS E LIXEIRAS</h3>
          <div class="mm-progress">
            <span id="mm-found">0</span>/<span id="mm-total">${m}</span>
          </div>
        </header>

        <div id="mm-stage" class="mm-stage"></div>

        <footer class="mm-ft">
          <button id="mm-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
               style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const a=n.querySelector("#mm-stage"),r=n.querySelector("#mm-found");n.querySelector("#mm-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let c=[],l=null,d=null,f=!1,u=0,g=0,O=0;function S(){const e={papel:v.filter(i=>i.type==="papel"),plastico:v.filter(i=>i.type==="plastico"),metal:v.filter(i=>i.type==="metal"),vidro:v.filter(i=>i.type==="vidro")},s=["papel","plastico","metal","vidro"],t=[];for(;t.length<m;)t.push(...I(s));const o=t.slice(0,m),p=[];let L=0;for(const i of o){const h=e[i],P=h.length>=2?B(h,2):[h[0],h[0]];for(const A of P)p.push({id:`c${L++}`,type:A.type,name:A.name,img:A.img,matched:!1,faceUp:!1})}return I(p)}function y(){a.innerHTML=`
        <div class="mm-intro">
          <p class="mm-instr">Encontre pares de itens que vão para a mesma lixeira.</p>
        </div>
        <div class="mm-grid">
          ${c.map((e,s)=>`
            <button
              class="mm-card ${e.faceUp||e.matched?"is-flipped":""} ${e.matched?"is-matched":""}"
              data-idx="${s}"
              style="--type-color:${T[e.type]};"
              aria-pressed="${e.faceUp||e.matched?"true":"false"}"
              aria-label="${e.matched?e.name+" (correspondência encontrada)":e.name}">
              <div class="mm-card-inner">
                <div class="mm-card-face mm-card-front">
                  <i class="fa-sharp-duotone fa-recycle"
                     style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
                </div>
                <div class="mm-card-face mm-card-back">
                  <div class="mm-card-imgframe">
                    <img class="img-fit" src="${e.img}" alt="${e.name}" />
                  </div>
                  <div class="mm-chip" style="background:${T[e.type]};">
                    ${e.type.toUpperCase()}
                  </div>
                </div>
              </div>
            </button>
          `).join("")}
        </div>
      `,a.querySelectorAll(".mm-card").forEach(e=>{e.addEventListener("click",()=>b(Number(e.dataset.idx)))})}function b(e){if(f)return;const s=c[e];if(!(s.matched||s.faceUp)){if(s.faceUp=!0,l===null){l=e,y();return}if(d===null){d=e,g++,y();const t=c[l],o=c[d],p=t.type===o.type;f=!0,setTimeout(()=>{if(p){if(t.matched=o.matched=!0,u++,r.textContent=String(u),u>=m){M();return}}else t.faceUp=o.faceUp=!1;l=d=null,f=!1,y()},p?450:700)}}}function M(){const e=Date.now()-O,s=Math.max(1,Math.round(e/1e3)),t=Math.max(0,Math.round(m/g*100)),o=t>=80?"PARABÉNS! 🌟":t>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪";a.innerHTML=`
        <div class="mm-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${o}</h3>
          <p>VOCÊ ENCONTROU ${m} PARES.</p>
          <p>TEMPO: <strong>${s}s</strong> • JOGADAS: <strong>${g}</strong></p>
          <div class="mm-end-actions">
            <button id="mm-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,a.querySelector("#mm-retry").addEventListener("click",R)}function R(){c=S(),l=d=null,f=!1,u=0,g=0,r.textContent="0",O=Date.now(),y()}R()}};export{J as MemoryMatchGame};
