(function() {
  var React = require('react');
  
  var AddMessage = React.createClass({
    getInitialState: function() {
      return { text: "" };
    },
    
    render: function() {
      return <div>
      <input type="text" value={this.state.text} onChange={this.textChanged} />
      <button onClick={this.send} >Send</button>
      </div>
    },
    
    textChanged: function(e) {
      this.setState({text: e.target.value});    
    },
    
    send: function() {
      this.props.add_message(this.state.text);
      this.setState({text: ""});
    }
  });

  module.exports = AddMessage;
  
}());
