'use strict';

module.exports = {
  dist: {
    files: [
      {
        expand: true,
        cwd: '<%=ma.path.app%>/components/pages',
        dest: '<%=ma.path.dist%>',
        src: '**/*.html'
      },
      {
        dest: '<%=ma.path.dist%>/js/main.js',
        src: '.tmp/js/main.js'
      },
      {
        expand: true,
        cwd: '<%=ma.path.app%>/css',
        dest: '<%=ma.path.dist%>/css',
        src: ['fonts/*.ttf']
      }
    ]
  },

  refs: {
    files: [
      {
        expand: true,
        cwd: '<%=ma.path.app%>',
        dest: '<%=ma.path.dist%>/refs',
        src: [
          '{actions,components,constants,core,stores}/**/*'
        ]
      },
      {
        expand: true,
        src: 'config/{queryStringParse,urlrewrite}.js',
        dest: '<%=ma.path.dist%>/refs'
      },
      {
        dest: '<%=ma.path.dist%>/index.html',
        src: '<%=ma.path.dist%>/refs/index.html'
      }
    ]
  }
};
