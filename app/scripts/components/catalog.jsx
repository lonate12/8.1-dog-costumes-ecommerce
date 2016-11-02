var React = require('react');
var UsernameModal = require('./modal.jsx').UsernameModal;
var Template = require('./layout/headerfootertemplate.jsx').Template;
var Directions = require('./layout/directions.jsx').Directions;
var CatalogItemCollection = require('../models/catalog.js').CatalogItemCollection;

var CatalogContainer = React.createClass({
  getInitialState: function(){
    return {
      user: ''
    }
  },
  setUser: function(e){
    e.preventDefault();
    this.setState({user: localStorage.getItem('user')});
  },
  render: function(){
    return (
      <Template>
        <UsernameModal />
        <Directions />
      </Template>
    );
  }
});

 module.exports = {
   CatalogContainer: CatalogContainer
 };
