/* eslint-disable */
require('source-map-support').install();

require('babel-register');

var http = require('http');

var express = require('express');
var webpack = require('webpack');
var config = require('./webpack/webpack-config.dev').default;

var compiler = webpack(config);

var app = express();

// Serve hot-reloading bundle to client
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}));
app.use(require("webpack-hot-middleware")(compiler));


var server = http.createServer(app);
server.listen(3000, 'localhost', function (err) {
  if (err) throw err;

  var addr = server.address();

  console.log('Listening at http://%s:%d', addr.address, addr.port);
});
