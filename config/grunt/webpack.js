'use strict';

var webpack = require('webpack');

var DEBUG = ['', 'dev'].indexOf(process.env.NODE_ENV) >= 0;
var AUTOPREFIXER_LOADER = '!autoprefixer?{browsers:[' +
'"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
'"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';

var minimize = DEBUG ? '' : '?minimize';

var plugins = [];
if (!DEBUG) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      //for node_modules
      'warnings': false,
      'drop_debugger': true,
      'drop_console': true
    }
  }));
}

var config = {
  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG
  },

  eslint: {
    configFile: '.eslintrc'
  },

  entry: './app/main.js',
  output: {
    path: '.tmp/js',
    filename: 'main.js'
  },
  plugins: plugins,
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      { test: /\.css$/, loader: 'style!css' + minimize + AUTOPREFIXER_LOADER },
      { test: /\.less$/, loader: 'style!css' + minimize + AUTOPREFIXER_LOADER + '!less' },
      { test: /\.jpg/, loader: 'url?limit=8192&minetype=image/jpg' },
      { test: /\.png/, loader: 'url?limit=8192&minetype=image/png' },
      { test: /\.jsx?$/, loader: 'jsx?harmony&stripTypes' }
    ]
  }
};

module.exports = config;
