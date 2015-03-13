'use strict';

module.exports = function(grunt) {
  var qzzDomain = require('./marine').cdnDomain;
  var cdnRoot;
  switch (grunt.option('deploy-type')) {
    case 'dev':
      cdnRoot = qzzDomain.dev;
      break;
    case 'beta':
      cdnRoot = qzzDomain.beta;
      break;
    case 'prepare':
    case 'prod':
      cdnRoot = qzzDomain.prod;
      break;
    default:
      cdnRoot = '';
      break;
  }

  return cdnRoot;
};
