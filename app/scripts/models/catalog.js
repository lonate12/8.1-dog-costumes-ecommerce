var Backbone = require('backbone');

var CatalogItem = Backbone.Model.extend({
  idAttribute: '_id'
});

var CatalogItemCollection = Backbone.Collection.extend({
  model: CatalogItem,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/rene-catalog-items'
});

module.exports = {
  CatalogItem: CatalogItem,
  CatalogItemCollection: CatalogItemCollection
};
