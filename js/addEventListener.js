'use strict';
console.log('addEventListener.js file was loaded');

// nusitaikom
const h1El = document.querySelector('h1');
const listEl = document.getElementById('itemsList');
const darkModeBntEl = document.getElementById('darkModeBtn');

console.log('darkModeBntEl ===', darkModeBntEl);
// darkModeBntEl.onclick = toggleDarkMode;
// darkModeBntEl.onclick = makeAlert;

// addEventListener (įvykio pridėjimas):
// element.addEventListener('evento pavadinimas', funkcija kuri vyks ivykus eventui);

darkModeBntEl.addEventListener('click', toggleDarkMode);
darkModeBntEl.addEventListener('click', toggleBtnText);
// darkModeBntEl.addEventListener('mouseleave', makeAlert);

function makeAlert() {
  alert('made alert');
}

// Functions
function toggleDarkMode() {
  listEl.classList.toggle('darkModeOn');
}
// <button id="darkModeBtn">Dark Mode</button>
function toggleBtnText() {
  // gauti texta is mygtuko
  let currentBtnText = darkModeBntEl.textContent;
  console.log('currentBtnText ===', currentBtnText);
  // jei teksta prasideda su 'Dark'
  if (currentBtnText.startsWith('Dark')) {
    /// TAIP - pakeisti teksta i 'Light'
    darkModeBntEl.textContent = 'Light Mode';
  } else {
    /// NE - pakeisti i 'Dark'
    darkModeBntEl.textContent = 'Dark Mode';
  }
}

// INPUT EVENTS

// paimti teksta ivesta i input ir paspaudus mygtuka patalpinti ji h1 el
const mainTitleInputEl = document.getElementById('mainTitleInput');
const mainTitleBtnEl = document.getElementById('mainTitleBtn');
const currentValueEl = document.getElementById('currentValue');

mainTitleBtnEl.addEventListener('click', inputToH1);
// mainTitleBtnEl.addEventListener('click', inputToH3);

// ivedimo i input metu imam reiksme ir dedam i h3
mainTitleInputEl.addEventListener('input', inputToH3);

function inputToH1() {
  console.log('inputToH1 function ran');
  // paimti reiksme is input
  const textInInput = mainTitleInputEl.value;
  console.log('textInInput ===', textInInput);
  // patalpinti text i h1
  h1El.textContent = textInInput;
  // isvalyti input value
  // mainTitleInputEl.value = '';
}

// <h3 id="currentValue">currentValue</h3>
// sukurti funkcija, kuri paima reiksme is input ir patalpina ja aukciau nurodytame elmente
function inputToH3() {
  // console.log('inputToH3 works');
  const inputText = mainTitleInputEl.value;
  currentValueEl.textContent = inputText;
}
// prideti funckija prie mygtuko paspaudimo
