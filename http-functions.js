var https = require('https');

module.exports = function getHTML (options, callback) {
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
