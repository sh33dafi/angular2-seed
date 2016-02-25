module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],

    files: [
      'node_modules/es6-shim/es6-shim.min.js',
      'karma.entry.js'
    ],

    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },

    webpack: require('./webpack/webpack.test'),

    webpackServer: {
      noInfo: true
    },

    reporters: ['dots'],

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    browsers: ['PhantomJS'],

    plugins: [
      require('karma-webpack'),
      'karma-chai',
      'karma-sourcemap-loader',
      'karma-mocha',
      'karma-phantomjs-launcher'
    ]
  });
};