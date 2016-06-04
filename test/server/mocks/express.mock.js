/**
 * Created by jnevins on 5/19/16.
 */
var sinon = require('sinon');

//TODO: this needs work
function Mock() {
    return {
        get: sinon.spy()
    }
}

module.exports = {
    getMock: function() {
        return Mock();
    }
};