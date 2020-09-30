require('@babel/register');
require('dotenv').config();

const path = require('path');
const webpackConfig = require('./webpack/index');
const DEVELOPMENT = process.env.NODE_ENV === 'development';

module.exports = {
  configureWebpack: webpackConfig.default,
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.PORT || 8001,
    compress: !DEVELOPMENT,
    inline: DEVELOPMENT,
    hot: DEVELOPMENT,
    writeToDisk: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};
