const q="/eco-transforma/data/assets.json",U=n=>n?`/eco-transforma/img/${n}`:"";async function P(){const t=await(await fetch(q,{cache:"no-cache"})).json();return t.items=t.items.map(a=>({...a,img:U(a.img)})),t.bins=t.bins.map(a=>({...a,img:a.img?U(a.img):void 0})),t}function S(n){const t=n.slice();for(let a=t.length-1;a>0;a--){const A=Math.floor(Math.random()*(a+1));[t[a],t[A]]=[t[A],t[a]]}return t}function $(n,t){return S(n).slice(0,t)}const m=8,j={async mount(n){n.innerHTML=`
      <div class="mm-wrap shout">
        <header class="mm-hd">
          <i class="fa-sharp-duotone fa-cards"></i>
          <h3>MEMÓRIA: ITENS E LIXEIRAS</h3>
          <div class="mm-progress">
            <span id="mm-found">0</span>/<span id="mm-total">${m}</span>
          </div>
        </header>

        <div id="mm-stage" class="mm-stage"></div>

        <footer class="mm-ft">
          <button id="mm-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const t=n.querySelector("#mm-stage"),a=n.querySelector("#mm-found");n.querySelector("#mm-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));const O=await P(),d=O.items,T=O.bins.reduce((e,i)=>(e[i.id]=i.color,e),{});let f=[],p=null,u=null,v=!1,E=0,M=0,x=0;function w(){const e={papel:d.filter(o=>o.type==="papel"),plastico:d.filter(o=>o.type==="plastico"),metal:d.filter(o=>o.type==="metal"),vidro:d.filter(o=>o.type==="vidro"),organico:d.filter(o=>o.type==="organico")},i=["papel","plastico","metal","vidro","organico"],c=[];for(;c.length<m;)c.push(...S(i));const r=c.slice(0,m),h=new Set,R=[];let k=0;for(const o of r){const g=e[o];if(g.length===0)continue;let y=[];const l=g.filter(s=>!h.has(s.name));if(l.length>=2)y=$(l,2);else if(l.length===1){const s=g.filter(D=>D.name!==l[0].name),C=$(s.length?s:[l[0]],1)[0];y=[l[0],C]}else{const s=$(g,Math.min(2,g.length));y=s.length===2?s:[s[0],s[0]]}y.forEach(s=>h.add(s.name));for(const s of y)R.push({id:`c${k++}`,type:s.type,name:s.name,img:s.img,matched:!1,faceUp:!1})}return S(R)}function b(){t.innerHTML=`
        <div class="mm-intro">
          <p class="mm-instr">Encontre pares de itens que vão para a mesma lixeira.</p>
        </div>
        <div class="mm-grid">
          ${f.map((e,i)=>`
            <button
              class="mm-card ${e.faceUp||e.matched?"is-flipped":""} ${e.matched?"is-matched":""}"
              data-idx="${i}"
              style="--type-color:${T[e.type]};"
              aria-pressed="${e.faceUp||e.matched?"true":"false"}"
              aria-label="${e.matched?e.name+" (correspondência encontrada)":e.name}">
              <div class="mm-card-inner">
                <div class="mm-card-face mm-card-front">
                  <i class="fa-sharp-duotone fa-recycle"></i>
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
      `,t.querySelectorAll(".mm-card").forEach(e=>{e.addEventListener("click",()=>I(Number(e.dataset.idx)))})}function I(e){if(v)return;const i=f[e];if(!(i.matched||i.faceUp)){if(i.faceUp=!0,p===null){p=e,b();return}if(u===null){u=e,M++,b();const c=f[p],r=f[u],h=c.type===r.type;v=!0,setTimeout(()=>{if(h){if(c.matched=r.matched=!0,E++,a.textContent=String(E),E>=m){N();return}}else c.faceUp=r.faceUp=!1;p=u=null,v=!1,b()},h?450:700)}}}function N(){const e=Date.now()-x,i=Math.max(1,Math.round(e/1e3)),c=Math.max(0,Math.round(m/M*100)),r=c>=80?"PARABÉNS! 🌟":c>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪";t.innerHTML=`
        <div class="mm-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${r}</h3>
          <p>VOCÊ ENCONTROU ${m} PARES.</p>
          <p>TEMPO: <strong>${i}s</strong> • JOGADAS: <strong>${M}</strong></p>
          <div class="mm-end-actions">
            <button id="mm-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right" style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,t.querySelector("#mm-retry").addEventListener("click",L)}function L(){f=w(),p=u=null,v=!1,E=0,M=0,a.textContent="0",x=Date.now(),b()}L()}};export{j as MemoryMatchGame};
