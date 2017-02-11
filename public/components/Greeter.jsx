import React from 'react';
import GreeterMessage from 'GreeterMessage';
import GreeterForm from 'GreeterForm';

class Greeter extends React.Component {
    static defaultProps = {
      name: 'React (default)',
      message: 'This is from the component (default)'
    }

    state = {
      name: this.props.name,
      message: this.props.message
    }

    foo = 'bar'

    handleNewUpdate (updates){
        this.setState(updates);
    }

    render () {
      console.log('foo is', this.foo)
      var name = this.state.name;
      var message = this.state.message;

            return (
              <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewUpdate={this.handleNewUpdate} />
              </div>
            )
    }
}

module.exports = Greeter;
