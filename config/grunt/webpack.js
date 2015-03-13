'use strict';

module.exports = {
  cache: false,
  entry: './app/main.js',
  output: {
    path: '.tmp/js',
    filename: 'main.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css?minimize' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.gif/, loader: 'url?limit=8192&minetype=image/gif' },
      { test: /\.jpg/, loader: 'url?limit=8192&minetype=image/jpg' },
      { test: /\.png/, loader: 'url?limit=8192&minetype=image/png' },
      { test: /\.jsx?$/, loader: 'jsx?harmony&stripTypes' }
    ]
  },
  plugins: []
};
