var https = require('https');

function getHTML (options, callback) {
  var buf = '';

  https.get(options, function(response) {
    response.setEncoding('utf-8');
    response.on('data', function(data) {
      buf += data;
    });

    response.on('end', function() {
      callback(buf)
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);