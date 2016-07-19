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

var userSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required!'},
    lastName: {type: String, required: '{PATH} is required!'},
    email: {
        type: String,
        required: '{PATH} is required!',
        unique: true
    },
    phoneNumber: {type: Number, unique: true},
     accountType: {type: String, enum: accountTypes},
    // accountType: {type: String, required: '{PATH} is required!', enum: accountTypes},
    salt: {type: String, required: '{PATH} is required!'},
    password_hash: {type: String, required: '{PATH} is required!'},
    roles: [String],
    ownerships: [ownerships]
});
userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encrypt.hashPassword(this.salt, passwordToMatch) === this.password_hash;
    },
    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
};
mongoose.model('User', userSchema);
