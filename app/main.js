'use strict';

// import React from 'react';
// import ExecutionEnvironment from 'react/lib/ExecutionEnvironment';
// import {Router} from 'director';
// import Dispatcher from './core/Dispatcher.js';
// import ActionTypes from './constants/ActionTypes.js';
// import urlrewrite from '../config/urlrewrite';
var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var {Router} = require('director');
var Dispatcher = require('./core/Dispatcher');
var ActionTypes = require('./constants/ActionTypes');
var urlrewrite = require('../config/urlrewrite');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

Dispatcher.register((payload) => {

  var action = payload.action;

  switch (action.actionType) {
    case ActionTypes.SET_CURRENT_ROUTE:
      router.setRoute(action.route);
      break;

    case ActionTypes.SET_CURRENT_PAGE:
      if (ExecutionEnvironment.canUseDOM) {
        document.title = action.page.title;
      }
      break;
  }

  return true; // No errors.  Needed by promise in Dispatcher.
});

/**
 * Check if Page component has a layout property; and if yes, wrap the page
 * into the specified layout, then mount to document.body.
 */
function render(action, query) {
  var Page = require('./components/pages/' + action + '.js');
  var queryStringParse = require('../config/queryStringParse');
  var layout = null, child = null, props = queryStringParse(query) || {};

  while ((layout = Page.type.layout || (Page.defaultProps && Page.defaultProps.layout))) {
    child = (<Page {...props}>{child}</Page>);
    Page = layout;
  }
  React.render(<Page>{child}</Page>, document.body);
}

// Define URL routes
// See https://github.com/flatiron/director
var routes = {};
Object.keys(urlrewrite).forEach((key) => {
  routes[key] = (query) => render(urlrewrite[key], query);
});

// Initialize a router
var router = new Router(routes).configure({html5history: true}).init();
