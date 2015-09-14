(function() {
  var thunkMiddleware = require('store/middlewares/thunk');

  var initialState = Immutable.fromJS({
    rooms: [
      { id: 0, name: 'Lobby', current: true },
      { id: 1, name: 'The-Club' }, 
      { id: 2, name: 'Food and Drinks' }, 
      { id: 3, name: 'Life etc.' }
    ],
    messages: [
      { id: 0, from: 'joe', text: 'Morning all' },
      { id: 1, from: 'jane', text: 'Hi joe' }
    ],
    username: 'jack',
    otherUsers: [ 'joe', 'jane' ]
  });

  
  function reducer(state, action) {
    if ( ! state ) { state = initialState; }
    
    switch (action.type) {
      case "new_msg": 
        return state.update('messages', function(messages) {
          return messages.push(Immutable.fromJS(action.payload));
        });

      default:
        return state;
    }
  }


  var createStoreWithMiddleware = Redux.applyMiddleware(thunkMiddleware)(Redux.createStore);
  var store = createStoreWithMiddleware(reducer);

  module.exports = store;
  
}());

