import{a as d,S as p,i}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="YOUR_PIXABAY_API_KEY",m="https://pixabay.com/api/";async function y(s){const o={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:o})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function P(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),b=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=b.value.trim();if(!o){i.warning({message:"Please enter a search query.",position:"topRight"});return}L(),w();try{const t=await y(o);if(t.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{P()}});
//# sourceMappingURL=index.js.map
