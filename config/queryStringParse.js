'use strict';

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
        if (Object.prototype.toString.call(queryString[key]) === '[object Array]') {
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
