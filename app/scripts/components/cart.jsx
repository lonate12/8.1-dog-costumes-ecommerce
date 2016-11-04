var React = require('react');
var Template = require('./layout/template.jsx').Template;
var CartItemCollection = require('../models/cart.js').CartItemCollection;

var CartTable = React.createClass({
  render: function(){
    var tableItems = this.props.cartItems.map(function(item, index){
      var currentTime = new Date().getTime();
      var time;
      var timeTillExpire = item.time_expires - currentTime;

      if(currentTime > item.time_expires){
        time='expired'
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
          <td className="table-item"><button className="btn btn-danger">Remove</button></td>
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
          <CartTable cartItems={this.state.cartItems} />
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
