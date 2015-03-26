'use strict';

var DEBUG = process.env.NODE_ENV === '';
var AUTOPREFIXER_LOADER = '!autoprefixer?{browsers:[' +
'"Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", ' +
'"Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]}';

var minimize = DEBUG ? '' : '?minimize';

var config = {
  cache: DEBUG,
  debug: DEBUG,

  stats: {
    colors: true,
    reasons: DEBUG
  },

  entry: './app/main.js',
  output: {
    path: '.tmp/js',
    filename: 'main.js'
  },
  plugins: [],
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: 'eslint-loader'
    //   }
    // ],
    loaders: [
      { test: /\.css$/, loader: 'style!css' + minimize + AUTOPREFIXER_LOADER },
      { test: /\.less$/, loader: 'style!css' + minimize + AUTOPREFIXER_LOADER + '!less' },
      { test: /\.jpg/, loader: 'url?limit=8192&minetype=image/jpg' },
      { test: /\.png/, loader: 'url?limit=8192&minetype=image/png' },
      //{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?experimental'}/*,
      { test: /\.jsx?$/, loader: 'jsx?harmony&stripTypes' }
    ]
  }
};

module.exports = config;
