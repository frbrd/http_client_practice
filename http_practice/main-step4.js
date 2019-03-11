var https = require('https');

function getHTML (options, callback) {
  
  https.get(options, function (response) {
    var data = '';

      response.on('data', function (chunk) {
        data += chunk;
      
      });
      response.on('end', function () {
        console.log('That\'s it');
        callback(data);
      });
  })
  

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);