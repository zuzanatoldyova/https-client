var https = require('https');

function getAndPrintHTML (options) {
  var buf = '';

  https.get(options, function(response) {
    response.setEncoding('utf-8');
    response.on('data', function(data) {
      buf += data;
    });

    response.on('end', function() {
      console.log(buf);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);