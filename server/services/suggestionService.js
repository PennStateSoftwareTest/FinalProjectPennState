/**
 * Created by jnevins on 7/24/16.
 */
var Venue = require('mongoose').model('Venue'),
    Band = require('mongoose').model('Band'),
    Q = require('q');


//TODO: this is really ugly code... make it OO.
exports.getUserSuggestions = function(request, response) {

    //TODO: validation

    var userId = request.query.userId;
    var suggestions = [];

    Venue.find({
        'ownerships.foreignId': userId
    }).exec()
        .then(processVenues)
        .catch(function(error) {
            response.status(500);
            return response.send({reason:error.toString()});
        });

    function processVenues(venues) {

        var promises = [];

        venues.forEach(function(venue) {
            var ownership = venue.ownerships.filter(function(ownership) {
                return ownership.foreignId == userId;
            })[0];

            promises.push(findBands(venue, ownership.criteria));
        });

        Q.all(promises).then(sendData);
    }

    function findBands(venue, criteria) {

        var bandCriteria = mapBandCriteria(criteria);

        return Band.find(bandCriteria).exec().then(function(bands) {
            var venueObject = venue.toObject();
            venueObject.bands = processBands(bands);

            suggestions.push(venueObject);
        });
    }

    function mapBandCriteria(criteria) {
        var searchCriteria = {};

        criteria.forEach(function(criterion) {
            switch(criterion.key) {
                case 'genre':
                    searchCriteria.bandGenre1 = criterion.value;
                    break;
                default:
                    //noop
                    (function(){})();
            }
        });

        return searchCriteria;
    }

    // We only want to send 3 sugestions
    function processBands(bands) {
        if (bands.length < 4) {
            return bands;
        }

        var indices = generateRandomIndices(bands.length-1);

        return bands.filter(function(band, index) {
            return indices.indexOf(index) > -1;
        })
    }

    function generateRandomIndices(maxNumber) {

        var indices = [];

        for (var i = 0; i < 3; i++) {
            indices[i] = Math.floor(Math.random() * (maxNumber + 1));
        }

        return indices;
    }

    function sendData() {
        response.status(200);
        response.json(suggestions);
        response.send();
    }
};