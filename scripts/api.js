'use strict';
/* global $ */
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/[Brandon-Akim]';
  const getItems = callback => {
  
    // $.getJSON(BASE_URL+'/items', callback);
  
    callback('api module works!');
  };
  return {
    getItems
  };
}());