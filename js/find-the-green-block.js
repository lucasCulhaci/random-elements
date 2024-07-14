'use strict';

let container = document.querySelector('.grid-container');
let item = document.querySelectorAll('.grid-item');

let randomNumber = 0;

const init = function () {
  randomNumber = Math.trunc(Math.random() * item.length) + 1;
};

let amountOfItems = 9;
// Adding Grid Items

// TODO: Voeg de grid-items toe gebruik makend van een loop
const addGridItem = function () {
  for (let item = 0; item < amountOfItems; item++) {
    container.insertAdjacentElement(
      'afterend',
      `<div class="grid-item" id="${item}"`
    );
  }
};

init();

console.log(randomNumber);

container.addEventListener('click', function (e) {
  let clickedItem = e.target.id;
  if (clickedItem == randomNumber) {
    item[clickedItem - 1].classList.add('found-it');
  } else {
    item[clickedItem - 1].classList.add('not-found');
  }
});
