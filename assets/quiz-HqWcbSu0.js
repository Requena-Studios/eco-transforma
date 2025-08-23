const E=new URL("/eco-transforma/data/quiz-questions.json",window.location.origin).toString();function m(e){const t=e.slice();for(let n=t.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[t[n],t[i]]=[t[i],t[n]]}return t}function O(e,t){return m(e).slice(0,t)}function T(e){const n=m([0,1,2]),i=n.map(o=>e.options[o]),l=n.indexOf(0);return{q:e.q,options:i,answer:l}}const v={async mount(e){e.innerHTML=`
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
          <button id="quiz-exit" class="btn btn-ghost" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
               style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;"></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const t=e.querySelector("#quiz-stage"),n=e.querySelector("#quiz-pos");e.querySelector("#quiz-exit").addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("game:exit"))});let l=[];try{l=await(await fetch(E,{cache:"no-cache"})).json()}catch{t.innerHTML="<p>ERRO AO CARREGAR PERGUNTAS DO QUIZ.</p>";return}let o=[],r=0,d=0;function p(){o=O(l,10).map(T),r=0,d=0,h()}function h(){const a=o[r];n.textContent=String(r+1),t.innerHTML=`
        <div class="quiz-q">
          <p class="quiz-q-text">❓ ${a.q}</p>
          <div class="quiz-options">
            ${a.options.map((s,f)=>`
              <button class="quiz-opt" data-i="${f}">
                <span class="quiz-opt-letter">${String.fromCharCode(65+f)})</span>
                <span class="quiz-opt-text">${s}</span>
              </button>`).join("")}
          </div>
        </div>
      `,t.querySelectorAll(".quiz-opt").forEach(s=>{s.addEventListener("click",()=>g(Number(s.dataset.i)))})}function g(a){const s=o[r];t.querySelectorAll(".quiz-opt").forEach((c,q)=>{c.disabled=!0,q===s.answer&&(c.classList.add("is-correct"),c.insertAdjacentHTML("beforeend",`
            <i class="fa-sharp-duotone fa-circle-check"
               style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-left:.35rem;"></i>
          `)),q===a&&a!==s.answer&&(c.classList.add("is-wrong"),c.insertAdjacentHTML("beforeend",`
            <i class="fa-sharp-duotone fa-circle-xmark"
               style="--fa-primary-color:#c53030;--fa-secondary-color:#f5a6a6;margin-left:.35rem;"></i>
          `))}),a===s.answer&&d++;const u=document.createElement("button");u.className="btn quiz-next";const z=r>=o.length-1;u.innerHTML=`
        ${z?"FINALIZAR":"PRÓXIMA"}
        <i class="fa-sharp-duotone fa-circle-right"
           style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-left:.35rem;"></i>
      `,u.addEventListener("click",y),t.appendChild(u)}function y(){r++,r<o.length?h():A()}function A(){const a=Math.round(d/o.length*100),s=a>=80?"PARABÉNS! 🌟":a>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪";t.innerHTML=`
        <div class="quiz-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${s}</h3>
          <p>SUA PONTUAÇÃO: <strong>${a}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${d}</strong> DE <strong>${o.length}</strong>.</p>
          <div class="quiz-end-actions">
            <button id="quiz-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="--fa-primary-color:#0a7a3d;--fa-secondary-color:#8fd19a;margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,t.querySelector("#quiz-retry").addEventListener("click",p)}p()}};export{v as QuizGame};
