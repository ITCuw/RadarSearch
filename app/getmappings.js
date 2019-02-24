var client = require('./connection.js');

client.indices.getMapping({
    index: 'club',
    type: 'clubinfo',
  },
function (error,response) {
    if (error){
      console.log(error.message);
    }
    else {
      console.log("Mappings:\n",response.club.mappings.clubinfo.properties);
    }
});
