var React = require('react');
var UsernameModal = require('./modal.jsx').UsernameModal;
var Template = require('./layout/headerfootertemplate.jsx').Template;

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
      </Template>
    );
  }
});

 module.exports = {
   CatalogContainer: CatalogContainer
 };
