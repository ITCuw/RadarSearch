var client = require('./connection.js');

client.indices.delete({index: 'club'},function(err,resp,status) {
  console.log("delete",resp);
});
