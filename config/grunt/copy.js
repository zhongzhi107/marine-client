'use strict';

module.exports = {
  dist: {
    files: [
      {
        src: '<%=ma.path.app%>/templates/index.html',
        dest: '<%=ma.path.dist%>/index.html'
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
        return content.replace(/<\%=body\%>/g,"<%-body%>");
      }
    },
    files: [
      {
        expand: true,
        src: ['lib/queryStringParse.js', 'config/router.js'],
        dest: '<%=ma.path.dist%>/refs'
      },
      {
        src: '<%=ma.path.dist%>/index.html',
        dest: '<%=ma.path.dist%>/refs/index.ejs'
      }
    ]
  }
};
