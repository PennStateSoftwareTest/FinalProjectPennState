/**
 * Created by jnevins on 5/18/16.
 */
var path = require('path'),
    authService = require('../services/authService'),
    userService = require('../services/userService'),
    venueService = require("../services/venueService");

module.exports = function(app, envconf) {

    /*
     * User service routes.
     */
    app.post('/api/user', userService.createUser);
    //TODO: this is wrong; we need to fix it
    app.delete("/api/user/delete", userService.deleteUser);

    /*
     * Authentication routes.
     */
    app.post('/api/login', authService.authenticate);

    /*
     * Venue service routes
     */
    app.post('/api/venue', venueService.createVenue);
    //TODO: this is wrong; we need to fix it
    app.get("/api/venue/getall", venueService.getAllVenues);

    /*
     * Base routes
     */
    app.get('*', function(request, response) {
        response.sendFile(path.join(envconf.rootPath + 'views/index.html'));
    });
};