/**
 * Created by jnevins on 5/23/16.
 */
var Venue = require('mongoose').model('Venue'),
    encrypt = require('../common/encryption');


exports.getAllVenues = function(request, response) {
  //console.log("In services getAllVenues");
  // Venue.find(function(err, venues){
  //   if(err){
  //     response.status(400);
  //     return response.send({reason:err.toString()});
  //   }else{
  //     console.log(venues);
  //     response.status(200);
  //     response.send(venues);
  //   }
  // });
  Venue.find({}, (err, venues)=>{
    if(err){
      return response.send(err);
    }else{
      response.json(venues);
    }
  })
};

exports.createVenue = function(request, response, next) {
    var venueData = request.body;
    console.log(request.body);

    //TODO: add a validation function
    //userData.email = userData.email.toLowerCase();
  //  userData.salt = encrypt.createSalt();
    //userData.password_hash = encrypt.hashPassword(userData.salt, userData.password);



    Venue.create(venueData, function(error, venue) {
        //TODO: clean this stuff up
        if(error) {

            response.status(400);
            return response.send({reason:error.toString()});
        } else {
            response.status(200);
            response.send(venue);
        }
    })
};

exports.updateVenue = function() {

};

exports.deleteVenue = function() {

};
