'use strict';

var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');
var pageDefaults = require('../constants/Settings').defaults.page;
var assign = require('react/lib/Object.assign');

module.exports = {

  /**
   * Set metadata for the current page (title, description, keywords etc.).
   * @param {object} The page object.
   */
  set(page) {
    Dispatcher.handleViewAction({
      actionType: ActionTypes.SET_CURRENT_PAGE,
      page: assign({}, pageDefaults, page)
    });
  }

};
