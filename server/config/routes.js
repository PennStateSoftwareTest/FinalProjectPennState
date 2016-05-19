/**
 * Created by jnevins on 5/18/16.
 */
var path = require('path');

module.exports = function(app, envconf) {

    app.get('/', function(request, response) {
        response.sendFile(path.join(envconf.rootPath + 'views/index.html'));
    });
}