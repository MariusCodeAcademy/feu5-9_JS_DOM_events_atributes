'use strict';
console.log('setAttribute.js file was loaded');

// element.setAttribute('koks atributas', 'kokia atribudo reiksme')

// <h2 id="secondary">title</h2>
// el.setAttribute('id','secondary')
// el.setAttribute('src','img/house1.jpg')

// nusitaikom
const h1El = document.querySelector('h1');

h1El.setAttribute('class', 'mainTitle');
h1El.setAttribute('id', 'mainTitle');
h1El.setAttribute('title', 'It is all about Interaction');

// element.getAttribute('koks atributas') - grazins jo reiksme

let h1ElIdValue = h1El.getAttribute('id');
console.log('h1ElIdValue ===', h1ElIdValue);

// element.hasAttribute('koks atributas') - true arba false ar toks atributas yra

const aEl = document.getElementById('blue');
const doesAElHasAltAttribute = aEl.hasAttribute('alt');
console.log('doesAElHasAltAttribute ===', doesAElHasAltAttribute);
