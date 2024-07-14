'use strict';

// Start variabelen
let container = document.querySelector('.grid-container');
let randomNumber = 0;
let listOfItems = [];

let amountOfItems = Number(prompt('Hoeveel items wenst u?'));

// Functie voor het initialiseren
const init = function () {
  randomNumber = Math.trunc(Math.random() * amountOfItems) + 1;
};

// Items Toevoegen
const addGridItem = function () {
  for (let item = 0; item < amountOfItems; item++) {
    container.insertAdjacentHTML(
      'beforeend',

      `<div class="grid-item" id="${item + 1}"></div>`
    );

    listOfItems.push(item);
  }
};

// Initialiseren
init();
addGridItem();
let item = document.querySelectorAll('.grid-item');

// Item Selecteren en Beoordelen
container.addEventListener('click', function (e) {
  let clickedItem = e.target.id;
  if (clickedItem == randomNumber) {
    item[clickedItem - 1].classList.add('found-it');
  } else {
    item[clickedItem - 1].classList.add('not-found');
  }
});
