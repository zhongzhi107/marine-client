'use strict';

module.exports = function(grunt) {
  var ma = require('../marine');
  var LIVERELOAD_PORT = ma.port.liveReload;
  var rewriteRulesSnippet = require('grunt-connect-route/lib/utils').rewriteRequest;
  var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
  };

  return {
    rules: require('../routerAPI'),
    dev: {
      options: {
        port: grunt.option('port') || ma.port.www,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0',
        //localhost: 'my.qunar.com',
        localhost: grunt.option('host') || 'localhost',
        //keepalive: true,
        //open: true,
        //debug: true,
        livereload: LIVERELOAD_PORT,
        middleware: function(connect) {
          return [
            require('connect-livereload')({ port: LIVERELOAD_PORT }),
            mountFolder(connect, '.tmp'),
            mountFolder(connect, ma.path.app),
            rewriteRulesSnippet,
            require('../serverRender')
          ];
        }
      }
    },
    dist: {
      options: {
        port: grunt.option('port') || ma.port.www || 9000,
        hostname: '0.0.0.0',
        localhost: grunt.option('host') || 'localhost',
        keepalive: true,
        middleware: function(connect) {
          return [
            mountFolder(connect, ma.path.dist),
            rewriteRulesSnippet,
            require('../serverRender')
          ];
        }
      }
    }
  };
};
