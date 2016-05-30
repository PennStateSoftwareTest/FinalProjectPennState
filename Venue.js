/**
 * Created by mhabib on 5/29/16.
 */
var mongoose = require('mongoose'),
    constants = require('../common/constants'),
    encrypt = require('../common/encryption');

var accountTypes = Object.keys(constants.ACCOUNT_TYPE).map(function(key) {
    return constants.ACCOUNT_TYPE[key];
});

var VenueSchema = mongoose.Schema({
    venueName: {type: String, required: '{PATH} is required!'},
    venue_manager: {type: String, required: '{PATH} is required!'},
    address: {type: String, required: '{PATH} is required!'},
    city: {type: String, required: '{PATH} is required!'},
    zip_code: {type: Number , required: '{PATH} is required!'},
    How_many_managers : {type: Number , required: '{PATH} is required!'},
    hostedbands: bandSchema. object,
    accountType: {type: String, required: '{PATH} is required!', enum: accountTypes},
    salt: {type: String, required: '{PATH} is required!'},
    password_hash: {type: String, required: '{PATH} is required!'},
    roles: [String]
});
VenueSchema.methods = {
    //authenticate: function(passwordToMatch) {
    //    return encrypt.hashPassword(this.salt, passwordToMatch) === this.password_hash;
    //},
    //hasRole: function(role) {
    //    return this.roles.indexOf(role) > -1;
    //}
};
mongoose.model('band', VenueSchema );