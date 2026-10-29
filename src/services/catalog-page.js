// Mejora opcional: con JavaScript desactivado siguen visibles todos los packs y sus enlaces.
const filters=document.querySelector('.catalog-filters');
const buttons=[...filters.querySelectorAll('button')];
const cards=[...document.querySelectorAll('[data-pack]')];
const count=document.getElementById('catalog-count');
const empty=document.querySelector('.catalog-empty');
filters.hidden=false;count.hidden=false;
function show(filter){
  for(const button of buttons)button.setAttribute('aria-pressed',String(button.dataset.filter===filter));
  let visible=0;
  for(const card of cards){const match=filter==='all'||card.dataset[filter]==='true';card.hidden=!match;if(match)visible++;}
  document.querySelector('.catalog-other-heading').hidden=![...document.querySelector('.catalog-other').children].some(card=>!card.hidden);
  count.textContent=`${visible} ${visible===1?'opción':'opciones'} para comparar${filter==='all'?'':` ${filter==='photo'?'con fotos impresas':filter==='video'?'con vídeo 360':'con voces'}`}.`;
  empty.hidden=visible>0;
}
for(const button of buttons)button.addEventListener('click',()=>show(button.dataset.filter));
show('all');
