'use strict';
console.log('uzd.js file was loaded');

// taikomes
const h1El = document.querySelector('h1');
const listEl = document.getElementById('itemsList');
const liElsArr = listEl.children;

// 3. uzdeti visiem li elementams klase 'sigleLi' ciklo budu
for (let oneLiEl of liElsArr) {
  oneLiEl.classList.add('sigleLi');
  // console.log('oneLiEl ===', oneLiEl);
}

// 5. sukurti mygtuka kurio paspaudimu mes uzdedam jei nea ir nuimam jei yra klase 'active' and h1 elemento
const h1BtnEl = document.getElementById('h1Btn');

const toggleH1Class = () => {
  h1El.classList.toggle('active');
};

// () => {} - anonimine arrow funkcija
h1BtnEl.addEventListener('mouseup', () => {
  h1El.classList.toggle('active');
});

// function toggleH1Class() {
//   h1El.classList.toggle('active');
// }

// console.log('toggleH1Class ===', toggleH1Class);

// 1. sukurti mygtuka kuri paspaudus issitrintu pimas saraso elementas. mygtukas turi iskviesti funkcija kuri trina prima li elementa sarase.

// sukuriam mygtuka
const btnLiDelEl = document.createElement('button');
btnLiDelEl.textContent = 'delete first li';
// ideti po h1 elementu
h1El.after(btnLiDelEl);

btnLiDelEl.addEventListener('click', delFirsLi);

function delFirsLi() {
  listEl.firstElementChild.remove();
}
