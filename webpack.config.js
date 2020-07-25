const path = require('path')
const HTMLwebplugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '/.build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HTMLwebplugin({
      template: './public/index.html'
    })
  ],
  devtool: 'eval-cheap-source-map',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src')
    }
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 5050
  }
}
