window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');
var React = require('react');

var UsernameModal = React.createClass({
  show: function(){
    $('.modal').modal('show');
  },
  handleChange: function(e){
    var user = e.target.value;
    localStorage.setItem('user', user);
  },
  render: function(){
    return (
      <div className="modal fade" id="modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Enter your name please!</h4>
            </div>
            <div className="modal-body">
              <form onSubmit={this.props.setUser}>
                <div className="form-group">
                  <label htmlFor="cust-name">Woof!</label>
                  <input onChange={this.handleChange} type="text" className="form-control" id="cust-name" placeholder="Dan Smith" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function(){
    if(localStorage.getItem('user')){
      this.setState({user: localStorage.getItem('user')})
    }else{
      this.show();
    }
  }
});

module.exports = {
  UsernameModal: UsernameModal
};
