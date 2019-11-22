const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: 'eval-source-map',
  entry: {
    vendors: ['vue', 'vue-router', 'lodash', 'vuex'],
    main: path.resolve(__dirname, '../src/modules/main/index.js')
  },
  output: {
    // pathname
    publicPath: '/',
    // 把服务创建在哪里
    path: path.resolve(__dirname, '../static'),
    filename: '[name].[hash:8].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../static'),
    host: 'localhost',
    port: 8888,
    hot: true,
    hotOnly: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: '我就是那个模版',
      filename: 'index.html',
      template: path.join(__dirname, '../temp/index.html'),
      inject: 'body',
    })
  ]
}
