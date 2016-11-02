var Backbone = require('backbone');

var CartItem = Backbone.Model.extend({
  idAttribute: 'cid'
});

var CartItemCollection = Backbone.Collection.extend({
  model: CartItem,
  
});

module.exports = {
  CartItem: CartItem,
  CartItemCollection: CartItemCollection
};
