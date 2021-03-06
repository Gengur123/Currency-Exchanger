const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { resolve } = require('path');
const Dotenv = require('dotenv-webpack'); // new line

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map', // new line
  devServer: { // new line
    contentBase: './dist' // new line
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(), // new line
    new HtmlWebpackPlugin({
      title: 'CurrencyExchanger',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    }
    ]
  }
};