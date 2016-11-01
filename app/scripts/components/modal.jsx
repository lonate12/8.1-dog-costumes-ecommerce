window.$ = window.jQuery = require('jquery');
require('bootstrap-sass/assets/javascripts/bootstrap');
var React = require('react');

var UsernameModal = React.createClass({
  show: function(){
    $('.modal').modal('show');
  },
  render: function(){
    return (
      <div className="modal fade" id="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Enter your name please!</h4>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="cust-name">Enter your name please!</label>
                  <input type="text" className="form-control" id="cust-name" placeholder="Dan" />
                </div>
                <button type="submit" className="btn btn-default" data-dismiss="modal">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function(){
    this.show();
  }
});

module.exports = {
  UsernameModal: UsernameModal
};
