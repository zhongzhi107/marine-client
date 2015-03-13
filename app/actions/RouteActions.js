'use strict';

var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');

module.exports = {

  /**
   * Set the current route.
   * @param {string} route Supply a route value, such as `todos/completed`.
   */
  setRoute(route) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.SET_CURRENT_ROUTE,
      route: route
    });
  }

};
