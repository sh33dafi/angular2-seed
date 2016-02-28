var babel = require('babel-core');
var wallabyWebpack = require('wallaby-webpack');
var webpack = require('webpack');

var webpackPostprocessor = wallabyWebpack({
  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
});

module.exports = function () {
  return {
    files: [
      {pattern: 'node_modules/babel-polyfill/browser.js', instrument: false},
      {pattern: 'src/**/*.html', load: false},
      {pattern: 'src/**/*.scss', load: false},
      {pattern: 'src/**/*.css', load: false},
      {pattern: 'src/**/*.ts', load: false},
      {pattern: 'test/**/*.spec.ts', ignore: true},
    ],

    tests: [
      {pattern: 'test/**/*.spec.ts', load: false},
      {pattern: 'node_modules/**/*.js', ignore: true}
    ],

    preprocessors: {
      '**/*.js': file => babel.transform(file.content, {sourceMap: true})
    },
    "testFramework": "mocha",
    postprocessor: webpackPostprocessor,
    bootstrap: function () {
      window.__moduleBundler.loadTests();
    },
    env: {
      runner: require('phantomjs-prebuilt').path,
      params: { runner: '--web-security=false' }
    }
  };
};