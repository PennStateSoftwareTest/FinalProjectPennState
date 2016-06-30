/**
 * Created by jnevins on 5/18/16.
 */
var path = require('path');
var rootPath = path.join(__dirname + '/../../server/');


module.exports = {
    development: {
        db: process.env.MONGODB_URI,
        rootPath: rootPath,
        port: process.env.PORT || 3000
    },
    production: {
        db: process.env.MONGODB_URI,
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}
