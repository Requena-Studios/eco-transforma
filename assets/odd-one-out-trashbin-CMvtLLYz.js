import{v as B,a as I,b as w}from"./index-DI1wondn.js";const y=10,C="/eco-transforma/data/assets.json",T=n=>n?`/eco-transforma/img/${n}`:"";async function j(){const s=await(await fetch(C,{cache:"no-cache"})).json();return s.items=s.items.map(e=>({...e,img:T(e.img)})),s.bins=s.bins.map(e=>({...e,img:e.img?T(e.img):void 0})),s}function S(n){const s=n.slice();for(let e=s.length-1;e>0;e--){const l=Math.floor(Math.random()*(e+1));[s[e],s[l]]=[s[l],s[e]]}return s}function x(n,s){return S(n).slice(0,s)}const D={async mount(n){const{bins:s,items:e}=await j();n.innerHTML=`
      <div class="ootb-wrap shout">
        <header class="ootb-hd">
          <i class="fa-sharp-duotone fa-recycle"></i>
          <h3>TOQUE NA LIXEIRA CERTA</h3>
          <div class="ootb-progress">
            <span id="ootb-pos">1</span>/<span id="ootb-total">${y}</span>
          </div>
        </header>

        <div id="ootb-stage" class="ootb-stage"></div>

        <footer class="ootb-ft">
          <button id="ootb-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const l=n.querySelector("#ootb-stage"),M=n.querySelector("#ootb-pos");n.querySelector("#ootb-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let d=[],m=0,f=0,h=!1;function L(){const i={papel:e.filter(o=>o.type==="papel"),plastico:e.filter(o=>o.type==="plastico"),metal:e.filter(o=>o.type==="metal"),vidro:e.filter(o=>o.type==="vidro"),organico:e.filter(o=>o.type==="organico")},a=["papel","plastico","metal","vidro","organico"],c=S(a),t=Math.floor(y/a.length),v=y%a.length,u=a.reduce((o,g)=>(o[g]=t,o),{});for(let o=0;o<v;o++)u[c[o]]++;const p=new Set;let r=[];for(const o of a){const g=Math.min(u[o],i[o].length),E=x(i[o],g);for(const A of E)p.has(A.name)||(p.add(A.name),r.push(A))}const b=Math.min(y,e.length);if(r.length<b){const o=e.filter(E=>!p.has(E.name)),g=x(o,Math.min(o.length,b-r.length));r=r.concat(g)}const $=n.querySelector("#ootb-total");$&&($.textContent=String(b)),d=S(r).slice(0,b),m=0,f=0,O()}function O(){const i=d[m];M.textContent=String(m+1),h=!1,l.innerHTML=`
        <div class="ootb-q">
          <p class="ootb-instr">Em qual lixeira vai o objeto?</p>

          <div class="ootb-items-container">
            <div class="ootb-bins">
              ${s.slice(0,2).map(t=>`
                <button class="ootb-bin" data-bin="${t.id}" aria-label="${t.title}" style="--bin-color:${t.color}">
                  <div class="ootb-bin-frame">
                    <img class="img-fit" src="${t.img}" alt="Lixeira ${t.title}" />
                  </div>
                  <span class="ootb-bin-title">${t.title}</span>
                </button>
              `).join("")}
            </div>

            <div class="ootb-item-wrap">
              <div id="ootb-item" class="ootb-item" data-type="${i.type}">
                <div class="ootb-item-frame">
                  <img class="img-fit" src="${i.img}" alt="${i.name}" />
                </div>
                <div class="ootb-item-name">${i.name}</div>
              </div>

              ${s.slice(2,3).map(t=>`
                <button class="ootb-bin" data-bin="${t.id}" aria-label="${t.title}" style="--bin-color:${t.color}">
                  <div class="ootb-bin-frame">
                    <img class="img-fit" src="${t.img}" alt="Lixeira ${t.title}" />
                  </div>
                  <span class="ootb-bin-title">${t.title}</span>
                </button>
              `).join("")}
            </div>

            <div class="ootb-bins">
              ${s.slice(-2).map(t=>`
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
      `;const a=l.querySelector("#ootb-item");Array.from(l.querySelectorAll(".ootb-bin")).forEach(t=>{t.addEventListener("click",()=>{h||N(t.dataset.bin,a.dataset.type)})})}function N(i,a){if(h)return;h=!0;const c=i===a;c?B():I();const t=document.getElementById("ootb-item"),v=document.querySelector(`.ootb-bin[data-bin="${i}"]`),u=document.querySelector(`.ootb-bin[data-bin="${a}"]`),p=Array.from(document.querySelectorAll(".ootb-bin"));t&&t.classList.add(c?"is-correct":"is-wrong"),v&&v.classList.add(c?"is-correct":"is-wrong"),!c&&u&&u.classList.add("is-correct"),p.forEach(o=>o.disabled=!0),c&&f++;const r=document.createElement("button");r.className="btn ootb-next";const b=m>=d.length-1;r.innerHTML=`
        ${b?"FINALIZAR":"PRÓXIMA"}
        <i class="fa-sharp-duotone fa-circle-right" style="margin-left:.35rem;"></i>
      `,r.addEventListener("click",q),document.getElementById("ootb-stage")?.appendChild(r)}function q(){m++,m<d.length?O():R()}function R(){const i=Math.round(f/d.length*100),a=i>=80?"PARABÉNS! 🌟":i>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪",c=f*10;w("odd-one-out-trashbin",c,!0);const t=document.getElementById("ootb-stage");t.innerHTML=`
        <div class="ootb-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${a}</h3>
          <p>SUA PONTUAÇÃO: <strong>${i}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${f}</strong> DE <strong>${d.length}</strong>.</p>
          <p class="points-earned">+${c} PONTOS 🌟</p>
          <div class="ootb-end-actions">
            <button id="ootb-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right" style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,t.querySelector("#ootb-retry").addEventListener("click",L)}L()}};export{D as OddOneOutTrashbinGame};
