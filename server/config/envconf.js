/**
 * Created by jnevins on 5/18/16.
 */
var path = require('path');
var rootPath = path.join(__dirname + '/../../server/');


module.exports = {
    development: {
        db: "mongodb://scrs:R0ckOn!$$@ds011298.mlab.com:11298/scrs",//process.env.MONGODB_URI,
        rootPath: rootPath,
        port: process.env.PORT || 3000
    },
    production: {
        db: process.env.MONGODB_URI,
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}
