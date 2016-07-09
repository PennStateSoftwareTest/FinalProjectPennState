/**
 * Created by jnevins on 7/2/16.
 */
var passport = require('passport');

exports.authenticate = function(request, response, next) {

    request.body.email = request.body.email.toLowerCase();

    passport.authenticate('local', null, function(error, user) {
        if (error) {
            return next(error);
        }

        if (!user) {
            response.send({success:false})
        }

        request.logIn(user, function(err) {
            if(err) {return next(err);}

            response.send({success:true, user: sanitizeUser(user)});
        })
    })(request, response, next);
};

function sanitizeUser(user) {

    var jsonUser = user.toJSON();

    delete jsonUser.salt;
    delete jsonUser.password_hash;

    return jsonUser;
}

exports.isAuthenticated = function(request, response, next) {

    if(!request.isAuthenticated()) {
        response.status(401);
        response.end();
    } else {
        next();
    }
};

exports.requiresRole = function(role) {

    return function(req, res, next) {
        if(!req.isAuthenticated() || req.user.roles.indexOf(role) === -1) {
            res.status(403);
            res.end();
        } else {
            next();
        }
    }
};