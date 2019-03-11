var https = require('https');

function getHTML (options, callback) {
  
  
    https.get(options, function (response) {
      var data = '';
  
        response.on('data', function (chunk) {
          data += chunk;
        
        });
        response.on('end', function () {
          callback(data);
        });
    })

}


module.exports = {getHTML};