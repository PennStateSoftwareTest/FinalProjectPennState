/**
 * Created by jnevins on 5/23/16.
 */
var User = require('mongoose').model('User'),
    encrypt = require('../common/encryption'),
    venueService = require('./venueService');

exports.createUser = function(request, response, next) {
    var userData = request.body;

    //TODO: add a validation function
    userData.email = userData.email.toLowerCase();
    userData.salt = encrypt.createSalt();
    userData.password_hash = encrypt.hashPassword(userData.salt, userData.password);

    User.create(userData, function(error, user) {
        //TODO: clean this stuff up
        if(error) {
            if(error.toString().indexOf('E11000') > -1) {
                error = new Error('email already in use.');
            }
            response.status(400);
            return response.send({reason:error.toString()});
        } else {
            response.status(200);
            response.send(user);
        }
    })
};

exports.deleteUser = function(request, response) {
  var email_delete = request.body.email;
  User.findOneAndRemove({email: email_delete}, function(err, removed){
    //response.status(200);
    //response.send(removed);
    // if(err){
    //   response.status(400);
    //   return response.send({"reason":error.toString()});
    // }
    response.status(200);
    return response.send(removed);

  });
  //response.status(400);
  //response.send({"reason":"Didnt enter remove function"});
  // if(data.deletedCount < 1){
  //   response.status(400);
  //   return response.send({reason:"Failed"});
  // }else{
  //  response.status(200);
  //   response.send();
  // }
};