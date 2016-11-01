var React = require('react');
var UsernameModal = require('./modal.jsx').UsernameModal;

var CatalogContainer = React.createClass({
  render: function(){
    return (
      <UsernameModal />
    );
  }
});

 module.exports = {
   CatalogContainer: CatalogContainer
 };
