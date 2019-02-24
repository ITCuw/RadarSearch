var client = require ('./connection.js');
var argv = require('yargs').argv;
var getJSON = require('get-json');

function results(lookup,callback) {
client.search({
  index: 'club',
  type: 'clubinfo',
  size: 5,
  body: {
    query: {
      match: { 'name': lookup }
    },
  }
},function (error, response,status) {
    if (error){
      console.log('search error: '+error)
    }
    else {
      console.log('--- Response ---');
      console.log('Total hits: ',response.hits.total);
      console.log('--- Hits ---');
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});
}

if (argv.search) {
  var lookup=argv.search;
  console.log("Search term: "+lookup);
  results(lookup);
}

module.exports = {
  results: results
};
