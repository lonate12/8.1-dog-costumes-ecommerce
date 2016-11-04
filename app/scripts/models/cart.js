var Backbone = require('backbone');
// Backbone.LocalStorage = require("backbone.localstorage");


var CartItem = Backbone.Model.extend({
  idAttribute: 'cid'
});

var CartItemCollection = Backbone.Collection.extend({
  // localStorage: new Backbone.LocalStorage('cartContents'),
  model: CartItem
});

module.exports = {
  CartItem: CartItem,
  CartItemCollection: CartItemCollection
};
