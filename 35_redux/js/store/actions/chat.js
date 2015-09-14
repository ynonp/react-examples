(function() {

  var actions = {
    new_msg: function(from, text) {
      return function(dispatch, getstate) {
        var nextId = _.max(getstate().get('messages').toJS(), 'id').id + 1;
        dispatch({
          type: 'new_msg',
          payload: { from: from, text: text, id: nextId }});
      };
    }
  };

  module.exports = actions;
  
}());
