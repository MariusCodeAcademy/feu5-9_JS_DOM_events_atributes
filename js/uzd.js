'use strict';
console.log('uzd.js file was loaded');

// taikomes

const listEl = document.getElementById('itemsList');
const liElsArr = listEl.children;
console.log('liElsArr ===', liElsArr);

// 3. uzdeti visiem li elementams klase 'sigleLi' ciklo budu
for (let oneLiEl of liElsArr) {
  oneLiEl.classList.add('sigleLi');
  // console.log('oneLiEl ===', oneLiEl);
}
