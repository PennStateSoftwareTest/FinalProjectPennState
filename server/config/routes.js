/**
 * Created by jnevins on 5/18/16.
 */
var path = require('path'),
    userService = require('../services/userService');
var venueService = require("../services/venueService");
var bandService = require("../services/bandService");
var CSVUploadService = require("../services/CSVUploadService");
module.exports = function(app, envconf) {

    app.post('/api/user', userService.createUser);
    app.delete("/api/user/delete", userService.deleteUser);
    app.post('/api/venue', venueService.createVenue);
    app.get("/api/venue/getall", venueService.getAllVenues);
    app.post("/api/band", bandService.createBand);
    app.get("/api/band/getall", bandService.getAllBands);
    app.post("/api/band/csv", CSVUploadService.uploadBands);


    app.get('*', function(request, response) {
        response.sendFile(path.join(envconf.rootPath + 'views/index.html'));
    });
}
