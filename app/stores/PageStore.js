
'use strict';

var Store = require('../core/Store');
var Dispatcher = require('../core/Dispatcher');
var ActionTypes = require('../constants/ActionTypes');

/**
 * @typedef Page
 * @type {object}
 * @property {string} title
 * @property {string} description
 * @property {string} keywords
 */
var _page;

var PageStore = new Store({

  /**
   * Gets metadata associated with the current page.
   * @returns {Page}
   */
  get() {
    return _page || require('../constants/Settings').defaults.page;
  }

});

PageStore.dispatcherToken = Dispatcher.register(payload => {

  var action = payload.action;

  if (action.actionType === ActionTypes.SET_CURRENT_PAGE) {
    _page = action.page;
    PageStore.emitChange();
  }

});

module.exports = PageStore;
