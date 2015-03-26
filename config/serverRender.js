'use strict';

module.exports = function(req, res) {
  var fs = require('fs');
  var director = require('director');
  var React = require('react');
  var assign = require('react/lib/Object.assign');
  var urlrewrite = require('./urlrewrite');
  var _ = require('underscore');

  require('node-jsx').install({harmony: true});

  function getBodyHTML(page, props) {
    var layout = null, child = null;
    while ((layout = page.type.layout || (page.defaultProps && page.defaultProps.layout))) {
      child = React.createElement(page, props, child);
      page = layout;
    }
    return React.renderToStaticMarkup(
      React.createElement(page, props, child)
    );
  }

  function getHTML(action, query) {
    var page = require('../app/components/pages/' + action);
    var props = require('./queryStringParse')(query) || {};

    var filename;
    if (process.env.NODE_ENV === '') {
      filename = './app/templates/index.html';
    } else {
      filename = './dist/index.html';
    }
    var src = fs.readFileSync(filename, {encoding: 'utf8'});
    var data = assign(page.meta, {
      body: getBodyHTML(page, props)
    });
    return _.template(_.template(src)(data))(props);
  }

  function render(action, query) {
    this.res.write(getHTML(action, query));
    this.res.end();
  }

  var router = new director.http.Router();
  router.param('query', /((\w|.)*)/);
  Object.keys(urlrewrite).forEach(function(key) {
    router.get(key, function(query) {render.call(this, urlrewrite[key], query);});
  });

  router.dispatch(req, res, function (err) {
    if (err) {
      res.writeHead(404);
      res.end();
    }
  });
};
