const x="/eco-transforma/data/assets.json",T=s=>s?`/eco-transforma/img/${s}`:"";async function N(){const n=await(await fetch(x,{cache:"no-cache"})).json();return n.items=n.items.map(c=>({...c,img:T(c.img)})),n.bins=n.bins.map(c=>({...c,img:c.img?T(c.img):void 0})),n}function v(s){const n=s.slice();for(let c=n.length-1;c>0;c--){const g=Math.floor(Math.random()*(c+1));[n[c],n[g]]=[n[g],n[c]]}return n}function A(s,n){return v(s).slice(0,n)}function I(s){return s[Math.floor(Math.random()*s.length)]}const C={async mount(s){const{bins:n,items:c}=await N();s.innerHTML=`
      <div class="cftb-wrap shout">
        <header class="cftb-hd">
          <i class="fa-sharp-duotone fa-recycle"></i>
          <h3>TOQUE NO OBJETO CERTO</h3>
          <div class="cftb-progress">
            <span id="cftb-pos">1</span>/<span id="cftb-total">10</span>
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
    `;const g=s.querySelector("#cftb-stage"),y=s.querySelector("#cftb-pos");s.querySelector("#cftb-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let m=[],u=0,h=0,p=!1;const b=new Set;function $(e,f){const i=[],a=Math.min(f,e.length),l=e.filter(r=>!b.has(r.name)),o=A(l,Math.min(a,l.length));if(i.push(...o),i.length<a){const r=e.filter(t=>!i.includes(t)),d=A(r,a-i.length);i.push(...d)}return i.forEach(r=>b.add(r.name)),i}function O(){b.clear();const e=["papel","plastico","metal","vidro","organico"],f=Math.floor(10/e.length),i=10%e.length,a=[],l=v(e);for(const o of e){const r=n.find(d=>d.id===o);for(let d=0;d<f;d++)a.push(r)}for(let o=0;o<i;o++){const r=n.find(d=>d.id===l[o]);a.push(r)}m=v(a),u=0,h=0,s.querySelector("#cftb-total").textContent=String(m.length),E()}function E(){const e=m[u];y.textContent=String(u+1),p=!1;const f=c.filter(t=>t.type===e.id),i=c.filter(t=>t.type!==e.id),a=f.filter(t=>!b.has(t.name)),l=I(a.length?a:f);b.add(l.name);const o=$(i,Math.max(0,3)),r=v([l,...o]);g.innerHTML=`
        <div class="cftb-q">
          <p class="cftb-instr">Qual objeto vai na lixeira?</p>

          <div class="cftb-items-container">
            <!-- LADO ESQUERDO: 2 opções -->
            <div class="cftb-bins">
              ${r.slice(0,2).map(t=>`
                <button class="cftb-option" data-correct="${String(t===l)}" aria-label="${t.name}">
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
              ${r.slice(2).map(t=>`
                <button class="cftb-option" data-correct="${String(t===l)}" aria-label="${t.name}">
                  <div class="cftb-option-frame">
                    <img class="img-fit" src="${t.img}" alt="${t.name}" />
                  </div>
                  <span class="cftb-option-title">${t.name}</span>
                </button>
              `).join("")}
            </div>
          </div>
        </div>
      `,Array.from(g.querySelectorAll(".cftb-option")).forEach(t=>{t.addEventListener("click",()=>{if(p)return;const M=t.dataset.correct==="true";L(M,t)})})}function L(e,f){if(p)return;p=!0,Array.from(document.querySelectorAll(".cftb-option")).forEach(o=>{const r=o.dataset.correct==="true";o.classList.toggle("is-correct",r),o.classList.toggle("is-wrong",!r&&o===f),o.disabled=!0}),e&&h++;const a=document.createElement("button");a.className="btn cftb-next";const l=u>=m.length-1;a.innerHTML=`
        ${l?"FINALIZAR":"PRÓXIMA"}
        <i class="fa-sharp-duotone fa-circle-right" style="margin-left:.35rem;"></i>
      `,a.addEventListener("click",S),document.getElementById("cftb-stage")?.appendChild(a)}function S(){u++,u<m.length?E():R()}function R(){const e=Math.round(h/m.length*100),f=e>=80?"PARABÉNS! 🌟":e>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪",i=document.getElementById("cftb-stage");i.innerHTML=`
        <div class="cftb-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${f}</h3>
          <p>SUA PONTUAÇÃO: <strong>${e}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${h}</strong> DE <strong>${m.length}</strong>.</p>
          <div class="cftb-end-actions">
            <button id="cftb-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right" style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,i.querySelector("#cftb-retry").addEventListener("click",O)}O()}};export{C as ChooseForTrashbinGame};
