(function() {
  var React = require('react');
  
  var TextPanel = React.createClass({
    mixins: [React.PureRenderMixin],
    render: function() {
      return <ul>
      {this.props.messages.map(function(msg) {
        return <li key={msg.get('id')}>{msg.get('from')}: {msg.get('text')}</li>
      })}  
      </ul>
    }
  });


  module.exports = TextPanel;
  
}());
