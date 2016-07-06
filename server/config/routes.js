
var path = require('path'),
var bandService = require("../services/bandService");
var CSVUploadService = require("../services/CSVUploadService");
    authService = require('../services/authService');
    userService = require('../services/userService');
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
    app.delete("/api/venue/delete", venueService.deleteVenue);
    //TODO: this is wrong; we need to fix it
    app.get("/api/venue/getall", venueService.getAllVenues);
    app.post("/api/band", bandService.createBand);
    app.get("/api/band/getall", bandService.getAllBands);
    app.post("/api/band/csv", CSVUploadService.uploadBands);


    /*
     * Base routes
     */
    app.get('*', function(request, response) {
        response.sendFile(path.join(envconf.rootPath + 'views/index.html'));
    });
};
