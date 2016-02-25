var loaders = require('./loaders');

module.exports = {
  entry: "./src/main.ts",
  output: {
    filename: "app.js",
    path: "tmp"
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
  devtool: "source-map-inline"
};
