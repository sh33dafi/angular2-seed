var loaders = require('./loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "app.js",
    path: "dist"
  },
  resolve: {
    root: __dirname,
    extensions: ["", ".ts", ".js", ".json"]
  },
  resolveLoader: {
    modulesDirectories: ["node_modules"]
  },
  module: {
    loaders: loaders
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      hash: true
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 8080,
      server: {
        baseDir: "dist"
      },
      ghostMode: false,
      notify: false
    })
  ]
};
