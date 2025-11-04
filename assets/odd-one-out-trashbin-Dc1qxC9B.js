import{v as B,a as I,b as w}from"./index-Sl71wBq0.js";const y=10,C="/eco-transforma/data/assets.json",T=i=>i?`/eco-transforma/img/${i}`:"";async function j(){const s=await(await fetch(C,{cache:"no-cache"})).json();return s.items=s.items.map(o=>({...o,img:T(o.img)})),s.bins=s.bins.map(o=>({...o,img:o.img?T(o.img):void 0})),s}function S(i){const s=i.slice();for(let o=s.length-1;o>0;o--){const l=Math.floor(Math.random()*(o+1));[s[o],s[l]]=[s[l],s[o]]}return s}function x(i,s){return S(i).slice(0,s)}const D={async mount(i){const{bins:s,items:o}=await j();i.innerHTML=`
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
    `;const l=i.querySelector("#ootb-stage"),M=i.querySelector("#ootb-pos");i.querySelector("#ootb-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let d=[],m=0,f=0,h=!1;function O(){const n={papel:o.filter(t=>t.type==="papel"),plastico:o.filter(t=>t.type==="plastico"),metal:o.filter(t=>t.type==="metal"),vidro:o.filter(t=>t.type==="vidro"),organico:o.filter(t=>t.type==="organico")},a=["papel","plastico","metal","vidro","organico"],c=S(a),e=Math.floor(y/a.length),v=y%a.length,u=a.reduce((t,g)=>(t[g]=e,t),{});for(let t=0;t<v;t++)u[c[t]]++;const p=new Set;let r=[];for(const t of a){const g=Math.min(u[t],n[t].length),$=x(n[t],g);for(const A of $)p.has(A.name)||(p.add(A.name),r.push(A))}const b=Math.min(y,o.length);if(r.length<b){const t=o.filter($=>!p.has($.name)),g=x(t,Math.min(t.length,b-r.length));r=r.concat(g)}const E=i.querySelector("#ootb-total");E&&(E.textContent=String(b)),d=S(r).slice(0,b),m=0,f=0,L()}function L(){const n=d[m];M.textContent=String(m+1),h=!1,l.innerHTML=`
        <div class="ootb-q">
          <p class="ootb-instr">Em qual lixeira vai o objeto?</p>

          <div class="ootb-items-container">
            <div class="ootb-bins">
              ${s.slice(0,3).map(e=>`
                <button class="ootb-bin" data-bin="${e.id}" aria-label="${e.title}" style="--bin-color:${e.color}">
                  <div class="ootb-bin-frame">
                    <img class="img-fit" src="${e.img}" alt="Lixeira ${e.title}" />
                  </div>
                  <span class="ootb-bin-title">${e.title}</span>
                </button>
              `).join("")}
            </div>

            <div class="ootb-item-wrap">
              <div id="ootb-item" class="ootb-item" data-type="${n.type}">
                <div class="ootb-item-frame">
                  <img class="img-fit" src="${n.img}" alt="${n.name}" />
                </div>
                <div class="ootb-item-name">${n.name}</div>
              </div>
            </div>

            <div class="ootb-bins">
              ${s.slice(-2).map(e=>`
                <button class="ootb-bin" data-bin="${e.id}" aria-label="${e.title}" style="--bin-color:${e.color}">
                  <div class="ootb-bin-frame">
                    <img class="img-fit" src="${e.img}" alt="Lixeira ${e.title}" />
                  </div>
                  <span class="ootb-bin-title">${e.title}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      `;const a=l.querySelector("#ootb-item");Array.from(l.querySelectorAll(".ootb-bin")).forEach(e=>{e.addEventListener("click",()=>{h||N(e.dataset.bin,a.dataset.type)})})}function N(n,a){if(h)return;h=!0;const c=n===a;c?B():I();const e=document.getElementById("ootb-item"),v=document.querySelector(`.ootb-bin[data-bin="${n}"]`),u=document.querySelector(`.ootb-bin[data-bin="${a}"]`),p=Array.from(document.querySelectorAll(".ootb-bin"));e&&e.classList.add(c?"is-correct":"is-wrong"),v&&v.classList.add(c?"is-correct":"is-wrong"),!c&&u&&u.classList.add("is-correct"),p.forEach(t=>t.disabled=!0),c&&f++;const r=document.createElement("button");r.className="btn ootb-next";const b=m>=d.length-1;r.innerHTML=`
        ${b?"FINALIZAR":"PRÓXIMA"}
        <i class="fa-sharp-duotone fa-circle-right" style="margin-left:.35rem;"></i>
      `,r.addEventListener("click",q),document.getElementById("ootb-stage")?.appendChild(r)}function q(){m++,m<d.length?L():R()}function R(){const n=Math.round(f/d.length*100),a=n>=80?"PARABÉNS! 🌟":n>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪",c=f*10;w("odd-one-out-trashbin",c,!0);const e=document.getElementById("ootb-stage");e.innerHTML=`
        <div class="ootb-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${a}</h3>
          <p>SUA PONTUAÇÃO: <strong>${n}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${f}</strong> DE <strong>${d.length}</strong>.</p>
          <p class="points-earned">+${c} PONTOS 🌟</p>
          <div class="ootb-end-actions">
            <button id="ootb-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right" style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,e.querySelector("#ootb-retry").addEventListener("click",O)}O()}};export{D as OddOneOutTrashbinGame};
