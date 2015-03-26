'use strict';

module.exports = {
  all: {
    options: {
      harmony: true
    },
    files: [
      {
        expand: true,
        cwd: '<%=ma.path.app%>',
        src: '{actions,components,constants,core,stores}/**/*.js',
        dest: '<%=ma.path.dist%>/refs',
      }
    ]
  }
};
