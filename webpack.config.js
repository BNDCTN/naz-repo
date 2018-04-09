var path = require('path');
module.exports = {
    entry: './src/build/js/main.js',
  
    output: {
      path: __dirname + '/src/build/',
      publicPath: './src/build/',
      filename: 'bundle.js'
    },
  
    module: {
      rules: [
        { test: /\.js$/, loader: "babel-loader" }
      ]
    }
  };