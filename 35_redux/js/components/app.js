/*
 * app.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

(function() {
  var React = require('react');
  var AddMessage = require('components/add_message');
  var TextPanel = require('components/text_panel');
  
  var App = React.createClass({
    getInitialState: function() {
      return this.stateFromStore(this.props.store);
    },

    render: function() {
      return <div>
      <AddMessage add_message={this.add_message} />
      <TextPanel messages={this.state.messages} />
      </div>
    },
    
    componentDidMount: function() {
      this.unsubscribe = this.props.store.subscribe(this.setStateFromStore);
    },
    
    componentWillUnmount: function() {
      this.unsubscribe();
    },
    
    setStateFromStore: function() {
      this.setState(this.stateFromStore(this.props.store));
    },
    
    stateFromStore: function(store) {
      var state = store.getState();
      return {
        messages: state.get('messages'),
        username: state.get('username')
      }
    },
    
    add_message: function(text) {
      var action = this.props.actions.new_msg(this.state.username, text);
      this.props.store.dispatch(action);
    }   
  });

  module.exports = App;
  
}());



