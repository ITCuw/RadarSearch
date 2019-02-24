var argv = require('yargs').argv;
var functions = require('./functions.js');

if (argv.search) {
  functions.results(argv.search, function(results) {
      console.log(results);
  });
}
