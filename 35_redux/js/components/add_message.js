'use strict';

(function() {
  var React = require('react');

  var AddMessage = React.createClass({

    propTypes: {
      add_message: React.PropTypes.func
    },


    getInitialState: function() {
      return {text: ''};
    },

    textChanged: function(e) {
      this.setState({text: e.target.value});
    },

    send: function() {
      this.props.add_message(this.state.text);
      this.setState({text: ''});
    },

    render: function() {
      return <div>
      <input onChange={this.textChanged} type="text" value={this.state.text} />
      <button onClick={this.send} >Send</button>
      </div>;
    }

  });

  module.exports = AddMessage;

}());
