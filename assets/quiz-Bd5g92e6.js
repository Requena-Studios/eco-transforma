const E=new URL("/eco-transforma/data/quiz-questions.json",window.location.origin).toString();function m(e){const t=e.slice();for(let a=t.length-1;a>0;a--){const i=Math.floor(Math.random()*(a+1));[t[a],t[i]]=[t[i],t[a]]}return t}function O(e,t){return m(e).slice(0,t)}function T(e,t){const a=new Set,i=[];for(const r of e){const o=t(r);a.has(o)||(a.add(o),i.push(r))}return i}function L(e){const a=m([0,1,2]),i=a.map(o=>e.options[o]),r=a.indexOf(0);return{q:e.q,options:i,answer:r}}const v={async mount(e){e.innerHTML=`
      <div class="quiz-wrap shout">
        <header class="quiz-hd">
          <i class="fa-sharp-duotone fa-circle-question"
             style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
          <h3>QUIZ DA RECICLAGEM</h3>
          <div class="quiz-progress">
            <span id="quiz-pos">1</span>/<span id="quiz-total">10</span>
          </div>
        </header>
        <div id="quiz-stage" class="quiz-stage"></div>
        <footer class="quiz-ft">
          <button id="quiz-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
               style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const t=e.querySelector("#quiz-stage"),a=e.querySelector("#quiz-pos");e.querySelector("#quiz-exit").addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("game:exit"))});let r=[];try{r=await(await fetch(E,{cache:"no-cache"})).json()}catch{t.innerHTML="<p>ERRO AO CARREGAR PERGUNTAS DO QUIZ.</p>";return}let o=[],c=0,f=0;function p(){const n=T(r,d=>(d.q||"").trim().toLowerCase()),s=Math.min(10,n.length),l=e.querySelector("#quiz-total");l&&(l.textContent=String(s)),o=O(n,s).map(L),c=0,f=0,h()}function h(){const n=o[c];a.textContent=String(c+1),t.innerHTML=`
        <div class="quiz-q">
          <p class="quiz-q-text">❓ ${n.q}</p>
          <div class="quiz-options">
            ${n.options.map((s,l)=>`
              <button class="quiz-opt" data-i="${l}">
                <span class="quiz-opt-letter">${String.fromCharCode(65+l)})</span>
                <span class="quiz-opt-text">${s}</span>
              </button>`).join("")}
          </div>
        </div>
      `,t.querySelectorAll(".quiz-opt").forEach(s=>{s.addEventListener("click",()=>g(Number(s.dataset.i)))})}function g(n){const s=o[c];t.querySelectorAll(".quiz-opt").forEach((u,q)=>{u.disabled=!0,q===s.answer&&(u.classList.add("is-correct"),u.insertAdjacentHTML("beforeend",`
            <i class="fa-sharp-duotone fa-circle-check"
               style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-left:.35rem;"></i>
          `)),q===n&&n!==s.answer&&(u.classList.add("is-wrong"),u.insertAdjacentHTML("beforeend",`
            <i class="fa-sharp-duotone fa-circle-xmark"
               style="--fa-primary-color:#c53030;--fa-secondary-color:#f5a6a6;margin-left:.35rem;"></i>
          `))}),n===s.answer&&f++;const d=document.createElement("button");d.className="btn quiz-next";const z=c>=o.length-1;d.innerHTML=`
        ${z?"FINALIZAR":"PRÓXIMA"}
        <i class="fa-sharp-duotone fa-circle-right"
           style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-left:.35rem;"></i>
      `,d.addEventListener("click",y),t.appendChild(d)}function y(){c++,c<o.length?h():A()}function A(){const n=Math.round(f/o.length*100),s=n>=80?"PARABÉNS! 🌟":n>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪";t.innerHTML=`
        <div class="quiz-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${s}</h3>
          <p>SUA PONTUAÇÃO: <strong>${n}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${f}</strong> DE <strong>${o.length}</strong>.</p>
          <div class="quiz-end-actions">
            <button id="quiz-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,t.querySelector("#quiz-retry").addEventListener("click",p)}p()}};export{v as QuizGame};
