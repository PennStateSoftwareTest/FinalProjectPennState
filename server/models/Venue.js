
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

var venueSchema = mongoose.Schema({
  venueName: {type: String, required: "{PATH} is required!"},
  address: {type: String, required: "{PATH} is required!"},
  city: {type: String, required:"{PATH} is required!"},
  state: {type: String, required:"{PATH} is required!"},
  zip: {type:String, requried: "{PATH} is requried!"},
  capacity: {type:Number},
  ownerships: [ownerships]
});
venueSchema.methods = {
    hasOwner: function(userId) {
        return this.ownerships.some(function(ownership) {
          return ownership.foreignId == userId;
        })
    },
    putCriteria: function(userId, criteria) {
        this.ownerships.some(function(ownership, index) {
            if (ownership.foreignId == userId) {
                this.ownerships[index].criteria = criteria;
                this.save();
            }
        }.bind(this));
    }
};
mongoose.model('Venue', venueSchema);
