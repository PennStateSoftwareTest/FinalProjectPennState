/**
 * Created by jnevins on 5/23/16.
 */
var mongoose = require('mongoose'),
    constants = require('../common/constants'),
    encrypt = require('../common/encryption');

var accountTypes = Object.keys(constants.ACCOUNT_TYPE).map(function(key) {
    return constants.ACCOUNT_TYPE[key];
});
var criteria = mongoose.Schema({
  key: String, //TODO: use copnstants
  value: String //TODO: use constants
});

var ownerships = mongoose.Schema({
  foreignId: mongoose.Schema.ObjectId,
  criteria: [criteria]
});

var bandSchema = mongoose.Schema({
  bandName: {type: String, required: "{PATH} is required!"},
  bandManagerName: {type: String, required: "{PATH} is required!"},
  bandManagerEmail: {type: String, required: "{PATH} is required!"},
  bandManagerPhone: {type: String},
  bandAddress: {type: String, required: "{PATH} is required!"},
  bandCity: {type: String, required:"{PATH} is required!"},
  bandState: {type: String, required:"{PATH} is required!"},
  bandZip: {type:String, requried: "{PATH} is requried!"},
  //bandAvailableDate: {type:Date},
  bandWebsite: {type:String},
  bandPayRate: {type:Number},
  bandGenre1: {type: String},
  bandGenre2: {type: String},
  bandGenre3: {type: String},
  ownerships: [ownerships]
});
bandSchema.methods = {
  hasOwner: function(userId) {
      return this.ownerships.some(function(ownership) {
        return ownership.foreignId == userId;
      })
  }
};
mongoose.model('Band', bandSchema);
