const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseWebpackConfig = require('./webpack.base.conf')
const utils = require('./utils')

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  // https://webpack.js.org/configuration/devtool/
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      template: utils.resolvePath('public/index.html'),
      inject: true,
    }),
  ],
  devServer: {
    contentBase: utils.resolvePath('public'),
    port: 3000,
    open: true,
  },
  performance: {
    hints: false,
  },
})

module.exports = webpackConfig
