if(process.env.NODE_ENV == "development"){
  var url = "http://localhost:3000";
}else{
  var url = "http://streetcorner2rockstar.com";
}
exports.uploadBands = function(request, response, next) {
  var data = request.body;
  console.log(request.body);
  console.log(data[0]);
  var Converter = require("csvtojson").Converter;
  var converter = new Converter({constructResult:false});
  converter.on("record_parsed", function(jsonObj){
    console.log(jsonObj);
    require("request").post(url+"/api/band").form(jsonObj);
  });
  require("request").get(data[0]).pipe(converter);
};
