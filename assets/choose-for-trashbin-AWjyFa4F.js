import{v as N,a as I,b as w}from"./index-BU9KMsL8.js";const E=10,q=4,B="/eco-transforma/data/assets.json",$=a=>a?`/eco-transforma/img/${a}`:"";async function C(){const n=await(await fetch(B,{cache:"no-cache"})).json();return n.items=n.items.map(c=>({...c,img:$(c.img)})),n.bins=n.bins.map(c=>({...c,img:c.img?$(c.img):void 0})),n}function v(a){const n=a.slice();for(let c=n.length-1;c>0;c--){const g=Math.floor(Math.random()*(c+1));[n[c],n[g]]=[n[g],n[c]]}return n}function A(a,n){return v(a).slice(0,n)}function D(a){return a[Math.floor(Math.random()*a.length)]}const j={async mount(a){const{bins:n,items:c}=await C();a.innerHTML=`
      <div class="cftb-wrap shout">
        <header class="cftb-hd">
          <i class="fa-sharp-duotone fa-recycle"></i>
          <h3>TOQUE NO OBJETO CERTO</h3>
          <div class="cftb-progress">
            <span id="cftb-pos">1</span>/<span id="cftb-total">${E}</span>
          </div>
        </header>

        <div id="cftb-stage" class="cftb-stage"></div>

        <footer class="cftb-ft">
          <button id="cftb-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const g=a.querySelector("#cftb-stage"),S=a.querySelector("#cftb-pos");a.querySelector("#cftb-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let m=[],u=0,b=0,p=!1;const h=new Set;function T(t,f){const i=[],s=Math.min(f,t.length),l=t.filter(r=>!h.has(r.name)),o=A(l,Math.min(s,l.length));if(i.push(...o),i.length<s){const r=t.filter(e=>!i.includes(e)),d=A(r,s-i.length);i.push(...d)}return i.forEach(r=>h.add(r.name)),i}function O(){h.clear();const t=["papel","plastico","metal","vidro","organico"],f=Math.floor(E/t.length),i=E%t.length,s=[],l=v(t);for(const o of t){const r=n.find(d=>d.id===o);for(let d=0;d<f;d++)s.push(r)}for(let o=0;o<i;o++){const r=n.find(d=>d.id===l[o]);s.push(r)}m=v(s),u=0,b=0,a.querySelector("#cftb-total").textContent=String(m.length),y()}function y(){const t=m[u];S.textContent=String(u+1),p=!1;const f=c.filter(e=>e.type===t.id),i=c.filter(e=>e.type!==t.id),s=f.filter(e=>!h.has(e.name)),l=D(s.length?s:f);h.add(l.name);const o=T(i,Math.max(0,q-1)),r=v([l,...o]);g.innerHTML=`
        <div class="cftb-q">
          <p class="cftb-instr">Qual objeto vai na lixeira?</p>

          <div class="cftb-items-container">
            <!-- LADO ESQUERDO: 2 opções -->
            <div class="cftb-bins">
              ${r.slice(0,2).map(e=>`
                <button class="cftb-option" data-correct="${String(e===l)}" aria-label="${e.name}">
                  <div class="cftb-option-frame">
                    <img class="img-fit" src="${e.img}" alt="${e.name}" />
                  </div>
                  <span class="cftb-option-title">${e.name}</span>
                </button>
              `).join("")}
            </div>

            <!-- CENTRO: Lixeira alvo -->
            <div class="cftb-item-wrap">
              <div id="cftb-target" class="cftb-item" data-bin="${t.id}">
                <div class="cftb-item-frame" style="border-color:${t.color}">
                  <img class="img-fit" src="${t.img}" alt="Lixeira ${t.title}" />
                </div>
                <div class="cftb-item-name">${t.title}</div>
              </div>
            </div>

            <!-- LADO DIREITO: 2 opções -->
            <div class="cftb-bins">
              ${r.slice(2).map(e=>`
                <button class="cftb-option" data-correct="${String(e===l)}" aria-label="${e.name}">
                  <div class="cftb-option-frame">
                    <img class="img-fit" src="${e.img}" alt="${e.name}" />
                  </div>
                  <span class="cftb-option-title">${e.name}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      `,Array.from(g.querySelectorAll(".cftb-option")).forEach(e=>{e.addEventListener("click",()=>{if(p)return;const R=e.dataset.correct==="true";L(R,e)})})}function L(t,f){if(p)return;p=!0,t?N():I(),Array.from(document.querySelectorAll(".cftb-option")).forEach(o=>{const r=o.dataset.correct==="true";o.classList.toggle("is-correct",r),o.classList.toggle("is-wrong",!r&&o===f),o.disabled=!0}),t&&b++;const s=document.createElement("button");s.className="btn cftb-next";const l=u>=m.length-1;s.innerHTML=`
        ${l?"FINALIZAR":"PRÓXIMA"}
        <i class="fa-sharp-duotone fa-circle-right" style="margin-left:.35rem;"></i>
      `,s.addEventListener("click",M),document.getElementById("cftb-stage")?.appendChild(s)}function M(){u++,u<m.length?y():x()}function x(){const t=Math.round(b/m.length*100),f=t>=80?"PARABÉNS! 🌟":t>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪",i=b*10;w("choose-for-trashbin",i,!0);const s=document.getElementById("cftb-stage");s.innerHTML=`
        <div class="cftb-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${f}</h3>
          <p>SUA PONTUAÇÃO: <strong>${t}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${b}</strong> DE <strong>${m.length}</strong>.</p>
          <p class="points-earned">+${i} PONTOS 🌟</p>
          <div class="cftb-end-actions">
            <button id="cftb-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right" style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,s.querySelector("#cftb-retry").addEventListener("click",O)}O()}};export{j as ChooseForTrashbinGame};
