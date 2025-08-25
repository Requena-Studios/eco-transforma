const C="/eco-transforma/img/drag-trash/aluminio.png",V="/eco-transforma/img/drag-trash/clipes.png",q="/eco-transforma/img/drag-trash/copo_vidro.png",N="/eco-transforma/img/drag-trash/garrafa_pet.png",B="/eco-transforma/img/drag-trash/garrafa_vidro.png",U="/eco-transforma/img/drag-trash/iogurte.png",X="/eco-transforma/img/drag-trash/jornal.png",j="/eco-transforma/img/drag-trash/lata.png",z="/eco-transforma/img/drag-trash/papelao.png",G="/eco-transforma/img/drag-trash/pote_vidro.png",k="/eco-transforma/img/drag-trash/revista.png",F="/eco-transforma/img/drag-trash/sacola.png",_="/eco-transforma/img/drag-trash/lixeira-plastico.png",H="/eco-transforma/img/drag-trash/lixeira-papel.png",Y="/eco-transforma/img/drag-trash/lixeira-vidro.png",J="/eco-transforma/img/drag-trash/lixeira-metal.png";const P=[{id:"papel",title:"PAPEL",color:"#3087b2",img:H},{id:"plastico",title:"PLÁSTICO",color:"#cd3623",img:_},{id:"metal",title:"METAL",color:"#e8ae29",img:J},{id:"vidro",title:"VIDRO",color:"#488f2e",img:Y}],A=[{name:"JORNAL",type:"papel",img:X},{name:"CAIXA DE PAPELÃO",type:"papel",img:z},{name:"REVISTA",type:"papel",img:k},{name:"GARRAFA PET",type:"plastico",img:N},{name:"SACO PLÁSTICO",type:"plastico",img:F},{name:"POTE DE IOGURTE",type:"plastico",img:U},{name:"LATA DE REFRI",type:"metal",img:j},{name:"PAPEL ALUMÍNIO",type:"metal",img:C},{name:"CLIPES",type:"metal",img:V},{name:"POTE DE VIDRO",type:"vidro",img:G},{name:"GARRAFA DE VIDRO",type:"vidro",img:B},{name:"COPO DE VIDRO",type:"vidro",img:q}];function $(p){const l=p.slice();for(let u=l.length-1;u>0;u--){const x=Math.floor(Math.random()*(u+1));[l[u],l[x]]=[l[x],l[u]]}return l}function R(p,l){return $(p).slice(0,l)}const Q={async mount(p){p.innerHTML=`
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
    `;const l=p.querySelector("#drag-stage"),u=p.querySelector("#drag-pos");p.querySelector("#drag-exit").addEventListener("click",()=>document.dispatchEvent(new CustomEvent("game:exit")));let y=[],v=0,I=0,m=!1;function S(){const n={papel:A.filter(a=>a.type==="papel"),plastico:A.filter(a=>a.type==="plastico"),metal:A.filter(a=>a.type==="metal"),vidro:A.filter(a=>a.type==="vidro")},t=["papel","plastico","metal","vidro"],d=$(t),c=Math.floor(10/t.length),e=10%t.length,s={papel:c,plastico:c,metal:c,vidro:c};for(let a=0;a<e;a++)s[d[a]]++;const g=new Set;let i=[];for(const a of t){const E=Math.min(s[a],n[a].length),L=R(n[a],E);for(const f of L)g.has(f)||(g.add(f),i.push(f))}const o=Math.min(10,A.length);if(i.length<o){const a=A.filter(L=>!g.has(L)),E=R(a,Math.min(a.length,o-i.length));i=i.concat(E)}const b=p.querySelector("#drag-total");b&&(b.textContent=String(o)),y=$(i).slice(0,o),v=0,I=0,w()}function w(){const n=y[v];u.textContent=String(v+1),m=!1,l.innerHTML=`
        <div class="dragtrash-q">
          <p class="dragtrash-instr">Arraste o item até a lixeira correta ou toque na lixeira para classificar.</p>

          <div class="dragtrash-items-container">
              <div class="dragtrash-bins">
                ${P.slice(0,2).map(e=>`
                  <button class="dragtrash-bin" data-bin="${e.id}" aria-label="${e.title}" style="--bin-color:${e.color}">
                    <div class="dragtrash-bin-frame">
                      <img class="img-fit" src="${e.img}" alt="Lixeira ${e.title}" />
                    </div>
                    <span class="dragtrash-bin-title">${e.title}</span>
                  </button>
                `).join("")}
              </div>

              <div class="dragtrash-item-wrap">
                <div id="drag-item" class="dragtrash-item" draggable="true" data-type="${n.type}" aria-grabbed="false">
                  <div class="dragtrash-item-frame">
                    <img class="img-fit" src="${n.img}" alt="${n.name}" />
                  </div>
                  <div class="dragtrash-item-name">${n.name}</div>
                </div>
              </div>

              <div class="dragtrash-bins">
                ${P.slice(-2).map(e=>`
                  <button class="dragtrash-bin" data-bin="${e.id}" aria-label="${e.title}" style="--bin-color:${e.color}">
                    <div class="dragtrash-bin-frame">
                      <img class="img-fit" src="${e.img}" alt="Lixeira ${e.title}" />
                    </div>
                    <span class="dragtrash-bin-title">${e.title}</span>
                  </button>
                `).join("")}
              </div>
          </div>
        </div>
      `;const t=l.querySelector("#drag-item"),d=Array.from(l.querySelectorAll(".dragtrash-bin"));t.addEventListener("dragstart",e=>{if(m){e.preventDefault();return}e.dataTransfer?.setData("text/plain",t.dataset.type||""),t.setAttribute("aria-grabbed","true"),setTimeout(()=>t.classList.add("is-dragging"),0)}),t.addEventListener("dragend",()=>{t.setAttribute("aria-grabbed","false"),t.classList.remove("is-dragging")}),d.forEach(e=>{e.addEventListener("dragover",s=>s.preventDefault()),e.addEventListener("drop",s=>{if(m)return;s.preventDefault();const g=s.dataTransfer?.getData("text/plain")||"";O(e.dataset.bin,g)}),e.addEventListener("click",()=>{m||O(e.dataset.bin,t.dataset.type)})});const c=(()=>{let e=!1,s=-1,g=0,i=0,o={};const b=t.dataset.type;function a(r){if(m||!r.isPrimary||r.pointerType==="mouse"&&r.button!==0)return;r.preventDefault(),s=r.pointerId,e=!0,t.setPointerCapture(s);const h=t.getBoundingClientRect();g=r.clientX-h.left,i=r.clientY-h.top,o={position:t.style.position,left:t.style.left,top:t.style.top,width:t.style.width,zIndex:t.style.zIndex,pointerEvents:t.style.pointerEvents},t.style.position="fixed",t.style.left=`${h.left}px`,t.style.top=`${h.top}px`,t.style.width=`${h.width}px`,t.style.zIndex="9999",t.style.pointerEvents="none",t.setAttribute("aria-grabbed","true"),t.classList.add("is-dragging"),window.addEventListener("pointermove",E,{passive:!1}),window.addEventListener("pointerup",f,{passive:!1}),window.addEventListener("pointercancel",f,{passive:!1})}function E(r){if(!e||r.pointerId!==s)return;r.preventDefault();const h=r.clientX-g,T=r.clientY-i;t.style.left=`${h}px`,t.style.top=`${T}px`}function L(){t.style.position=o.position||"",t.style.left=o.left||"",t.style.top=o.top||"",t.style.width=o.width||"",t.style.zIndex=o.zIndex||"",t.style.pointerEvents=o.pointerEvents||"",t.setAttribute("aria-grabbed","false"),t.classList.remove("is-dragging")}function f(r){if(!e||r.pointerId!==s)return;r.preventDefault(),e=!1;try{t.releasePointerCapture(s)}catch{}window.removeEventListener("pointermove",E),window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f);const T=document.elementFromPoint(r.clientX,r.clientY)?.closest(".dragtrash-bin");L(),T&&!m&&O(T.dataset.bin,b)}return{pointerDown:a}})();t.addEventListener("pointerdown",c.pointerDown,{passive:!1})}function O(n,t){if(m)return;m=!0;const d=n===t,c=document.getElementById("drag-item"),e=document.querySelector(`.dragtrash-bin[data-bin="${n}"]`),s=document.querySelector(`.dragtrash-bin[data-bin="${t}"]`),g=Array.from(document.querySelectorAll(".dragtrash-bin"));c&&(c.classList.add(d?"is-correct":"is-wrong"),c.setAttribute("draggable","false"),c.style.pointerEvents="none"),e&&e.classList.add(d?"is-correct":"is-wrong"),!d&&s&&s.classList.add("is-correct"),g.forEach(a=>a.disabled=!0),d&&I++;const i=document.createElement("button");i.className="btn dragtrash-next";const o=v>=y.length-1;i.innerHTML=`
        ${o?"FINALIZAR":"PRÓXIMA"}
        <i class="fa-sharp-duotone fa-circle-right"
           style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-left:.35rem;"></i>
      `,i.addEventListener("click",D),document.getElementById("drag-stage")?.appendChild(i)}function D(){v++,v<y.length?w():M()}function M(){const n=Math.round(I/y.length*100),t=n>=80?"PARABÉNS! 🌟":n>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪",d=document.getElementById("drag-stage");d.innerHTML=`
        <div class="dragtrash-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${t}</h3>
          <p>SUA PONTUAÇÃO: <strong>${n}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${I}</strong> DE <strong>${y.length}</strong>.</p>
          <div class="dragtrash-end-actions">
            <button id="drag-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,d.querySelector("#drag-retry").addEventListener("click",S)}S()}};export{Q as DragTrashGame};
