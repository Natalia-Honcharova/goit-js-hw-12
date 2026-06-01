import{a as S,S as v,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const R="https://pixabay.com/api/",q="55973348-f792568b70242ee6d4e3ad983";async function y(e,r){return(await S.get(R,{params:{key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}let P=new v(".gallery a");function m(e,r){const i=e.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>

        <div class="info">
          <p class="info-item">
            <b>Likes</b>
            ${t.likes}
          </p>

          <p class="info-item">
            <b>Views</b>
            ${t.views}
          </p>

          <p class="info-item">
            <b>Comments</b>
            ${t.comments}
          </p>

          <p class="info-item">
            <b>Downloads</b>
            ${t.downloads}
          </p>
        </div>
      </li>
    `).join("");r.insertAdjacentHTML("beforeend",i),P.refresh()}function B(e){e.innerHTML=""}function g(e){e.style.display="block"}function h(e){e.style.display="none"}function b(e){e.style.display="block"}function w(e){e.style.display="none"}const p=document.querySelector(".form"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),l=document.querySelector(".load-more");let a=1,L="",f=0;p.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.elements["search-text"].value.trim();if(a=1,L=r,r===""){n.error({message:"Please fill in the search field!",position:"topRight"});return}B(u),w(l),g(c);try{const i=await y(r,a),t=i.hits;if(f=Math.ceil(i.totalHits/15),t.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(t,u),a<f?b(l):n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{h(c)}p.reset()});l.addEventListener("click",async()=>{a+=1,w(l),g(c);try{const r=(await y(L,a)).hits;m(r,u);const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),a>=f?n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):b(l)}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{h(c)}});
//# sourceMappingURL=index.js.map
