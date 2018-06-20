'use strict';
/* global shoppingList, $ store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));




// $.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
//   console.log('api response:', response);
// });