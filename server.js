/**
 * Created by jnevins on 5/18/16.
 */
var express = require('express');
var expressConfig = require('./server/config/express');
var routeConfig = require('./server/config/routes');

var envconf = require('./server/config/envconf');
var app = express();

expressConfig(app, envconf);
routeConfig(app, envconf);

app.listen(envconf.port);
console.log('Listening on port ' + envconf.port + '...');