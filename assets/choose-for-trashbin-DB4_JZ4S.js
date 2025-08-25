import{j as R,p as S,r as P,g as $,s as x,i as D,l as M,a as C,c as N,b as V,d as U,e as q}from"./sacola-BO_g5ryX.js";import{l as B,a as j,b as w,c as k}from"./lixeira-metal-D2-mSb9Q.js";const E=10,G=4,h=[{id:"papel",title:"PAPEL",color:"#3087b2",img:B},{id:"plastico",title:"PLÁSTICO",color:"#cd3623",img:j},{id:"metal",title:"METAL",color:"#e8ae29",img:w},{id:"vidro",title:"VIDRO",color:"#488f2e",img:k}],O=[{name:"JORNAL",type:"papel",img:R},{name:"CAIXA DE PAPELÃO",type:"papel",img:S},{name:"REVISTA",type:"papel",img:P},{name:"GARRAFA PET",type:"plastico",img:$},{name:"SACO PLÁSTICO",type:"plastico",img:x},{name:"POTE DE IOGURTE",type:"plastico",img:D},{name:"LATA DE REFRI",type:"metal",img:M},{name:"PAPEL ALUMÍNIO",type:"metal",img:C},{name:"CLIPES",type:"metal",img:N},{name:"POTE DE VIDRO",type:"vidro",img:V},{name:"GARRAFA DE VIDRO",type:"vidro",img:U},{name:"COPO DE VIDRO",type:"vidro",img:q}];function b(i){const o=i.slice();for(let n=o.length-1;n>0;n--){const u=Math.floor(Math.random()*(n+1));[o[n],o[u]]=[o[u],o[n]]}return o}function F(i,o){return b(i).slice(0,o)}function H(i){return i[Math.floor(Math.random()*i.length)]}const _={async mount(i){i.innerHTML=`
      <div class="cftb-wrap shout">
        <header class="cftb-hd">
          <i class="fa-sharp-duotone fa-recycle"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
          <h3>TOQUE NO OBJETO CERTO</h3>
          <div class="cftb-progress">
            <span id="cftb-pos">1</span>/<span id="cftb-total">${E}</span>
          </div>
        </header>

        <div id="cftb-stage" class="cftb-stage"></div>

        <footer class="cftb-ft">
          <button id="cftb-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
               style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const o=i.querySelector("#cftb-stage"),n=i.querySelector("#cftb-pos");i.querySelector("#cftb-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let c=[],f=0,g=0,p=!1;function y(){const e=["papel","plastico","metal","vidro"],r=Math.floor(E/e.length),l=E%e.length,s=[],m=b(e);for(const a of e){const d=h.find(t=>t.id===a);for(let t=0;t<r;t++)s.push(d)}for(let a=0;a<l;a++){const d=h.find(t=>t.id===m[a]);s.push(d)}c=b(s),f=0,g=0,i.querySelector("#cftb-total").textContent=String(c.length),v()}function v(){const e=c[f];n.textContent=String(f+1),p=!1;const r=O.filter(t=>t.type===e.id),l=O.filter(t=>t.type!==e.id),s=H(r),m=F(l,Math.max(0,G-1)),a=b([s,...m]);o.innerHTML=`
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
      `,Array.from(o.querySelectorAll(".cftb-option")).forEach(t=>{t.addEventListener("click",()=>{if(p)return;const L=t.dataset.correct==="true";A(L,t)})})}function A(e,r){if(p)return;p=!0,Array.from(document.querySelectorAll(".cftb-option")).forEach(a=>{const d=a.dataset.correct==="true";a.classList.toggle("is-correct",d),a.classList.toggle("is-wrong",!d&&a===r),a.disabled=!0}),e&&g++;const s=document.createElement("button");s.className="btn cftb-next";const m=f>=c.length-1;s.innerHTML=`
    ${m?"FINALIZAR":"PRÓXIMA"}
    <i class="fa-sharp-duotone fa-circle-right"
       style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-left:.35rem;"></i>
  `,s.addEventListener("click",I),document.getElementById("cftb-stage")?.appendChild(s)}function I(){f++,f<c.length?v():T()}function T(){const e=Math.round(g/c.length*100),r=e>=80?"PARABÉNS! 🌟":e>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪",l=document.getElementById("cftb-stage");l.innerHTML=`
        <div class="cftb-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${r}</h3>
          <p>SUA PONTUAÇÃO: <strong>${e}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${g}</strong> DE <strong>${c.length}</strong>.</p>
          <div class="cftb-end-actions">
            <button id="cftb-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,l.querySelector("#cftb-retry").addEventListener("click",y)}y()}};export{_ as ChooseForTrashbinGame};
