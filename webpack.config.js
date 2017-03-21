const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

module.exports = {
  entry: {
    loading: ["./index.js"]
  },
  output: {
      path: path.join(__dirname, '/dist/'),
      filename: "[name].js"
  },
  resolve:{
    // must use inverted comma
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: [path.resolve(__dirname, 'node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("css!sass")
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 0
        }
      }
    ]
  },
  // devtool: "source-map",
  "plugins": [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ],
  devtool: "source-map",
  "plugins": [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ output: {comments: false} }),
    new ExtractTextPlugin('[name].css', {allChunks: true})
  ]
};
