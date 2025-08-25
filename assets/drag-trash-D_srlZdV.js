const P="/eco-transforma/img/drag-trash/aluminio.png",D="/eco-transforma/img/drag-trash/clipes.png",$="/eco-transforma/img/drag-trash/copo_vidro.png",M="/eco-transforma/img/drag-trash/garrafa_pet.png",C="/eco-transforma/img/drag-trash/garrafa_vidro.png",V="/eco-transforma/img/drag-trash/iogurte.png",q="/eco-transforma/img/drag-trash/jornal.png",N="/eco-transforma/img/drag-trash/lata.png",w="/eco-transforma/img/drag-trash/papelao.png",U="/eco-transforma/img/drag-trash/pote_vidro.png",G="/eco-transforma/img/drag-trash/revista.png",j="/eco-transforma/img/drag-trash/sacola.png",B="/eco-transforma/img/drag-trash/lixeira-plastico.png",_="/eco-transforma/img/drag-trash/lixeira-papel.png",k="/eco-transforma/img/drag-trash/lixeira-vidro.png",F="/eco-transforma/img/drag-trash/lixeira-metal.png";const H=[{id:"papel",title:"PAPEL",color:"#1e3a8a",img:_},{id:"plastico",title:"PLÁSTICO",color:"#b91c1c",img:B},{id:"metal",title:"METAL",color:"#b45309",img:F},{id:"vidro",title:"VIDRO",color:"#065f46",img:k}],g=[{name:"JORNAL",type:"papel",img:q},{name:"CAIXA DE PAPELÃO",type:"papel",img:w},{name:"REVISTA",type:"papel",img:G},{name:"GARRAFA PET",type:"plastico",img:M},{name:"SACO PLÁSTICO",type:"plastico",img:j},{name:"POTE DE IOGURTE",type:"plastico",img:V},{name:"LATA DE REFRI",type:"metal",img:N},{name:"PAPEL ALUMÍNIO",type:"metal",img:P},{name:"CLIPES",type:"metal",img:D},{name:"POTE DE VIDRO",type:"vidro",img:U},{name:"GARRAFA DE VIDRO",type:"vidro",img:C},{name:"COPO DE VIDRO",type:"vidro",img:$}];function T(o){const r=o.slice();for(let c=r.length-1;c>0;c--){const u=Math.floor(Math.random()*(c+1));[r[c],r[u]]=[r[u],r[c]]}return r}function S(o,r){return T(o).slice(0,r)}const J={async mount(o){o.innerHTML=`
      <div class="dragtrash-wrap shout">
        <header class="dragtrash-hd">
          <i class="fa-sharp-duotone fa-recycle"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
          <h3>ARRASTE PARA A LIXEIRA CERTA</h3>
          <div class="dragtrash-progress">
            <span id="drag-pos">1</span>/<span id="drag-total">10</span>
          </div>
        </header>

        <div id="drag-stage" class="dragtrash-stage"></div>

        <footer class="dragtrash-ft">
          <button id="drag-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
               style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const r=o.querySelector("#drag-stage"),c=o.querySelector("#drag-pos");o.querySelector("#drag-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let d=[],m=0,p=0;function L(){const s={papel:g.filter(t=>t.type==="papel"),plastico:g.filter(t=>t.type==="plastico"),metal:g.filter(t=>t.type==="metal"),vidro:g.filter(t=>t.type==="vidro")},e=["papel","plastico","metal","vidro"],n=T(e),a=Math.floor(10/e.length),i=10%e.length,f={papel:a,plastico:a,metal:a,vidro:a};for(let t=0;t<i;t++)f[n[t]]++;const y=new Set;let l=[];for(const t of e){const v=Math.min(f[t],s[t].length),A=S(s[t],v);for(const E of A)y.has(E)||(y.add(E),l.push(E))}const h=Math.min(10,g.length);if(l.length<h){const t=g.filter(A=>!y.has(A)),v=S(t,Math.min(t.length,h-l.length));l=l.concat(v)}const b=o.querySelector("#drag-total");b&&(b.textContent=String(h)),d=T(l).slice(0,h),m=0,p=0,O()}function O(){const s=d[m];c.textContent=String(m+1),r.innerHTML=`
        <div class="dragtrash-q">
          <p class="dragtrash-instr">Arraste o item até a lixeira correta ou toque na lixeira para classificar.</p>

          <div class="dragtrash-item-wrap">
            <div id="drag-item" class="dragtrash-item" draggable="true" data-type="${s.type}" aria-grabbed="false">
              <div class="dragtrash-item-frame">
                <img class="img-fit" src="${s.img}" alt="${s.name}" />
              </div>
              <div class="dragtrash-item-name">${s.name}</div>
            </div>
          </div>

          <div class="dragtrash-bins">
            ${H.map(a=>`
              <button class="dragtrash-bin" data-bin="${a.id}" aria-label="${a.title}" style="--bin-color:${a.color}">
                <div class="dragtrash-bin-frame">
                  <img class="img-fit" src="${a.img}" alt="Lixeira ${a.title}" />
                </div>
                <span class="dragtrash-bin-title">${a.title}</span>
              </button>
            `).join("")}
          </div>
        </div>
      `;const e=r.querySelector("#drag-item"),n=Array.from(r.querySelectorAll(".dragtrash-bin"));e.addEventListener("dragstart",a=>{a.dataTransfer?.setData("text/plain",e.dataset.type||""),e.setAttribute("aria-grabbed","true"),setTimeout(()=>e.classList.add("is-dragging"),0)}),e.addEventListener("dragend",()=>{e.setAttribute("aria-grabbed","false"),e.classList.remove("is-dragging")}),n.forEach(a=>{a.addEventListener("dragover",i=>i.preventDefault()),a.addEventListener("drop",i=>{i.preventDefault();const f=i.dataTransfer?.getData("text/plain")||"";I(a.dataset.bin,f)}),a.addEventListener("click",()=>{I(a.dataset.bin,e.dataset.type)})})}function I(s,e){const n=s===e,a=document.getElementById("drag-item"),i=document.querySelector(`.dragtrash-bin[data-bin="${s}"]`);a&&a.classList.toggle("is-correct",n),a&&a.classList.toggle("is-wrong",!n),i&&i.classList.add(n?"is-correct":"is-wrong"),n&&p++,setTimeout(()=>{i&&i.classList.remove("is-correct","is-wrong"),R()},650)}function R(){m++,m<d.length?O():x()}function x(){const s=Math.round(p/d.length*100),e=s>=80?"PARABÉNS! 🌟":s>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪";r.innerHTML=`
        <div class="dragtrash-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${e}</h3>
          <p>SUA PONTUAÇÃO: <strong>${s}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${p}</strong> DE <strong>${d.length}</strong>.</p>
          <div class="dragtrash-end-actions">
            <button id="drag-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,r.querySelector("#drag-retry").addEventListener("click",L)}L()}};export{J as DragTrashGame};
