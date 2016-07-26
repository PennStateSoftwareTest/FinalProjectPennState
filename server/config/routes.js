
path = require('path'),
bandService = require("../services/bandService");
CSVUploadService = require("../services/CSVUploadService");
    authService = require('../services/authService');
    userService = require('../services/userService');
    venueService = require("../services/venueService");
    suggestionService = require("../services/suggestionService");

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
    app.get("/api/venue", venueService.getVenues);
    app.put('/api/venue/:venueId/ownership/:foreignId/criteria', venueService.putOwnershipCriteria);

    /*
     * Band Routes
     */
    app.post("/api/band", bandService.createBand);
    //TODO: this is wrong; we need to fix it
    app.get("/api/band/findbands", bandService.getAllBands);
    app.post("/api/band/csv", CSVUploadService.uploadBands);
    //TODO: POST is wrong here
      app.post("/api/band/findbands", bandService.findBands);

    /*
     * Suggestion Routes
     */
    app.get("/api/suggestion/:userId", suggestionService.getUserSuggestions);

    /*
     * Base routes
     */
    app.get('*', function(request, response) {
        response.sendFile(path.join(envconf.rootPath + 'views/index.html'));
    });
};
