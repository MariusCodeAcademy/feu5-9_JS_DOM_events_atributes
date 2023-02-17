'use strict';
console.log('simpleTodo.js file was loaded');

// nuorodos i elementus
const newTodoEl = document.getElementById('newTodo');
const addBtnEl = document.getElementById('addBtn');
const todoListEl = document.getElementById('todoList');

// kai paspaudziam Add it mygtuka
addBtnEl.addEventListener('click', addNewTodo);
// paimti reiksme is input
// sukurti nauja li el su tekstu is input
// patalpinti li sarase

/**
 * sukuria ir grazina nauja li elementa su textu paduotu i argumenta
 * @param {string} liText
 * @returns HTMLLIElement
 */
function createLi(liText) {
  const newLi = document.createElement('li');
  newLi.textContent = liText;
  return newLi;
}

function addNewTodo() {
  // paimti reiksme is input
  const newInputValue = newTodoEl.value;
  // sukurti nauja li el su tekstu is input
  const newLiEl = createLi(newInputValue);
  // patalpinti li sarase
  todoListEl.append(newLiEl);
  // isvalyti input
  newTodoEl.value = '';
  // sufokucuoti kursoriu i investies lauka
  newTodoEl.focus();
}
