var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

    https.get(requestOptions, function (response) {
        var data = '';
        response.on('data', function (chunk) {
            data += chunk;
        });
        
        response.on('end', function() {
            console.log('Response stream complete.');
            console.log(data);
        });
    });
}


 getAndPrintHTML();
