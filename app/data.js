var client = require('./connection.js');
var inputfile = require("../data.json");
var bulk = [];

var makebulk = function(club,callback){
  for (var current in club){
    bulk.push(
      { index: {_index: 'club', _type: 'clubinfo', _id: club[current].PANO } },
      {
        'name': club[current].name,
        'tags': club[current].tags,
        'description': club[current].description
      }
    );
  }
  callback(bulk);
}

var indexall = function(madebulk,callback) {
  client.bulk({
    maxRetries: 5,
    index: 'gov',
    type: 'clubinfo',
    body: madebulk
  },function(err,resp,status) {
      if (err) {
        console.log(err);
      }
      else {
        callback(resp.items);
      }
  })
}

makebulk(inputfile,function(response){
  console.log("Bulk content prepared");
  indexall(response,function(response){
    console.log(response);
  })
});
