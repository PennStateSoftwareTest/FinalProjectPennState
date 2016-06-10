/**
 * Created by jnevins on 5/23/16.
 */
var User = require('mongoose').model('User'),
    encrypt = require('../common/encryption');


exports.readUser = function(request, response, next) {

};

exports.createUser = function(request, response, next) {
    var userData = request.body;
    console.log(request.body);

    //TODO: add a validation function
    userData.username = userData.username.toLowerCase();
    userData.salt = encrypt.createSalt();
    userData.password_hash = encrypt.hashPassword(userData.salt, userData.password);

    User.create(userData, function(error, user) {
        //TODO: clean this stuff up
        if(error) {
            if(error.toString().indexOf('E11000') > -1) {
                error = new Error('Username already in use.');
            }
            response.status(400);
            return response.send({reason:error.toString()});
        } else {
            response.status(200);
            response.send();
        }
    })
};

exports.updateUser = function() {

};
