
path = require('path'),
bandService = require("../services/bandService");
CSVUploadService = require("../services/CSVUploadService");
    authService = require('../services/authService');
    userService = require('../services/userService');
    venueService = require("../services/venueService");

module.exports = function(app, envconf) {

    /*
     * User service routes.
     */
    app.post('/api/user', userService.createUser);
    app.delete("/api/user", userService.deleteUser);
  

    /*
     * Authentication routes.
     */
    app.post('/api/login', authService.authenticate);
    app.get('/api/login', authService.isAuthenticated);
    app.post('/api/logout', authService.logout);

    /*
     * Venue service routes
     */
    app.post('/api/venue', venueService.createVenue);
  //  app.delete("/api/venue/", venueService.deleteVenue);
    //TODO: this is wrong; we need to fix it
    app.get("/api/venue/getall", venueService.getAllVenues);

    /*
     * Bnd Routes
     */
    app.post("/api/band", bandService.createBand);
    //TODO: this is wrong; we need to fix it
    app.get("/api/band/getall", bandService.getAllBands);
    //TODO: this is wrong; we need to fix it
    app.post("/api/band/csv", CSVUploadService.uploadBands);


    /*
     * Base routes
     */
    app.get('*', function(request, response) {
        response.sendFile(path.join(envconf.rootPath + 'views/index.html'));
    });
};
