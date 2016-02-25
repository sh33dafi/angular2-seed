module.exports = [
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
];