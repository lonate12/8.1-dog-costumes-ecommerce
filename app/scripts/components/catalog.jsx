var React = require('react');

// Local Imports ############################################

var UsernameModal = require('./modal.jsx').UsernameModal;
var Template = require('./layout/template.jsx').Template;
var Directions = require('./layout/directions.jsx').Directions;
var CatalogItemCollection = require('../models/catalog.js').CatalogItemCollection;
var ItemsView = require('./items-view.jsx').ItemsView;
var CartItemCollection = require('../models/cart.js').CartItemCollection;
var CartItem = require('../models/cart.js').CartItem;

var CatalogContainer = React.createClass({
  getInitialState: function(){
    var inventoryCollection = new CatalogItemCollection();
    var currentCart = new CartItemCollection();

    return {
      user: '',
      inventoryCollection: inventoryCollection,
      currentCart: currentCart
    }
  },
  toLocalStorage: function(collection){
    var jsonCart = JSON.stringify(collection.toJSON());
    localStorage.setItem('cart', jsonCart);
  },
  fromLocalStorage: function(){
    var toCollection = JSON.parse(localStorage.getItem('cart'));
    this.state.currentCart.reset(toCollection);
    this.setState({currentCart: this.state.currentCart});
  },
  setUser: function(e){
    e.preventDefault();
    this.setState({user: localStorage.getItem('user')});
  },
  addToCart: function(itemToAdd){
    var currentCart = this.state.currentCart;
    this.fromLocalStorage();
    currentCart.add(itemToAdd);
    this.setState({currentCart: currentCart});
    this.toLocalStorage(currentCart);
  },
  componentWillMount:function(){
    var self = this;
    this.state.inventoryCollection.fetch().then(function(inventoryItem){
      self.setState({inventoryCollection: self.state.inventoryCollection});
    });
  },
  render: function(){
    return (
      <Template>
        <UsernameModal />
        <Directions />
        <ItemsView inventoryCollection={this.state.inventoryCollection} addToCart={this.addToCart} />
      </Template>
    );
  }
});

 module.exports = {
   CatalogContainer: CatalogContainer
 };
