'use strict';
/* global shoppingList, $ store api*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  // api.getItems((items) => {
  //   store.items.forEach((item) => store.addItem(item));
  //   shoppingList.render();
  
  // });
  api.getItems((items) => {
    const item = items[0];
    console.log('the id of item is: ', item, item.id);
    
    api.updateItem(item.id, { name: 'foobar' }, () => {
      console.log('updated!');
    });
  });
});


// api.getItems(function(data) {
//   console.log(data);
// });

// console.log(api.BASE_URL);



// $.getJSON('https://thinkful-list-api.herokuapp.com/ei-student/items', (response) => {
//   console.log('api response:', response);
// });

// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });

