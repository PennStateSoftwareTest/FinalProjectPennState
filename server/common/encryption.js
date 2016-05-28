/**
 * Created by jnevins on 5/26/16.
 */
var crypto = require('crypto');

exports.createSalt = function() {
    return crypto.randomBytes(128).toString('base64');
}

exports.hashPassword = function(salt, password) {
    var hmac = crypto.createHmac('sha512', salt);
    return hmac.update(password).digest('hex');
}