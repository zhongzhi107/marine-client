'use strict';

module.exports = {
  dist: {
    files: [{
      dot: true,
      src: [
        '.tmp',
        '<%=ma.path.dist%>/*'
      ]
    }]
  },
  server: '.tmp'
};
