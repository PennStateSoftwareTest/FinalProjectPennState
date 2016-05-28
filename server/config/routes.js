/**
 * Created by jnevins on 5/18/16.
 */
var path = require('path'),
    userService = require('../services/userService');

module.exports = function(app, envconf) {

    app.post('/api/user', userService.createUser);

    app.get('/', function(request, response) {
        response.sendFile(path.join(envconf.rootPath + 'views/index.html'));
    });
}