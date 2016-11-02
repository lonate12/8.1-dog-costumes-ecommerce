var React = require('react');

var ItemsView = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    console.log(e.target[1].value);
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
                onSubmit={self.handleSubmit}
                className="form-inline">
                <select className="form-control">
                  <option>Qty</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <select className="form-control">
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
