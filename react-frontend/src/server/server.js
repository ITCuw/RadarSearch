const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const JSON = require('circular-json');
const PORT = 4000;
var client = require ('./connection.js');
var argv = require('yargs').argv;
var getJSON = require('get-json');
const cors = require('cors');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

app.get('/', function(req, res){
  res.send("Node is running brother");
});

app.get("/search", function (request, response) {
  let query = request.query.query;
  client.search({
    index: 'club',
    type: 'clubinfo',
    body: {
      query: {
        match: { "name": query}
      },
    }
  },function (error, data, status) {
        if (error) {
        return console.log(error);
      }
      else {
        // Send back the response
        response.send(data.hits.hits);
      }
  });
});

app.listen(PORT, () => console.log('wowzers in me trousers, Listening on port ' + PORT));
