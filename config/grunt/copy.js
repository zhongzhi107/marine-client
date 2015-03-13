'use strict';

module.exports = {
  html: {
    expand: true,
    cwd: '<%=ma.path.app%>/components/pages',
    dest: '<%=ma.path.dist%>',
    src: '**/*.html'
  },

  index: {
    dest: '<%=ma.path.dist%>/refs/index.html',
    src: '<%=ma.path.dist%>/index.html'
  },

  mainjs: {
    dest: '<%=ma.path.dist%>/js/main.js',
    src: '.tmp/js/main.js'
  },

  refs: {
    dest: '<%=ma.path.dist%>/refs/main.js',
    src: '.tmp/js/main.js'
  },

  css: {
    expand: true,
    cwd: '<%=ma.path.app%>/css',
    dest: '<%=ma.path.dist%>/css',
    src: ['fonts/*.ttf']
  }
};
