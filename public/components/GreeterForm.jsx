var React = require('react');
var ReactDOM = require('react-dom');

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {}
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
      //this.props.onNewName(updates);
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
      //this.props.onNewName(updates);
    }

    this.props.onNewUpdate(updates);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" placeholder="Enter new name" />
        <textarea rows="4" cols="50" ref="message" placeholder="Enter new message" />
        <button>Update</button>
      </form>
    )
  }
});

module.exports = GreeterForm;
