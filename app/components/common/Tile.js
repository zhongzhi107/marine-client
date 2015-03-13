
'use strict';

var React = require('react');
var Link = require('./Link');

var Tile = React.createClass({

  propTypes: {
    to: React.PropTypes.string.isRequired,
    width: React.PropTypes.oneOf(['1', '2']),
    height: React.PropTypes.oneOf(['1', '2']),
    color: React.PropTypes.string,
    children: React.PropTypes.string
  },

  render() {
    var className = 'pure-u-' + (this.props.width === '1' ? '1-4' : '1-2') + ' text-center tile';
    this.props.color = this.props.color || '#fff';
    this.props.style = {
      backgroundColor: this.props.bgColor,
      height: 3 * this.props.height + 'rem',
      lineHeight: 3 * this.props.height + 'rem',
      color: this.props.color
    };
    delete this.props.width;
    delete this.props.height;

    return (
      /* jshint ignore:start */
      <div className={className}>
        <Link {...this.props}>{this.props.children}</Link>
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = Tile;
