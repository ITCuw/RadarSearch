var client = require('./connection.js');

client.indices.putMapping({
  index: 'club',
  type: 'clubinfo',
  body: {
    properties: {
      'name': {
        'type': 'keyword', // type is a required attribute if index is specified
        'index': 'true'
      },
      'tags': {
        'type': 'keyword'
      },
      'description': {
        'type': 'text'
      },
    }
  }
},function(err,resp,status){
    if (err) {
      console.log(err);
    }
    else {
      console.log(resp);
    }
});
