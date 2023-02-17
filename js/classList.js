'use strict';
console.log('classList.js file was loaded');

// nusitaikom
const h1El = document.querySelector('h1');
const listEl = document.getElementById('itemsList');
const darkModeBntEl = document.getElementById('darkModeBtn');

// uzdeti klase h1El mainTitle
h1El.classList.add('mainTitle');
h1El.classList.add('tomato');
// h1El.classList.add('mainTitle', 'tomato');

// h1El.setAttribute('class', 'tomato'); // perrasys klase

// classList.remove('className') - nuima klase

h1El.classList.remove('removeMe');

// classList.contains('className') - true arba false

const hasH1ClassBlue = h1El.classList.contains('blue');
console.log('hasH1ClassBlue ===', hasH1ClassBlue);

// elem.classList.toggle("class") - prideda klasę, jei jos nėra, jei yra - pašalina.

h1El.classList.toggle('tomato');

// parasyti funkcija kuri elementui uzdeda klase darkModeOn jei nera, ir nuima jei yra
function toggleDarkMode() {
  listEl.classList.toggle('darkModeOn');
}
toggleDarkMode();

// nusitaikyti i mygtuka ir reaguoti i paspaudima
// darkModeBntEl.onclick = toggleDarkMode;
