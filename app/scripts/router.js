window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var UsernameModal = require('./components/modal.jsx').UsernameModal;
var CatalogContainer = require('./components/catalog.jsx').CatalogContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',

  },
  index: function(){
    ReactDOM.render(
      React.createElement(CatalogContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports=router;
