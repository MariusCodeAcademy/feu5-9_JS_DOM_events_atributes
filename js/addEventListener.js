'use strict';
console.log('addEventListener.js file was loaded');

console.log('darkModeBntEl ===', darkModeBntEl);
// darkModeBntEl.onclick = toggleDarkMode;
// darkModeBntEl.onclick = makeAlert;

// addEventListener (įvykio pridėjimas):
// element.addEventListener('evento pavadinimas', funkcija kuri vyks ivykus eventui);

darkModeBntEl.addEventListener('click', toggleDarkMode);
darkModeBntEl.addEventListener('click', makeAlert);

function makeAlert() {
  alert('made alert');
}
