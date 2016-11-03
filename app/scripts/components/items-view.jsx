var React = require('react');
var CartItem = require('../models/cart.js').CartItem;

var ItemsView = React.createClass({
  getInitialState: function(){
    var newOrder = new CartItem();
    return{
      newOrder: newOrder
    }
  },
  handleChangeQTY: function(e){
    e.preventDefault();
    this.state.newOrder.set({quantity: e.target.value});
  },
  handleChangeSize: function(e){
    e.preventDefault();
    this.state.newOrder.set({size: e.target.value});
  },
  handleSubmit: function(item){
    console.log(item.get('name'));
    this.state.newOrder.set({name: item.get('name'), 'time_submitted': new Date().getTime(), 'time_expires': new Date().getTime() + 600000});
    this.setState({newOrder: this.state.newOrder});
    this.props.addToCart(this.state.newOrder);
  },
  render: function(){
    var self = this;
    var items = this.props.inventoryCollection.map(function(item){
      return (
        <div key={item.get('_id')} className="col-md-4">
          <div className="col-md-12 thumbnail">
            <img src={'dist/'+item.get('image')} alt={item.get('name')} className="item-image"></img>
            <h3>{item.get('name')}</h3>
            <p>Your dog is cute, this will make them cuter!</p>
              <form
                onSubmit={function(e){e.preventDefault();self.handleSubmit(item);}}
                className="form-inline">
                <select onChange={self.handleChangeQTY} className="form-control">
                  <option>Qty</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <select onChange={self.handleChangeSize} className="form-control">
                  <option>Size</option>
                  <option>SM</option>
                  <option>MD</option>
                  <option>LG</option>
                </select>
                <button type="submit" className="btn btn-success">Add to Cart</button>
              </form>
          </div>
        </div>
      )
    });

    return(
      <div className="row">
        <div className="col-md-12">
          {items}
        </div>
      </div>
    );
  }
});

module.exports = {
  ItemsView: ItemsView
};
