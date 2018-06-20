'use strict';
/* global $ */
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Brandon-Akim';
  const getItems = callback => {
  
    $.getJSON(`${BASE_URL}/items`, callback);
    const item = store.items[0];
    console.log(item);
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'foobar' });
    console.log('new name: ' + item.name);
  
    //callback('api module works!');
  };

  const createItem = function(name, callback){
    const newItem = {
      name 
    };
    const myJSONitem = JSON.stringify(newItem);
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: myJSONitem,
      success: callback
    });
  };

  const updateItem = function (id, updateData, callback){
    console.log('`updateItem` ran');
    let itemURL = `${BASE_URL}/items/${id}`;
    console.log(itemURL);
    $.ajax({
      url: itemURL,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });
  };

  return {
    getItems, createItem, updateItem
  };
}());

