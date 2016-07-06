/**
 * Created by jnevins on 5/26/16.
 */
var mongoose = require('mongoose'),
    userModel = require('../models/User');
    venueModel = require("../models/Venue");
  bandModel = require("../models/Band");
  
module.exports = function(envConf) {

    mongoose.connect(envConf.db);
    var db = mongoose.connection;

    //TODO: use Winston
    db.on('error', console.error.bind(console, 'connection error...'));

    db.once('open', function() {
        //TODO: use winston for logging
        console.log('scrs db opened');
    });
};
