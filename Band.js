/**
 * Created by mhabib on 5/29/16.
 */
var mongoose = require('mongoose'),
    constants = require('../common/constants'),
    encrypt = require('../common/encryption');

var accountTypes = Object.keys(constants.ACCOUNT_TYPE).map(function(key) {
    return constants.ACCOUNT_TYPE[key];
});

var bandSchema = mongoose.Schema({
    bandName: {type: String, required: '{PATH} is required!'},
    members: {type: String, required: '{PATH} is required!'},
    band_manager: {type: String, required: '{PATH} is required!'},
    No_of_members: {type: Number , required: '{PATH} is required!'},
    accountType: {type: String, required: '{PATH} is required!', enum: accountTypes},
    salt: {type: String, required: '{PATH} is required!'},
    password_hash: {type: String, required: '{PATH} is required!'},
    roles: [String]
});
bandSchema.methods = {
    //authenticate: function(passwordToMatch) {
    //    return encrypt.hashPassword(this.salt, passwordToMatch) === this.password_hash;
    //},
    //hasRole: function(role) {
    //    return this.roles.indexOf(role) > -1;
    //}
};
mongoose.model('band', bandSchema );