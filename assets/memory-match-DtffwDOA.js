import{v as D,a as q,b as B}from"./index-BU9KMsL8.js";const j="/eco-transforma/data/assets.json",N=i=>i?`/eco-transforma/img/${i}`:"";async function G(){const t=await(await fetch(j,{cache:"no-cache"})).json();return t.items=t.items.map(a=>({...a,img:N(a.img)})),t.bins=t.bins.map(a=>({...a,img:a.img?N(a.img):void 0})),t}function T(i){const t=i.slice();for(let a=t.length-1;a>0;a--){const $=Math.floor(Math.random()*(a+1));[t[a],t[$]]=[t[$],t[a]]}return t}function O(i,t){return T(i).slice(0,t)}const d=8,H={async mount(i){i.innerHTML=`
      <div class="mm-wrap shout">
        <header class="mm-hd">
          <i class="fa-sharp-duotone fa-cards"></i>
          <h3>MEMÓRIA: ITENS E LIXEIRAS</h3>
          <div class="mm-progress">
            <span id="mm-found">0</span>/<span id="mm-total">${d}</span>
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
    `;const t=i.querySelector("#mm-stage"),a=i.querySelector("#mm-found");i.querySelector("#mm-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));const x=await G(),f=x.items,I=x.bins.reduce((e,n)=>(e[n.id]=n.color,e),{});let p=[],u=null,h=null,y=!1,E=0,b=0,L=0;function C(){const e={papel:f.filter(o=>o.type==="papel"),plastico:f.filter(o=>o.type==="plastico"),metal:f.filter(o=>o.type==="metal"),vidro:f.filter(o=>o.type==="vidro"),organico:f.filter(o=>o.type==="organico")},n=["papel","plastico","metal","vidro","organico"],r=[];for(;r.length<d;)r.push(...T(n));const c=r.slice(0,d),l=new Set,S=[];let A=0;for(const o of c){const g=e[o];if(g.length===0)continue;let v=[];const m=g.filter(s=>!l.has(s.name));if(m.length>=2)v=O(m,2);else if(m.length===1){const s=g.filter(k=>k.name!==m[0].name),P=O(s.length?s:[m[0]],1)[0];v=[m[0],P]}else{const s=O(g,Math.min(2,g.length));v=s.length===2?s:[s[0],s[0]]}v.forEach(s=>l.add(s.name));for(const s of v)S.push({id:`c${A++}`,type:s.type,name:s.name,img:s.img,matched:!1,faceUp:!1})}return T(S)}function M(){t.innerHTML=`
        <div class="mm-intro">
          <p class="mm-instr">Encontre pares de itens que vão para a mesma lixeira.</p>
        </div>
        <div class="mm-grid">
          ${p.map((e,n)=>`
            <button
              class="mm-card ${e.faceUp||e.matched?"is-flipped":""} ${e.matched?"is-matched":""}"
              data-idx="${n}"
              style="--type-color:${I[e.type]};"
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
                  <div class="mm-chip" style="background:${I[e.type]};">
                    ${e.type.toUpperCase()}
                  </div>
                </div>
              </div>
            </button>
          `).join("")}
        </div>
      `,t.querySelectorAll(".mm-card").forEach(e=>{e.addEventListener("click",()=>U(Number(e.dataset.idx)))})}function U(e){if(y)return;const n=p[e];if(!(n.matched||n.faceUp)){if(n.faceUp=!0,u===null){u=e,M();return}if(h===null){h=e,b++,M();const r=p[u],c=p[h],l=r.type===c.type;y=!0,setTimeout(()=>{if(l){if(D(),r.matched=c.matched=!0,E++,a.textContent=String(E),E>=d){w();return}}else q(),r.faceUp=c.faceUp=!1;u=h=null,y=!1,M()},l?450:700)}}}function w(){const e=Date.now()-L,n=Math.max(1,Math.round(e/1e3)),r=Math.max(0,Math.round(d/b*100)),c=r>=80?"PARABÉNS! 🌟":r>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪",l=50,S=Math.round(r/2),A=n<30?30:n<60?15:0,o=l+S+A;B("memory-match",o,!0),t.innerHTML=`
        <div class="mm-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${c}</h3>
          <p>VOCÊ ENCONTROU ${d} PARES.</p>
          <p>TEMPO: <strong>${n}s</strong> • JOGADAS: <strong>${b}</strong></p>
          <p>EFICIÊNCIA: <strong>${r}%</strong></p>
          <p class="points-earned">+${o} PONTOS 🌟</p>
          <div class="mm-end-actions">
            <button id="mm-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right" style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,t.querySelector("#mm-retry").addEventListener("click",R)}function R(){p=C(),u=h=null,y=!1,E=0,b=0,a.textContent="0",L=Date.now(),M()}R()}};export{H as MemoryMatchGame};
