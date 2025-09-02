const O=new URL("/eco-transforma/data/quiz-questions.json",window.location.origin).toString();function g(e){const t=e.slice();for(let s=t.length-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[t[s],t[a]]=[t[a],t[s]]}return t}function T(e,t){return g(e).slice(0,t)}function y(e,t){const s=new Set,a=[];for(const r of e){const o=t(r);s.has(o)||(s.add(o),a.push(r))}return a}function L(e){const s=g([0,1,2]),a=s.map(o=>e.options[o]),r=s.indexOf(0);return{q:e.q,options:a,answer:r}}const v={async mount(e){e.innerHTML=`
      <div class="quiz-wrap shout">
        <header class="quiz-hd">
          <i class="fa-sharp-duotone fa-circle-question"
            ></i>
          <h3>QUIZ DA RECICLAGEM</h3>
          <div class="quiz-progress">
            <span id="quiz-pos">1</span>/<span id="quiz-total">10</span>
          </div>
        </header>
        <div id="quiz-stage" class="quiz-stage"></div>
        <footer class="quiz-ft">
          <button id="quiz-exit" class="btn btn-ghost btn-game-exit" aria-label="Sair do jogo">
            <i class="fa-sharp-duotone fa-circle-left"
              ></i>
            VOLTAR AOS JOGOS
          </button>
        </footer>
      </div>
    `;const t=e.querySelector("#quiz-stage"),s=e.querySelector("#quiz-pos");e.querySelector("#quiz-exit").addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("game:exit"))});let r=[];try{r=await(await fetch(O,{cache:"no-cache"})).json()}catch{t.innerHTML="<p>ERRO AO CARREGAR PERGUNTAS DO QUIZ.</p>";return}let o=[],c=0,f=0;function p(){const n=y(r,u=>(u.q||"").trim().toLowerCase()),i=Math.min(10,n.length),l=e.querySelector("#quiz-total");l&&(l.textContent=String(i)),o=T(n,i).map(L),c=0,f=0,h()}function h(){const n=o[c];s.textContent=String(c+1),t.innerHTML=`
        <div class="quiz-q">
          <p class="quiz-q-text">❓ ${n.q}</p>
          <div class="quiz-options">
            ${n.options.map((i,l)=>`
              <button class="quiz-opt" data-i="${l}">
                <span class="quiz-opt-letter">${String.fromCharCode(65+l)})</span>
                <span class="quiz-opt-text">${i}</span>
              </button>`).join("")}
          </div>
        </div>
      `,t.querySelectorAll(".quiz-opt").forEach(i=>{i.addEventListener("click",()=>m(Number(i.dataset.i)))})}function m(n){const i=o[c];t.querySelectorAll(".quiz-opt").forEach((d,q)=>{d.disabled=!0,q===i.answer&&(d.classList.add("is-correct"),d.insertAdjacentHTML("beforeend",`
            <i class="fa-sharp-duotone fa-circle-check"
               style="margin-left:.35rem;"></i>
          `)),q===n&&n!==i.answer&&(d.classList.add("is-wrong"),d.insertAdjacentHTML("beforeend",`
            <i class="fa-sharp-duotone fa-circle-xmark"
               style="--fa-primary-color:#c53030;--fa-secondary-color:#f5a6a6;margin-left:.35rem;"></i>
          `))}),n===i.answer&&f++;const u=document.createElement("button");u.className="btn quiz-next";const E=c>=o.length-1;u.innerHTML=`
        ${E?"FINALIZAR":"PRÓXIMA"}
        <i class="fa-sharp-duotone fa-circle-right"
           style="margin-left:.35rem;"></i>
      `,u.addEventListener("click",A),t.appendChild(u)}function A(){c++,c<o.length?h():z()}function z(){const n=Math.round(f/o.length*100),i=n>=80?"PARABÉNS! 🌟":n>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪";t.innerHTML=`
        <div class="quiz-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${i}</h3>
          <p>SUA PONTUAÇÃO: <strong>${n}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${f}</strong> DE <strong>${o.length}</strong>.</p>
          <div class="quiz-end-actions">
            <button id="quiz-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,t.querySelector("#quiz-retry").addEventListener("click",p)}p()}};export{v as QuizGame};
