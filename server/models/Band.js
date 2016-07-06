/**
 * Created by jnevins on 5/23/16.
 */
var mongoose = require('mongoose'),
    constants = require('../common/constants'),
    encrypt = require('../common/encryption');

var accountTypes = Object.keys(constants.ACCOUNT_TYPE).map(function(key) {
    return constants.ACCOUNT_TYPE[key];
});

var bandSchema = mongoose.Schema({
  bandName: {type: String, required: "{PATH} is required!"},
  bandAddress: {type: String, required: "{PATH} is required!"},
  bandCity: {type: String, required:"{PATH} is required!"},
  bandState: {type: String, required:"{PATH} is required!"},
  bandZip: {type:String, requried: "{PATH} is requried!"},
  bandAvailableDate: {type:Date},
  bandWebsite: {type:String},
  bandPayRate: {type:Number}

});
bandSchema.methods = {
    //authenticate: function(passwordToMatch) {
    //    return encrypt.hashPassword(this.salt, passwordToMatch) === this.password_hash;
    //},
    //hasRole: function(role) {
    //    return this.roles.indexOf(role) > -1;
    //}
};
mongoose.model('Band', bandSchema);
