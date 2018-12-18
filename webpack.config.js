const path = require('path');

module.exports = {
  entry: ['@babel/polyfill','./app/assets/scripts/App.js'],
  output: {
    path: path.resolve(__dirname,'./app/temp/js'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
