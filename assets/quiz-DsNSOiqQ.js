import{v as O,a as y,b as L}from"./index-DrIhDYUz.js";const m=10,T=new URL("/eco-transforma/data/quiz-questions.json",window.location.origin).toString();function z(e){const t=e.slice();for(let s=t.length-1;s>0;s--){const r=Math.floor(Math.random()*(s+1));[t[s],t[r]]=[t[r],t[s]]}return t}function b(e,t){return z(e).slice(0,t)}function x(e,t){const s=new Set,r=[];for(const c of e){const o=t(c);s.has(o)||(s.add(o),r.push(c))}return r}function R(e){const s=z([0,1,2]),r=s.map(o=>e.options[o]),c=s.indexOf(0);return{q:e.q,options:r,answer:c}}const M={async mount(e){e.innerHTML=`
      <div class="quiz-wrap shout">
        <header class="quiz-hd">
          <i class="fa-sharp-duotone fa-circle-question"
            ></i>
          <h3>QUIZ DA RECICLAGEM</h3>
          <div class="quiz-progress">
            <span id="quiz-pos">1</span>/<span id="quiz-total">${m}</span>
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
    `;const t=e.querySelector("#quiz-stage"),s=e.querySelector("#quiz-pos");e.querySelector("#quiz-exit").addEventListener("click",()=>{document.dispatchEvent(new CustomEvent("game:exit"))});let c=[];try{c=await(await fetch(T,{cache:"no-cache"})).json()}catch{t.innerHTML="<p>ERRO AO CARREGAR PERGUNTAS DO QUIZ.</p>";return}let o=[],l=0,u=0;function p(){const n=x(c,h=>(h.q||"").trim().toLowerCase()),i=Math.min(m,n.length),a=e.querySelector("#quiz-total");a&&(a.textContent=String(i)),o=b(n,i).map(R),l=0,u=0,q()}function q(){const n=o[l];s.textContent=String(l+1),t.innerHTML=`
        <div class="quiz-q">
          <p class="quiz-q-text">❓ ${n.q}</p>
          <div class="quiz-options">
            ${n.options.map((i,a)=>`
              <button class="quiz-opt" data-i="${a}">
                <span class="quiz-opt-letter">${String.fromCharCode(65+a)})</span>
                <span class="quiz-opt-text">${i}</span>
              </button>`).join("")}
          </div>
        </div>
      `,t.querySelectorAll(".quiz-opt").forEach(i=>{i.addEventListener("click",()=>A(Number(i.dataset.i)))})}function A(n){const i=o[l],a=n===i.answer;a?O():y(),t.querySelectorAll(".quiz-opt").forEach((d,g)=>{d.disabled=!0,g===i.answer&&(d.classList.add("is-correct"),d.insertAdjacentHTML("beforeend",`
            <i class="fa-sharp-duotone fa-circle-check"
               style="margin-left:.35rem;"></i>
          `)),g===n&&n!==i.answer&&(d.classList.add("is-wrong"),d.insertAdjacentHTML("beforeend",`
            <i class="fa-sharp-duotone fa-circle-xmark"
               style="--fa-primary-color:#c53030;--fa-secondary-color:#f5a6a6;margin-left:.35rem;"></i>
          `))}),a&&u++;const f=document.createElement("button");f.className="btn quiz-next";const S=l>=o.length-1;f.innerHTML=`
        ${S?"FINALIZAR":"PRÓXIMA"}
        <i class="fa-sharp-duotone fa-circle-right"
           style="margin-left:.35rem;"></i>
      `,f.addEventListener("click",E),t.appendChild(f)}function E(){l++,l<o.length?q():v()}function v(){const n=Math.round(u/o.length*100),i=n>=80?"PARABÉNS! 🌟":n>=50?"BOA! 👍":"VAMOS TENTAR DE NOVO? 💪",a=u*10;L("quiz",a,!0),t.innerHTML=`
        <div class="quiz-end">
          <i class="fa-sharp-duotone fa-trophy"
             style="--fa-primary-color:#f59e0b;--fa-secondary-color:#ffe5a3;font-size:2rem;"></i>
          <h3>${i}</h3>
          <p>SUA PONTUAÇÃO: <strong>${n}</strong> DE 100</p>
          <p>VOCÊ ACERTOU <strong>${u}</strong> DE <strong>${o.length}</strong>.</p>
          <p class="points-earned">+${a} PONTOS 🌟</p>
          <div class="quiz-end-actions">
            <button id="quiz-retry" class="btn">
              <i class="fa-sharp-duotone fa-rotate-right"
                 style="margin-right:.35rem;"></i>
              JOGAR NOVAMENTE
            </button>
          </div>
        </div>
      `,t.querySelector("#quiz-retry").addEventListener("click",p)}p()}};export{M as QuizGame};
