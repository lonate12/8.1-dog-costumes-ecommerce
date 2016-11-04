var React = require('react');

var Template = React.createClass({
  render: function(){
    return(
      <div className="container">
        <header>
          <nav>
            <span>Boo or Bark</span>
            <img src="..." alt="..."></img>
            <ul className="list-inline">
              <li><a href="#">Catalog</a></li>
              <li><a href="#/cart/">Cart</a></li>
            </ul>
            <span>Hey {localStorage.getItem('user') ? localStorage.getItem('user') : 'person'}!</span>
          </nav>
        </header>

        {this.props.children}

        <footer>Copyright &copy; 2016 Luis Rene Onate Productions</footer>
      </div>
    );
  }
});

module.exports = {
  Template: Template
};
