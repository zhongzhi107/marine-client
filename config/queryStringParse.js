'use strict';

module.exports = function(str, sep, eq) {
  sep = sep || ',';
  eq = eq || '-';

  var _GET = {};

  if (str) {
    str.split(sep).forEach(function(item) {
      var tmp = item.split(eq),
        key = tmp[0],
        value = decodeURIComponent(tmp[1] || '');

      if (_GET[key]) {
        if ($.isArray(_GET[key])) {
          _GET[key].push(value);
        } else {
          _GET[key] = [_GET[key], value];
        }
      }
      else {
        _GET[key] = value;
      }
    });
  }

  return _GET;
};
