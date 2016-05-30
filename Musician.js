/**
 * Created by mhabib on 5/29/16.
 */
var mongoose = require('mongoose'),
    constants = require('../common/constants'),
    encrypt = require('../common/encryption');

var accountTypes = Object.keys(constants.ACCOUNT_TYPE).map(function(key) {
    return constants.ACCOUNT_TYPE[key];
});

var musicianSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required!'},
    lastName: {type: String, required: '{PATH} is required!'},
    userid: {type: String, required: '{PATH} is required!', unique: true},
    email: {type: String, required: '{PATH} is required!'},
    phone_no: {type: Number , required: '{PATH} is required!'},
    instrument: {type : String , required: '{PATH} is required!' },
    other_instrument: {type : String },
    Pay_rate: {type: Number , required: '{PATH} is required!'},
    Band: bandschema.object,
    Manager: {type :String, required:'{PATH} is required!'},
    accountType: {type: String, required: '{PATH} is required!', enum: accountTypes},
    salt: {type: String, required: '{PATH} is required!'},
    password_hash: {type: String, required: '{PATH} is required!'},
    roles: [String]
});
musicianSchema.methods = {
    //authenticate: function(passwordToMatch) {
    //    return encrypt.hashPassword(this.salt, passwordToMatch) === this.password_hash;
    //},
    //hasRole: function(role) {
    //    return this.roles.indexOf(role) > -1;
    //}
};
mongoose.model('Musician', musicianSchema );