
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
  Band.find({}, function (err, bands){
    // if(err){
    //   return response.send(err);
    // }else{
      response.json(bands);
    //}
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
//
// exports.updateBand = function() {
//
// };
//
// exports.deleteBand = function() {
//
// };


exports.findBands = function(request, response, next) {
    var bandRequestData = request.body;
    //console.log(request.body);
    var counter = 0;
    for(var i = 0; i < 3; i++){
      if(bandRequestData.Genre[i] != ""){
        counter++;
      }
    }
    if(counter == 1){
      Band.find({
          $and:[
            {$or:[{bandGenre1: {$in:bandRequestData.Genre}}, {bandGenre2: {$in:bandRequestData.Genre}}, {bandGenre3: {$in:bandRequestData.Genre}}]},
            {bandPayRate:{$lte:bandRequestData.Rate}}
          ]
      }).
      exec(function(err, bands){
        // if(err) {
        //
        //     response.status(400);
        //     return response.send({reason:err.toString()});
        // } else {
            //console.log(bands);
            response.status(200);
            response.send(bands);

        //}
      });
    }else if(counter == 2){
      Band.find({
        $and:[
          {$or:
              [
                {$and:[{bandGenre1:{$in:bandRequestData.Genre}}, {bandGenre2:{$in:bandRequestData.Genre}}]},
                {$and:[{bandGenre1:{$in:bandRequestData.Genre}}, {bandGenre3:{$in:bandRequestData.Genre}}]},
                {$and:[{bandGenre2:{$in:bandRequestData.Genre}}, {bandGenre3:{$in:bandRequestData.Genre}}]},
              ]},
          {bandPayRate:{$lte:bandRequestData.Rate}}
        ]
      }).
      exec(function(err, bands){
        // if(err) {
        //
        //     response.status(400);
        //     return response.send({reason:err.toString()});
        // } else {
            //console.log(bands);
            response.status(200);
            response.send(bands);

        //}
      });
    }else if(counter == 3){
        Band.find({
                $and:[{bandGenre1:{$in:bandRequestData.Genre}}, {bandGenre2:{$in:bandRequestData.Genre}}, {bandGenre3:{$in:bandRequestData.Genre}},  {bandPayRate:{$lte:bandRequestData.Rate}}]
        }).
        exec(function(err, bands){
          // if(err) {
          //
          //     response.status(400);
          //     return response.send({reason:err.toString()});
          // } else {
              //console.log(bands);
              response.status(200);
              response.send(bands);

          //}
        });
    }else{
      Band.find({bandPayRate:{$lte:bandRequestData.Rate}}, function (err, bands){
        // if(err){
        //   return response.send(err);
        // }else{
          response.json(bands);
        //}
      })
    }
};
