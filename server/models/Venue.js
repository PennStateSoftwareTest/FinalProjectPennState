
var mongoose = require('mongoose'),
    constants = require('../common/constants'),
    encrypt = require('../common/encryption');

var accountTypes = Object.keys(constants.ACCOUNT_TYPE).map(function(key) {
    return constants.ACCOUNT_TYPE[key];
});

var venueSchema = mongoose.Schema({
  venueName: {type: String, required: "{PATH} is required!"},
  address: {type: String, required: "{PATH} is required!"},
  city: {type: String, required:"{PATH} is required!"},
  state: {type: String, required:"{PATH} is required!"},
  zip: {type:String, requried: "{PATH} is requried!"},
  capacity: {type:Number}
  //date: {type:Date},
  //rate: {type:Number}
  //venueGenre: {type: String}

});
venueSchema.methods = {
    //authenticate: function(passwordToMatch) {
    //    return encrypt.hashPassword(this.salt, passwordToMatch) === this.password_hash;
    //},
    //hasRole: function(role) {
    //    return this.roles.indexOf(role) > -1;
    //}
};
mongoose.model('Venue', venueSchema);
