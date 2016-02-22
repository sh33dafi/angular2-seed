var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: ["./src/main.ts"],
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
    loaders: [
      {
        test: /\.ts(x?)$/,
        loader: "babel-loader!ts-loader"},
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.html$/,
        loader: "raw"
      }
    ]
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
