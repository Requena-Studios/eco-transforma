import{j as C,p as V,r as D,g as N,s as q,i as B,l as U,a as j,c as w,b as G,d as k,e as F}from"./sacola-BO_g5ryX.js";import{l as H,a as J,b as X,c as Q}from"./lixeira-metal-D2-mSb9Q.js";const h=10,$=[{id:"papel",title:"PAPEL",color:"#3087b2",img:H},{id:"plastico",title:"PLÁSTICO",color:"#cd3623",img:J},{id:"metal",title:"METAL",color:"#e8ae29",img:X},{id:"vidro",title:"VIDRO",color:"#488f2e",img:Q}],p=[{name:"JORNAL",type:"papel",img:C},{name:"CAIXA DE PAPELÃO",type:"papel",img:V},{name:"REVISTA",type:"papel",img:D},{name:"GARRAFA PET",type:"plastico",img:N},{name:"SACO PLÁSTICO",type:"plastico",img:q},{name:"POTE DE IOGURTE",type:"plastico",img:B},{name:"LATA DE REFRI",type:"metal",img:U},{name:"PAPEL ALUMÍNIO",type:"metal",img:j},{name:"CLIPES",type:"metal",img:w},{name:"POTE DE VIDRO",type:"vidro",img:G},{name:"GARRAFA DE VIDRO",type:"vidro",img:k},{name:"COPO DE VIDRO",type:"vidro",img:F}];function L(l){const a=l.slice();for(let r=a.length-1;r>0;r--){const E=Math.floor(Math.random()*(r+1));[a[r],a[E]]=[a[E],a[r]]}return a}function R(l,a){return L(l).slice(0,a)}const _={async mount(l){l.innerHTML=`
      <div class="ootb-wrap shout">
        <header class="ootb-hd">
          <i class="fa-sharp-duotone fa-recycle"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
          <h3>TOQUE NA LIXEIRA CERTA</h3>
          <div class="ootb-progress">
            <span id="ootb-pos">1</span>/<span id="ootb-total">${h}</span>
          </div>
        </header>

        <div id="ootb-stage" class="ootb-stage"></div>

        <footer class="ootb-ft">
          <button id="ootb-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
               style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const a=l.querySelector("#ootb-stage"),r=l.querySelector("#ootb-pos");l.querySelector("#ootb-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let c=[],d=0,b=0,u=!1;function S(){const o={papel:p.filter(e=>e.type==="papel"),plastico:p.filter(e=>e.type==="plastico"),metal:p.filter(e=>e.type==="metal"),vidro:p.filter(e=>e.type==="vidro")},i=["papel","plastico","metal","vidro"],n=L(i),t=Math.floor(h/i.length),y=h%i.length,g={papel:t,plastico:t,metal:t,vidro:t};for(let e=0;e<y;e++)g[n[e]]++;const f=new Set;let s=[];for(const e of i){const A=Math.min(g[e],o[e].length),I=R(o[e],A);for(const O of I)f.has(O)||(f.add(O),s.push(O))}const m=Math.min(h,p.length);if(s.length<m){const e=p.filter(I=>!f.has(I)),A=R(e,Math.min(e.length,m-s.length));s=s.concat(A)}const v=l.querySelector("#ootb-total");v&&(v.textContent=String(m)),c=L(s).slice(0,m),d=0,b=0,T()}function T(){const o=c[d];r.textContent=String(d+1),u=!1,a.innerHTML=`
        <div class="ootb-q">
          <p class="ootb-instr">Em qual lixeira vai o objeto?</p>

          <div class="ootb-items-container">
            <div class="ootb-bins">
              ${$.slice(0,2).map(t=>`
                <button class="ootb-bin" data-bin="${t.id}" aria-label="${t.title}" style="--bin-color:${t.color}">
                  <div class="ootb-bin-frame">
                    <img class="img-fit" src="${t.img}" alt="Lixeira ${t.title}" />
                  </div>
                  <span class="ootb-bin-title">${t.title}</span>
                </button>
              `).join("")}
            </div>

            <div class="ootb-item-wrap">
              <div id="ootb-item" class="ootb-item" data-type="${o.type}">
                <div class="ootb-item-frame">
                  <img class="img-fit" src="${o.img}" alt="${o.name}" />
                </div>
                <div class="ootb-item-name">${o.name}</div>
              </div>
            </div>

            <div class="ootb-bins">
              ${$.slice(-2).map(t=>`
                <button class="ootb-bin" data-bin="${t.id}" aria-label="${t.title}" style="--bin-color:${t.color}">
                  <div class="ootb-bin-frame">
                    <img class="img-fit" src="${t.img}" alt="Lixeira ${t.title}" />
                  </div>
                  <span class="ootb-bin-title">${t.title}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      `;const i=a.querySelector("#ootb-item");Array.from(a.querySelectorAll(".ootb-bin")).forEach(t=>{t.addEventListener("click",()=>{u||x(t.dataset.bin,i.dataset.type)})})}function x(o,i){if(u)return;u=!0;const n=o===i,t=document.getElementById("ootb-item"),y=document.querySelector(`.ootb-bin[data-bin="${o}"]`),g=document.querySelector(`.ootb-bin[data-bin="${i}"]`),f=Array.from(document.querySelectorAll(".ootb-bin"));t&&t.classList.add(n?"is-correct":"is-wrong"),y&&y.classList.add(n?"is-correct":"is-wrong"),!n&&g&&g.classList.add("is-correct"),f.forEach(e=>e.disabled=!0),n&&b++;const s=document.createElement("button");s.className="btn ootb-next";const m=d>=c.length-1;s.innerHTML=`
        ${m?"FINALIZAR":"PRÓXIMA"}
        <i class="fa-sharp-duotone fa-circle-right"
           style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-left:.35rem;"></i>
      `,s.addEventListener("click",P),document.getElementById("ootb-stage")?.appendChild(s)}function P(){d++,d<c.length?T():M()}function M(){const o=Math.round(b/c.length*100),i=o>=80?"PARABÉNS! 🌟":o>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪",n=document.getElementById("ootb-stage");n.innerHTML=`
        <div class="ootb-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${i}</h3>
          <p>SUA PONTUAÇÃO: <strong>${o}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${b}</strong> DE <strong>${c.length}</strong>.</p>
          <div class="ootb-end-actions">
            <button id="ootb-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,n.querySelector("#ootb-retry").addEventListener("click",S)}S()}};export{_ as OddOneOutTrashbinGame};
