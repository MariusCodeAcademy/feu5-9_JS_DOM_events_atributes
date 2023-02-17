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

h1BtnEl.addEventListener('mouseup', toggleH1Class);

function toggleH1Class() {
  h1El.classList.toggle('active');
}
