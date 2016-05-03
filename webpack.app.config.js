var fs      = require('fs');
var webpack = require('webpack');

function readExternals() {
  // We need to exclude node_modules, otherwise webpack will bundle them
  var nodeModules = {};

  fs.readdirSync('./node_modules')
    .filter(function (x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
      nodeModules[mod] = 'commonjs ' + mod;
    });

  return nodeModules;
}

module.exports = {
  target:      'web',
  node:        {
    __dirname:  false,
    __filename: true
  },
  entry: './components/app.jsx',
  externals: {
    "react" :"React",
    "jquery" :"jQuery",
    "react-dom" :"ReactDOM"
  },
  output: {
    path: './build',
    filename: 'bundle.app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
