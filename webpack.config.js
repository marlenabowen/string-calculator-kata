module.exports = {
  entry: './string-calculator.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: './string-calculator-test.js',
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};
