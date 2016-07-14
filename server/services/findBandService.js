
var Band = require('mongoose').model('Band');
    //encrypt = require('../common/encryption');


// exports.readUser = function(request, response, next) {
//
// };

exports.findBands = function(request, response, next) {
    var bandRequestData = request.body;
    Band.find({
    bandGenre: bandRequestData.Genre,
    //bandAvailableDate: bandRequestData,
    //age: { $gt: 17, $lt: 66 },
    //likes: { $in: ['vaporizing', 'talking'] }
  }).
  //limit(10).
  //sort({ occupation: -1 }).
  //select{}.
  exec(function(err, bands){
    if(err) throw err;
    console.log(bands);
    response.send(bands);
    return bands;
  });
};
