
'use strict';

var React = require('react');
var PageStore = require('../../stores/PageStore');
var Link = require('../common/Link');

/**
 * Retrieves the current page metadata from the PageStore.
 * @returns {{title: string}}
 */
function getState() {
  return {
    title: PageStore.get().title
  };
}

var DefaultLayout = React.createClass({

  mixins: [PageStore.Mixin],

  getInitialState() {
    return getState();
  },

  componentDidMount() {
    PageStore.emitChange();
  },

  render() {
    /* jshint ignore:start */
    var footer = (
      <footer className="pure-g footer">
        <div className="pure-u-3-5 text-left">
          <span>Qunar 京ICP备05021087</span>
        </div>
        <div className="pure-u-2-5 text-right">
          <ol className="list-inline">
            <li><Link to="/about">关于我们</Link></li>
            <li><Link to="feedback">意见反馈</Link></li>
          </ol>
        </div>
      </footer>
    );
    /* jshint ignore:end */

    return (
      /* jshint ignore:start */
      <div>
        {this.props.children}
        {footer}
      </div>
      /* jshint ignore:end */
    );
  },

  /**
   * Event handler for 'change' events coming from the PageStore.
   */
  onChange() {
    this.setState(getState());
  }
});

module.exports = DefaultLayout;
