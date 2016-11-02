var React = require('react');

// Local Imports ############################################

var UsernameModal = require('./modal.jsx').UsernameModal;
var Template = require('./layout/template.jsx').Template;
var Directions = require('./layout/directions.jsx').Directions;
var CatalogItemCollection = require('../models/catalog.js').CatalogItemCollection;
var ItemsView = require('./items-view.jsx').ItemsView;

var CatalogContainer = React.createClass({
  getInitialState: function(){
    var inventoryCollection = new CatalogItemCollection();

    return {
      user: '',
      inventoryCollection: inventoryCollection
    }
  },
  setUser: function(e){
    e.preventDefault();
    this.setState({user: localStorage.getItem('user')});
  },
  addToCart: function(e){
    e.preventDefault();
    console.log("it worked");
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
