/*
 * main.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

var App = require('components/app');
var store = require('store/main');
var actions = require('store/actions/chat');

React.render(<App store={store} actions={actions} />, document.querySelector('main'));

