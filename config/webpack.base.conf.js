const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const utils = require('./utils')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: utils.resolvePath('src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name].[hash:7].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: utils.resolvePath(),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: utils.resolvePath('public'),
          to: '[name].[ext]',
          globOptions: {
            ignore: ['index.html'],
          },
        },
      ],
    }),
  ],
}
