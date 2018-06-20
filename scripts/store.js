'use strict';

/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    try {
      this.items.push(item);
    } catch(e) {
      console.log(e.message);
    }
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };


  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };


  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  const findAndUpdate = function(id, newData) {
    const itemToUpdate = this.items.find(id => id === this.items.id);
    Object.assign(itemToUpdate, newData);
  }

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    findAndUpdate,
    addItem,
    findById,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
  };
}());
