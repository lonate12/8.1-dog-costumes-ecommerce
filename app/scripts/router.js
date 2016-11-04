window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var CatalogContainer = require('./components/catalog.jsx').CatalogContainer;
var CartContainer = require('./components/cart.jsx').CartContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'cart/': 'showCart'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(CatalogContainer),
      document.getElementById('app')
    );
  },
  showCart: function(){
    ReactDOM.render(
      React.createElement(CartContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports=router;
