(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="modulepreload",S=function(a){return"/eco-transforma/"+a},p={},w=function(i,s,d){let e=Promise.resolve();if(s&&s.length>0){let m=function(c){return Promise.all(c.map(t=>Promise.resolve(t).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};var l=m;document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),n=o?.nonce||o?.getAttribute("nonce");e=m(s.map(c=>{if(c=S(c),c in p)return;p[c]=!0;const t=c.endsWith(".css"),b=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${b}`))return;const u=document.createElement("link");if(u.rel=t?"stylesheet":y,t||(u.as="script"),u.crossOrigin="",u.href=c,n&&u.setAttribute("nonce",n),document.head.appendChild(u),t)return new Promise((h,v)=>{u.addEventListener("load",h),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=o,window.dispatchEvent(n),!n.defaultPrevented)throw o}return e.then(o=>{for(const n of o||[])n.status==="rejected"&&r(n.reason);return i().catch(r)})};function A(a={}){const{immediate:i=!1,onNeedRefresh:s,onOfflineReady:d,onRegistered:e,onRegisteredSW:r,onRegisterError:l}=a;let o,n;const m=async(t=!0)=>{await n};async function c(){if("serviceWorker"in navigator){if(o=await w(async()=>{const{Workbox:t}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:t}},[]).then(({Workbox:t})=>new t("/eco-transforma/sw.js",{scope:"/eco-transforma/",type:"classic"})).catch(t=>{l?.(t)}),!o)return;o.addEventListener("activated",t=>{(t.isUpdate||t.isExternal)&&window.location.reload()}),o.addEventListener("installed",t=>{t.isUpdate||d?.()}),o.register({immediate:i}).then(t=>{r?r("/eco-transforma/sw.js",t):e?.(t)}).catch(t=>{l?.(t)})}}return n=c(),m}const O="/eco-transforma/img/mascote.png",E=["OLÁ! EU SOU O SUCATECO,<br/>MASCOTINHO DO ECOTRANSFORMA.","JUNTE-SE A NÓS NESSA MISSÃO<br/>SUSTENTÁVEL E VENHA CUIDAR<br/> DO PLANETA COM A GENTE!","SELECIONE UMA DAS OPÇÕES<br/>ABAIXO E DESCUBRA COMO FAZER ISSO!"];let f=0;function L(){return`
<section class="hero">
    <div class="hero-bubble-container">
        <div class="hero-bubble" id="bubble" tabindex="0" role="button" aria-label="Avançar diálogo">
            <p id="bubble-text" class="bubble-text"></p>
            <div class="hero-actions">
                <button id="prev" class="btn" aria-label="Voltar">
                    <i class="fa-regular fa-lg fa-circle-left"></i>
                </button>
                <span id="progress" class="progress"></span>
                <button id="next" class="btn" aria-label="Avançar">
                    <i class="fa-regular fa-lg fa-circle-right"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="hero-figure">
        <img src="${O}" alt="Mascote EcoTransforma" class="hero-mascote" />
    </div>

    <div class="hero-cta">
        <button id="btn-sobre" class="btn">
            <i class="fa-regular fa-circle-question"></i> Sobre
        </button>
    </div>
</section>
  `}function P(){const a=document.getElementById("bubble"),i=document.getElementById("bubble-text"),s=document.getElementById("prev"),d=document.getElementById("next"),e=document.getElementById("progress"),r=()=>{i.innerHTML=E[f],s.disabled=f===0,e.textContent=`${f+1}/${E.length}`},l=()=>{f<E.length-1&&f++,r()},o=()=>{f>0&&f--,r()};a.addEventListener("click",n=>{n.target.closest("button")||l()}),d.addEventListener("click",l),s.addEventListener("click",o),a.addEventListener("keydown",n=>{(n.key==="ArrowRight"||n.key==="Enter"||n.key===" ")&&l(),n.key==="ArrowLeft"&&o()}),f=0,r()}function N(){return`
    <h2>🔍 EcoScan</h2>
    <p>Selecione um material ou use a câmera (em breve).</p>
  `}function x(){return`
    <h2>🎮 EcoJogos</h2>
    <ul>
      <li>Arraste o lixo para a lixeira correta</li>
      <li>Quebra-cabeça do mascote</li>
      <li>Pintar lixeiras</li>
      <li>Quiz</li>
    </ul>
  `}function I(){return`
    <h2>📍 EcoPontos</h2>
    <p>Encontre locais de descarte na sua cidade.</p>
  `}A({immediate:!0});const R={"/":{view:L,init:P},"/ecoscan":{view:N},"/ecogames":{view:x},"/ecopontos":{view:I}};function g(){const a=location.hash.replace("#","")||"/",i=R[a]??{view:()=>"<h2>404</h2><p>Página não encontrada</p>"},s=document.getElementById("app");s&&(s.innerHTML=i.view(),i.init?.()),document.querySelectorAll("nav a").forEach(d=>{const e=d.getAttribute("href")||"#/";d.classList.toggle("active",e===`#${a}`)})}window.addEventListener("hashchange",g);window.addEventListener("load",g);
