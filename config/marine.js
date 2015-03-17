'use strict';

module.exports = {
  port:  {
    www: 9002,
    liveReload: 35733
  },

  path: {
    // app src
    app: 'app',
    // dist
    dist: 'dist'
  },

  // 访问不同环境对应的qzz域名
  cdnDomain: {
    dev: 'http://localhost:9002',
    beta: 'http://mobileqzz.beta.qunar.com/xx/prd',
    prod: 'http://qunarzz.com/xx/prd'
  },
};
