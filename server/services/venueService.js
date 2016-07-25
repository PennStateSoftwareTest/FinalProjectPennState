/**
 * Created by jnevins on 5/23/16.
 */
var Venue = require('mongoose').model('Venue'),
    encrypt = require('../common/encryption');

var self = this;

exports.getVenues = function(request, response) {

    //TODO: security - we need to do an auth check in case the user's session expired

    var params = {};

    //TODO: filter param generation should be more abstract
    if (request.query.userId) {
        params['ownerships.foreignId'] = request.query.userId
    }

    Venue.find(params, function(error, venues) {

        if(error) {
            response.status(500);
            return response.send({reason:error.toString()});
        } else {
            response.json(venues);
        }
    });
};

exports.putOwnershipCriteria = function(request, response) {
    //TODO: security.  Validate the things.  Can a user only update his/her own venues?

    var criteria = request.body;

    var params = {
        '_id': request.query.venueId,
        'ownerships.foreignId': request.query.foreignId
    };

    Venue.findOne(params, function(error, venue) {
        if(error) {
            response.status(500);
            return response.send({reason:error.toString()});
        } else {
            venue.putCriteria(request.query.foreignId, criteria);

            response.status(200);
            response.send();
        }
    });

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

