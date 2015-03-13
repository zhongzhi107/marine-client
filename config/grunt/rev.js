'use strict';

module.exports = {
  dist: {
    files: {
      src: [
        '<%=ma.path.dist%>/**/*.{js,css,png,jpg,jpeg,gif,ttf,swf,mp3}',
        '!<%=ma.path.dist%>/refs/**'
      ]
    }
  }
};
