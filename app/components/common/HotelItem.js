
'use strict';

var React = require('react');

var HotelItem = React.createClass({

  propTypes: {
    allHotels: React.PropTypes.array.isRequired
  },

  render() {
    var allHotels = this.props.allHotels;
    var hotels = [];
    var className = 'pure-g item ' + this.props.hide;

    allHotels.forEach((hotel) => {
      hotels.push(
        <div className={className}  key={hotel.id}>
          <div className="pure-u-1-4">
            <img src={hotel.image} alt={hotel.name} />
          </div>
          <div className="pure-u-5-8">
            <p className="name">{hotel.name}</p>
            <p className="star">{hotel.star}</p>
          </div>
          <div className="pure-u-1-8 text-right">
            <s>F</s>
          </div>
        </div>
      );
    });

    return (
      /* jshint ignore:start */
      <div className="list">
        {hotels}
      </div>
      /* jshint ignore:end */
    );
  }

});

module.exports = HotelItem;
