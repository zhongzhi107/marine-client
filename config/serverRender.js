'use strict';

module.exports = function(req, res) {
  var fs = require('fs');
  var _ = require('lodash');
  var director = require('director');
  var React = require('react');
  var assign = require('react/lib/Object.assign');

  require('node-jsx').install({harmony: true});

  function renderAA(page, props) {
    var layout = null, child = null;
    while ((layout = page.type.layout || (page.defaultProps && page.defaultProps.layout))) {
      child = React.createElement(page, props, child);
      page = layout;
    }
    return React.renderToStaticMarkup(
      React.createElement(page, props, child)
    );
  }

  function getHTML(page, query) {
    var props = require('./queryStringParse')(query) || {};
    var filename = './app/components/pages/index.html';
    var src = fs.readFileSync(filename, {encoding: 'utf8'});
    var data = assign(page.meta, {
      body: renderAA(page, props)
    });
    return _.template(_.template(src)(data))(props);
  }

  function render(page) {
    return {
      get: function(query) {
        this.res.write(getHTML(page, query));
        this.res.end();
      }
    };
  }

  var router = new director.http.Router({
    '/': render(require('../app/components/pages/Index')),
    '/about': render(require('../app/components/pages/About')),
    '/hotellist/((\w|.)*)': render(require('../app/components/pages/HotelList'))
  });
  router.dispatch(req, res, function (err) {
    if (err) {
      res.writeHead(404);
      res.end();
    }
  });
};
