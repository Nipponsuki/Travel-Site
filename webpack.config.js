const path = require('path');

module.exports = {
  entry: ['@babel/polyfill','./app/assets/scripts/App.js','./app/assets/scripts/Vender.js'],
  output: {
    path: path.resolve(__dirname,'./app/temp/js'),
    filename: '[name].js'
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
