'use strict';

var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var {Router} = require('director');
var Dispatcher = require('./core/Dispatcher');
var ActionTypes = require('./constants/ActionTypes');
var router;

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
function render(Page, query) {
  var queryStringParse = require('../config/queryStringParse');
  var layout = null, child = null, props = queryStringParse(query) || {};
  while ((layout = Page.type.layout || (Page.defaultProps && Page.defaultProps.layout))) {
    //child = React.createElement(Page, props, child);
    child = (<Page {...props}>{child}</Page>);
    Page = layout;
  }
  // React.render(React.createElement(page, props, child), document.body);
  React.render(<Page>{child}</Page>, document.body);
}

// Define URL routes
// See https://github.com/flatiron/director
var routes = {
  '/': () => render(require('./components/pages/Index')),
  '/about': () => render(require('./components/pages/About')),
  '/hotellist/:query': (query) => render(require('./components/pages/HotelList'), query)
};

// Initialize a router
router = new Router(routes).configure({html5history: true}).init();
