
'use strict';

var React = require('react');
var Link = require('./Link');

var Navbar = React.createClass({

  propTypes: {
    children: React.PropTypes.string
  },

  render() {

    return (
      /* jshint ignore:start */
      <div className="pure-g navbar">
        <div className="pure-u-1-8 text-left back">
          <a href="#" onClick={this.goback}>E</a>
        </div>
        <div className="pure-u-3-4 text-center">
          <h1>{this.props.children}</h1>
        </div>
        <div className="pure-u-1-8 text-right gohome">
          <Link to="/">首页</Link>
        </div>
      </div>
      /* jshint ignore:end */
    );
  },

  goback(e) {
    e.preventDefault();
    history.back();
  }

});

module.exports = Navbar;
