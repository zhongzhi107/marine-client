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
    options: {
      process: function (content, srcpath) {
        return content.replace(/<\%= body \%>/g,"<%-body%>");
      }
    },
    files: [
      {
        expand: true,
        cwd: '<%=ma.path.app%>',
        src: '{actions,components,constants,core,stores}/**/*',
        dest: '<%=ma.path.dist%>/refs',
      },
      {
        expand: true,
        src: 'config/{queryStringParse,urlrewrite}.js',
        dest: '<%=ma.path.dist%>/refs'
      },
      {
        src: '<%=ma.path.dist%>/index.html',
        dest: '<%=ma.path.dist%>/refs/index.ejs'
      }
    ]
  }
};
