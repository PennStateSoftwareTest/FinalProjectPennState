/**
 * Created by jnevins on 5/18/16.
 */
var environment = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var expressConfig = require('./server/config/express');
var mongooseConfig = require('./server/config/mongoose');
var passportConfig = require('./server/config/passport');
var routeConfig = require('./server/config/routes');

if(process.env.NODE_ENV == "development" || process.env.NODE_ENV == "test"){
  var env = require("node-env-file");
  env("./.env");
  var Converter = require("csvtojson").Converter;
  var converter = new Converter({});
}

var envconf = require('./server/config/envconf')[environment];
var app = express();

expressConfig(app, envconf);
mongooseConfig(envconf);
passportConfig();
routeConfig(app, envconf);

var server = app.listen(envconf.port);
//TODO: use Winston
console.log('Listening on port ' + envconf.port + '...');

module.exports = server;
