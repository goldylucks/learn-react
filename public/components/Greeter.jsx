var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
          name: 'React (default)',
          message: 'This is from the component (default)'
        }
    },
    getInitialState: function(){
        return {
          name: this.props.name,
          message: this.props.message
        }
    },
    handleNewUpdate: function(updates){
        this.setState(updates);
    },
    render: function() {
      var name = this.state.name;
      var message = this.state.message;

            return (
              <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewUpdate={this.handleNewUpdate} />
              </div>
            )
    }
});

module.exports = Greeter;
