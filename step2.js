var https = require('https');

function getAndPrintHTML () {
  var buf = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf-8');
    response.on('data', function(data) {
      buf += data;
    });

    response.on('end', function() {
      console.log(buf);
    });
  });

}

getAndPrintHTML();