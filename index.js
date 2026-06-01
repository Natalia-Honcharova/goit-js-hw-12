import{a as L,S,i as a}from"./assets/vendor-DcHCnVjq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const v="https://pixabay.com/api/",q="55973348-f792568b70242ee6d4e3ad983";async function y(e,r){return(await L.get(v,{params:{key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}let R=new S(".gallery a");function m(e,r){const n=e.map(t=>`
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
    `).join("");r.insertAdjacentHTML("beforeend",n),R.refresh()}function P(e){e.innerHTML=""}function g(e){e.style.display="block"}function h(e){e.style.display="none"}function B(e){e.style.display="block"}function b(e){e.style.display="none"}const p=document.querySelector(".form"),u=document.querySelector(".gallery"),l=document.querySelector(".loader"),c=document.querySelector(".load-more");let i=1,w="",f=0;p.addEventListener("submit",async e=>{e.preventDefault();const r=e.target.elements["search-text"].value.trim();if(i=1,w=r,r===""){a.error({message:"Please fill in the search field!",position:"topRight"});return}P(u),b(c),g(l);try{const n=await y(r,i),t=n.hits;if(f=Math.ceil(n.totalHits/15),t.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(t,u),i<f&&B(c)}catch{a.error({message:"Something went wrong!",position:"topRight"})}finally{h(l)}p.reset()});c.addEventListener("click",async()=>{i+=1,g(l);try{const r=(await y(w,i)).hits;m(r,u);const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),i>=f&&(b(c),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{a.error({message:"Something went wrong!",position:"topRight"})}finally{h(l)}});
//# sourceMappingURL=index.js.map
