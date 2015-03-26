'use strict';

module.exports = function(grunt) {

  process.env.NODE_ENV = process.env.NODE_ENV || grunt.option('deploy-type') || '';

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var ma = require('./config/marine');
  var webpackConfig = require('./config/grunt/webpack');

  grunt.initConfig({
    // 项目配置
    ma: ma,

    // 清除文件/目录
    clean: require('./config/grunt/clean'),

    // 复制文件/目录
    copy: require('./config/grunt/copy'),

    // useminPrepare
    useminPrepare: require('./config/grunt/useminPrepare'),

    usemin: {
        // look under this files
        css: '<%=ma.path.dist%>/css/**/*.css',
        html: '<%=ma.path.dist%>/index.html',
        //js: '<%=ma.dist%>/static/js/**/*.js',
        options: {
            // Single item array set to the value of the directory where the currently looked at file is.
            assetsDirs: [
                '<%=ma.path.dist%>',
                '<%=ma.path.dist%>/js',
                '<%=ma.path.dist%>/css'
            ],
            // Extend default settings to support CDN url.
            patterns: require('./config/grunt/useminPattern').pattern()
        }
    },

    /**
     * Static file asset revisioning through content hashing
     */
    rev: require('./config/grunt/rev'),

    // 本地web服务器
    connect: require('./config/grunt/connect')(grunt),

    // 监听文件变化
    watch: require('./config/grunt/watch'),

    webpack: {
      options: webpackConfig,
      dist: {
        plugins: webpackConfig.plugins.concat(
          // new webpack.DefinePlugin({
          //   "process.env": {
          //     // This has effect on the react lib size
          //     "NODE_ENV": JSON.stringify("production")
          //   }
          // }),
          // new webpack.optimize.DedupePlugin(),
          // new webpack.optimize.UglifyJsPlugin()
        )
      }
    },

    jsx2js: require('./config/grunt/jsx2js')
  });

  grunt.registerTask('default', [
    'clean:server',
    'webpack',
    'configureRewriteRules',
    'connect:dev',
    'watch'
  ]);

  grunt.registerTask('server', [
    'default'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'webpack',
    'copy:dist',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    // 'uglify:generated',
    'rev:dist',
    'usemin',
    'refs',
    'configureRewriteRules',
    'connect:dist'
  ]);

  grunt.registerTask('refs', [
    'copy:refs',
    'jsx2js'
  ]);

};
