const R="/eco-transforma/data/assets.json",O=n=>n?`/eco-transforma/img/${n}`:"";async function B(){const s=await(await fetch(R,{cache:"no-cache"})).json();return s.items=s.items.map(e=>({...e,img:O(e.img)})),s.bins=s.bins.map(e=>({...e,img:e.img?O(e.img):void 0})),s}function A(n){const s=n.slice();for(let e=s.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[s[e],s[r]]=[s[r],s[e]]}return s}function S(n,s){return A(n).slice(0,s)}const w={async mount(n){const{bins:s,items:e}=await B();n.innerHTML=`
      <div class="ootb-wrap shout">
        <header class="ootb-hd">
          <i class="fa-sharp-duotone fa-recycle"></i>
          <h3>TOQUE NA LIXEIRA CERTA</h3>
          <div class="ootb-progress">
            <span id="ootb-pos">1</span>/<span id="ootb-total">10</span>
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
    `;const r=n.querySelector("#ootb-stage"),x=n.querySelector("#ootb-pos");n.querySelector("#ootb-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let d=[],m=0,p=0,h=!1;function T(){const i={papel:e.filter(o=>o.type==="papel"),plastico:e.filter(o=>o.type==="plastico"),metal:e.filter(o=>o.type==="metal"),vidro:e.filter(o=>o.type==="vidro"),organico:e.filter(o=>o.type==="organico")},a=["papel","plastico","metal","vidro","organico"],l=A(a),t=Math.floor(10/a.length),v=10%a.length,f=a.reduce((o,g)=>(o[g]=t,o),{});for(let o=0;o<v;o++)f[l[o]]++;const u=new Set;let c=[];for(const o of a){const g=Math.min(f[o],i[o].length),$=S(i[o],g);for(const E of $)u.has(E.name)||(u.add(E.name),c.push(E))}const b=Math.min(10,e.length);if(c.length<b){const o=e.filter($=>!u.has($.name)),g=S(o,Math.min(o.length,b-c.length));c=c.concat(g)}const y=n.querySelector("#ootb-total");y&&(y.textContent=String(b)),d=A(c).slice(0,b),m=0,p=0,L()}function L(){const i=d[m];x.textContent=String(m+1),h=!1,r.innerHTML=`
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
      `;const a=r.querySelector("#ootb-item");Array.from(r.querySelectorAll(".ootb-bin")).forEach(t=>{t.addEventListener("click",()=>{h||M(t.dataset.bin,a.dataset.type)})})}function M(i,a){if(h)return;h=!0;const l=i===a,t=document.getElementById("ootb-item"),v=document.querySelector(`.ootb-bin[data-bin="${i}"]`),f=document.querySelector(`.ootb-bin[data-bin="${a}"]`),u=Array.from(document.querySelectorAll(".ootb-bin"));t&&t.classList.add(l?"is-correct":"is-wrong"),v&&v.classList.add(l?"is-correct":"is-wrong"),!l&&f&&f.classList.add("is-correct"),u.forEach(o=>o.disabled=!0),l&&p++;const c=document.createElement("button");c.className="btn ootb-next";const b=m>=d.length-1;c.innerHTML=`
        ${b?"FINALIZAR":"PRÓXIMA"}
        <i class="fa-sharp-duotone fa-circle-right" style="margin-left:.35rem;"></i>
      `,c.addEventListener("click",q),document.getElementById("ootb-stage")?.appendChild(c)}function q(){m++,m<d.length?L():N()}function N(){const i=Math.round(p/d.length*100),a=i>=80?"PARABÉNS! 🌟":i>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪",l=document.getElementById("ootb-stage");l.innerHTML=`
        <div class="ootb-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${a}</h3>
          <p>SUA PONTUAÇÃO: <strong>${i}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${p}</strong> DE <strong>${d.length}</strong>.</p>
          <div class="ootb-end-actions">
            <button id="ootb-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right" style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,l.querySelector("#ootb-retry").addEventListener("click",T)}T()}};export{w as OddOneOutTrashbinGame};
