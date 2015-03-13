'use strict';

module.exports = {
  options: {
    livereload: require('../marine').port.liveReload
  },
  html: {
    files: [
      'app/index.html'
    ]
  },
  js: {
    files: [
      'app/**/*.js'
    ],
    tasks: [
      'webpack'
    ]
  },
  css: {
    files: ['app/css/*.{css,less}'],
    tasks: [
      'webpack'
    ]
  }
};
