'use strict';

var util = require('util');

module.exports = function(str, sep, eq) {
  sep = sep || ',';
  eq = eq || '-';

  var queryString = {};

  if (str) {
    str.split(sep).forEach(function(item) {
      var tmp = item.split(eq),
        key = tmp[0],
        value = decodeURIComponent(tmp[1] || '');

      if (queryString[key]) {
        if (util.isArray(queryString[key])) {
          queryString[key].push(value);
        } else {
          queryString[key] = [queryString[key], value];
        }
      }
      else {
        queryString[key] = value;
      }
    });
  }

  return queryString;
};
