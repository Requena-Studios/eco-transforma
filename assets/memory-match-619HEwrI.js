import{j as $,p as D,r as x,g as C,s as V,i as N,l as U,a as k,c as q,b as G,d as j,e as w}from"./sacola-DoWOobCU.js";const v=[{name:"JORNAL",type:"papel",img:$},{name:"CAIXA DE PAPELÃO",type:"papel",img:D},{name:"REVISTA",type:"papel",img:x},{name:"GARRAFA PET",type:"plastico",img:C},{name:"SACO PLÁSTICO",type:"plastico",img:V},{name:"POTE DE IOGURTE",type:"plastico",img:N},{name:"LATA DE REFRI",type:"metal",img:U},{name:"PAPEL ALUMÍNIO",type:"metal",img:k},{name:"CLIPES",type:"metal",img:q},{name:"POTE DE VIDRO",type:"vidro",img:G},{name:"GARRAFA DE VIDRO",type:"vidro",img:j},{name:"COPO DE VIDRO",type:"vidro",img:w}],T={papel:"#3087b2",plastico:"#cd3623",metal:"#e8ae29",vidro:"#488f2e"};function I(n){const t=n.slice();for(let m=t.length-1;m>0;m--){const E=Math.floor(Math.random()*(m+1));[t[m],t[E]]=[t[E],t[m]]}return t}function B(n,t){return I(n).slice(0,t)}const o=8,J={async mount(n){n.innerHTML=`
      <div class="mm-wrap shout">
        <header class="mm-hd">
          <i class="fa-sharp-duotone fa-cards"
            ></i>
          <h3>MEMÓRIA: ITENS E LIXEIRAS</h3>
          <div class="mm-progress">
            <span id="mm-found">0</span>/<span id="mm-total">${o}</span>
          </div>
        </header>

        <div id="mm-stage" class="mm-stage"></div>

        <footer class="mm-ft">
          <button id="mm-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
              ></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const t=n.querySelector("#mm-stage"),m=n.querySelector("#mm-found");n.querySelector("#mm-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let c=[],l=null,d=null,f=!1,u=0,g=0,O=0;function S(){const e={papel:v.filter(i=>i.type==="papel"),plastico:v.filter(i=>i.type==="plastico"),metal:v.filter(i=>i.type==="metal"),vidro:v.filter(i=>i.type==="vidro")},s=["papel","plastico","metal","vidro"],a=[];for(;a.length<o;)a.push(...I(s));const r=a.slice(0,o),p=[];let L=0;for(const i of r){const h=e[i],P=h.length>=2?B(h,2):[h[0],h[0]];for(const A of P)p.push({id:`c${L++}`,type:A.type,name:A.name,img:A.img,matched:!1,faceUp:!1})}return I(p)}function y(){t.innerHTML=`
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
                    ></i>
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
      `,t.querySelectorAll(".mm-card").forEach(e=>{e.addEventListener("click",()=>b(Number(e.dataset.idx)))})}function b(e){if(f)return;const s=c[e];if(!(s.matched||s.faceUp)){if(s.faceUp=!0,l===null){l=e,y();return}if(d===null){d=e,g++,y();const a=c[l],r=c[d],p=a.type===r.type;f=!0,setTimeout(()=>{if(p){if(a.matched=r.matched=!0,u++,m.textContent=String(u),u>=o){M();return}}else a.faceUp=r.faceUp=!1;l=d=null,f=!1,y()},p?450:700)}}}function M(){const e=Date.now()-O,s=Math.max(1,Math.round(e/1e3)),a=Math.max(0,Math.round(o/g*100)),r=a>=80?"PARABÉNS! 🌟":a>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪";t.innerHTML=`
        <div class="mm-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${r}</h3>
          <p>VOCÊ ENCONTROU ${o} PARES.</p>
          <p>TEMPO: <strong>${s}s</strong> • JOGADAS: <strong>${g}</strong></p>
          <div class="mm-end-actions">
            <button id="mm-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,t.querySelector("#mm-retry").addEventListener("click",R)}function R(){c=S(),l=d=null,f=!1,u=0,g=0,m.textContent="0",O=Date.now(),y()}R()}};export{J as MemoryMatchGame};
