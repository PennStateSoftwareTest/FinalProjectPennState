
var Band = require('mongoose').model('Band'),
    encrypt = require('../common/encryption');


exports.getAllBands = function(request, response) {
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
  Venue.find({}, (err, bands)=>{
    if(err){
      return response.send(err);
    }else{
      response.json(bands);
    }
  })
};

exports.createBand = function(request, response, next) {
    var bandData = request.body;
    console.log(request.body);

    //TODO: add a validation function
    //userData.email = userData.email.toLowerCase();
  //  userData.salt = encrypt.createSalt();
    //userData.password_hash = encrypt.hashPassword(userData.salt, userData.password);



    Band.create(bandData, function(error, band) {
        //TODO: clean this stuff up
        if(error) {

            response.status(400);
            return response.send({reason:error.toString()});
        } else {
            response.status(200);
            response.send(band);
        }
    })
};

exports.updateBand = function() {

};

exports.deleteBand = function() {

};
