'use strict';

module.exports = {
  options: {
    root: '<%=ma.path.app%>',
    dest: '<%=ma.path.dist%>'
  },
  // Entrance files to find usemin block
  html: '<%=ma.path.dist%>/index.html'
};
