var React = require('react');

var Directions = React.createClass({
  render: function(){
    return(
      <div className="well">
        <h2>Boo or Bark Costumes proudly presents used dog costumes!</h2>
        <p>Why pay retail for something your dog will only wear once? Here we have
          last years great hits for pups! Don't delay, once you add an item to your
          cart you only have <emphasis>10 minutes</emphasis> to purchase!
        </p>
      </div>
    );
  }
});

module.exports = {
  Directions: Directions
};
