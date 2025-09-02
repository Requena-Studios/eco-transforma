import{j as R,p as S,r as P,g as $,s as x,i as D,l as M,a as C,c as N,b as V,d as U,e as q}from"./sacola-DoWOobCU.js";import{l as B,a as j,b as w,c as k}from"./lixeira-metal-isAHy5yi.js";const E=10,G=4,O=[{id:"papel",title:"PAPEL",color:"#3087b2",img:B},{id:"plastico",title:"PLÁSTICO",color:"#cd3623",img:j},{id:"metal",title:"METAL",color:"#e8ae29",img:w},{id:"vidro",title:"VIDRO",color:"#488f2e",img:k}],A=[{name:"JORNAL",type:"papel",img:R},{name:"CAIXA DE PAPELÃO",type:"papel",img:S},{name:"REVISTA",type:"papel",img:P},{name:"GARRAFA PET",type:"plastico",img:$},{name:"SACO PLÁSTICO",type:"plastico",img:x},{name:"POTE DE IOGURTE",type:"plastico",img:D},{name:"LATA DE REFRI",type:"metal",img:M},{name:"PAPEL ALUMÍNIO",type:"metal",img:C},{name:"CLIPES",type:"metal",img:N},{name:"POTE DE VIDRO",type:"vidro",img:V},{name:"GARRAFA DE VIDRO",type:"vidro",img:U},{name:"COPO DE VIDRO",type:"vidro",img:q}];function b(i){const o=i.slice();for(let n=o.length-1;n>0;n--){const u=Math.floor(Math.random()*(n+1));[o[n],o[u]]=[o[u],o[n]]}return o}function F(i,o){return b(i).slice(0,o)}function H(i){return i[Math.floor(Math.random()*i.length)]}const _={async mount(i){i.innerHTML=`
      <div class="cftb-wrap shout">
        <header class="cftb-hd">
          <i class="fa-sharp-duotone fa-recycle"
            ></i>
          <h3>TOQUE NO OBJETO CERTO</h3>
          <div class="cftb-progress">
            <span id="cftb-pos">1</span>/<span id="cftb-total">${E}</span>
          </div>
        </header>

        <div id="cftb-stage" class="cftb-stage"></div>

        <footer class="cftb-ft">
          <button id="cftb-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
              ></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const o=i.querySelector("#cftb-stage"),n=i.querySelector("#cftb-pos");i.querySelector("#cftb-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let c=[],d=0,g=0,p=!1;function v(){const e=["papel","plastico","metal","vidro"],r=Math.floor(E/e.length),l=E%e.length,s=[],f=b(e);for(const a of e){const m=O.find(t=>t.id===a);for(let t=0;t<r;t++)s.push(m)}for(let a=0;a<l;a++){const m=O.find(t=>t.id===f[a]);s.push(m)}c=b(s),d=0,g=0,i.querySelector("#cftb-total").textContent=String(c.length),h()}function h(){const e=c[d];n.textContent=String(d+1),p=!1;const r=A.filter(t=>t.type===e.id),l=A.filter(t=>t.type!==e.id),s=H(r),f=F(l,Math.max(0,G-1)),a=b([s,...f]);o.innerHTML=`
        <div class="cftb-q">
          <p class="cftb-instr">Qual objeto vai na lixeira?</p>

          <div class="cftb-items-container">
            <!-- LADO ESQUERDO: 2 opções -->
            <div class="cftb-bins">
              ${a.slice(0,2).map(t=>`
                <button class="cftb-option" data-correct="${String(t===s)}" aria-label="${t.name}">
                  <div class="cftb-option-frame">
                    <img class="img-fit" src="${t.img}" alt="${t.name}" />
                  </div>
                  <span class="cftb-option-title">${t.name}</span>
                </button>
              `).join("")}
            </div>

            <!-- CENTRO: Lixeira alvo -->
            <div class="cftb-item-wrap">
              <div id="cftb-target" class="cftb-item" data-bin="${e.id}">
                <div class="cftb-item-frame" style="border-color:${e.color}">
                  <img class="img-fit" src="${e.img}" alt="Lixeira ${e.title}" />
                </div>
                <div class="cftb-item-name">${e.title}</div>
              </div>
            </div>

            <!-- LADO DIREITO: 2 opções -->
            <div class="cftb-bins">
              ${a.slice(2).map(t=>`
                <button class="cftb-option" data-correct="${String(t===s)}" aria-label="${t.name}">
                  <div class="cftb-option-frame">
                    <img class="img-fit" src="${t.img}" alt="${t.name}" />
                  </div>
                  <span class="cftb-option-title">${t.name}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      `,Array.from(o.querySelectorAll(".cftb-option")).forEach(t=>{t.addEventListener("click",()=>{if(p)return;const L=t.dataset.correct==="true";I(L,t)})})}function I(e,r){if(p)return;p=!0,Array.from(document.querySelectorAll(".cftb-option")).forEach(a=>{const m=a.dataset.correct==="true";a.classList.toggle("is-correct",m),a.classList.toggle("is-wrong",!m&&a===r),a.disabled=!0}),e&&g++;const s=document.createElement("button");s.className="btn cftb-next";const f=d>=c.length-1;s.innerHTML=`
    ${f?"FINALIZAR":"PRÓXIMA"}
    <i class="fa-sharp-duotone fa-circle-right"
       style="margin-left:.35rem;"></i>
  `,s.addEventListener("click",y),document.getElementById("cftb-stage")?.appendChild(s)}function y(){d++,d<c.length?h():T()}function T(){const e=Math.round(g/c.length*100),r=e>=80?"PARABÉNS! 🌟":e>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪",l=document.getElementById("cftb-stage");l.innerHTML=`
        <div class="cftb-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${r}</h3>
          <p>SUA PONTUAÇÃO: <strong>${e}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${g}</strong> DE <strong>${c.length}</strong>.</p>
          <div class="cftb-end-actions">
            <button id="cftb-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,l.querySelector("#cftb-retry").addEventListener("click",v)}v()}};export{_ as ChooseForTrashbinGame};
