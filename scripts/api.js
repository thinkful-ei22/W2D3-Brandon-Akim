'use strict';
/* global $ */
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/[Brandon-Akim]';
  const getItems = callback => {
  
    $.getJSON(BASE_URL+'/items', callback);
  
    callback('api module works!');
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
  }

  return {
    getItems, createItem
  };
}());

