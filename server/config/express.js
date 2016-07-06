/**
 * Created by jnevins on 5/18/16.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app, envconf) {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(session({
        secret: 'rock your face off',
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());


    app.use('/app',  express.static(envconf.rootPath + '/../app'));
    app.use('/bower_components',  express.static(envconf.rootPath + '/../bower_components'));
    app.use('/node_modules',  express.static(envconf.rootPath + '/../node_modules'));
    app.use('/systemjs.config.js',  express.static(envconf.rootPath + '/../systemjs.config.js'));
    app.use('/icons',  express.static(envconf.rootPath + '/../icons'));
}