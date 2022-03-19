'use strict';

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config

  /*config.module.rules.push(new webpack.test(/\.js$/))
  config.module.rules.push(new webpack.exclude(/node_modules/))
  config.module.rules.push(new webpack.use.loader('babel-loader'))
  config.module.rules.push(new webpack.use.options.presets(['@babel/preset-env', 'es2015', 'es2016']))*/

  return config;
};
