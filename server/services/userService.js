/**
 * Created by jnevins on 5/23/16.
 */
var User = require('mongoose').model('User'),
    encrypt = require('../common/encryption');


exports.readUser = function(request, response, next) {

};

exports.createUser = function(request, response, next) {
    var userData = req.body;
    userData.username = userData.username.toLowerCase();
    userData.salt = encrypt.createSalt();
    userData.password_hash = encrypt.hashPassword(userData.salt, userData.password);

    User.create(userData, function(error, user) {
        if(error) {
            if(error.toString().indexOf('E11000') > -1) {
                error = new Error('Username already in use.');
            }
            res.status(400);
            return res.send({reason:error.toString()});
        }
    })
};

exports.updateUser = function() {

};