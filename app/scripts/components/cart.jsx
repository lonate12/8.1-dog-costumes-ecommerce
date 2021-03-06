var React = require('react');
var Template = require('./layout/template.jsx').Template;
var CartItemCollection = require('../models/cart.js').CartItemCollection;

var CartTable = React.createClass({
  getInitialState: function(){
    return{
      cart: this.props.cartItems
    }
  },
  handleRemoveItem: function(indexOfItem){
    var cartArray = this.state.cart;
    var newCartArray = cartArray.filter(function(items, index){return index != indexOfItem});
    this.setState({cart: newCartArray});
    this.props.setNewCartState(newCartArray);
  },
  render: function(){
    var self = this;
    var tableItems = this.state.cart.map(function(item, index){
      var currentTime = new Date().getTime();
      var time;
      var timeTillExpire = item.time_expires - currentTime;

      if(currentTime > item.time_expires){
        time='expired';
        self.handleRemoveItem(index);
      }else{
        var minutes = ((timeTillExpire/60000)%60).toFixed(0);
        minutes = (minutes < 10) ? '0' + minutes : minutes;

        var seconds = ((timeTillExpire/1000)%60).toFixed(0);
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        time=minutes + ':' + seconds;
      }

      return(
        <tr key={index}>
          <td className="table-item">{item.name}</td>
          <td className="table-item">{item.size}</td>
          <td className="table-item">{item.quantity}</td>
          <td className="table-item">{time}</td>
          <td className="table-item"><button onClick={function(){self.handleRemoveItem(index)}} className="btn btn-danger">Remove</button></td>
        </tr>
      );
    });
    return(
      <table className="col-md-12">
        <tbody>
          <tr>
            <th className="table-header">Shirt</th>
            <th className="table-header">Size</th>
            <th className="table-header">Quantity</th>
            <th className="table-header">Deal Expires</th>
            <th className="table-header">Remove</th>
          </tr>
          {tableItems}
        </tbody>
      </table>
    );
  }
});

var CartContainer = React.createClass({
  getInitialState: function(){
    var cartItems = new CartItemCollection();

    return{
      cartItems: cartItems
    };
  },
  store: function(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('stored');
  },
  setNewCartState: function(newCartArray){
    this.setState({cartItems: newCartArray});
    this.store(newCartArray);
  },
  componentWillMount: function(){
    var cartContents = localStorage.getItem('cart');
    var cartItems = JSON.parse(cartContents);
    console.log(cartItems);
    this.setState({cartItems: cartItems});
  },
  render: function(){
    return (
      <Template>
        <div className="row">
          <CartTable cartItems={this.state.cartItems} setNewCartState={this.setNewCartState}/>
        </div>
      </Template>
    );
  },
  componentDidMount: function(){
    var self = this;
    setInterval(function(){
      self.forceUpdate();
    },1000);
  }
});

module.exports = {
  CartContainer: CartContainer
}
