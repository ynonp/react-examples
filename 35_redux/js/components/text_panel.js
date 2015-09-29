'use strict';

(function() {
  var React = require('react');

  var TextPanel = React.createClass({
    propTypes: {
      messages: React.PropTypes.arrayOf(React.PropTypes.shapeOf({
        from: React.PropTypes.string,
        text: React.PropTypes.string
      }))
    },

    mixins: [React.PureRenderMixin],
    render: function() {
      return <ul>
      {this.props.messages.map(function(msg) {
        return <li key={msg.get('id')}>{msg.get('from')}: {msg.get('text')}</li>;
      })}
      </ul>;
    }
  });


  module.exports = TextPanel;

}());
