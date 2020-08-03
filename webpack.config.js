const path = require('path')
const HTMLwebplugin = require('html-webpack-plugin')
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'build'),
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
    }),
    new WasmPackPlugin({
      crateDirectory: path.join(__dirname, 'bin/image-converter'),
      outDir: path.join(__dirname, 'bin/image-converter/pkg'),
      args: "--log-level warn"
    })
  ],
  devtool: 'eval-cheap-source-map',
  resolve: {
    alias: {
      '@src': path.join(__dirname, 'src')
    }
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 5050
  }
}
