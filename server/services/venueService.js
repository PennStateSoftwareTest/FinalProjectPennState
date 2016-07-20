/**
 * Created by jnevins on 5/23/16.
 */
var Venue = require('mongoose').model('Venue'),
    encrypt = require('../common/encryption');

var self = this;

exports.getVenues = function(request, response) {

    //TODO: apply filter params here

    Venue.find({}, function(error, venues) {

        if(error) {
          response.status(500);
          return response.send({reason:error.toString()});
        } else {
          response.json(venues);
        }
        })
};

exports.createVenue = function(request, response, next) {
    //TODO: add a validation function

    var venueData = request.body,
        callback = function(error, venue) {
            //TODO: clean this stuff up
            if(error) {
                response.status(400);
                return response.send({reason:error.toString()});
            } else {
                response.status(200);
                response.send(venue);
            }
        };

    self.insertVenue(venueData, callback);
};

exports.insertVenue = function(venueData, callback) {
    Venue.create(venueData, callback);
};

