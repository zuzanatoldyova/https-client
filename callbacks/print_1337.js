var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  console.log(switchCharacters(html));

}

function switchCharacters(string) {
 return string.replace(/a/g, '4').replace(/e/g, '3').replace(/l/g, '1').replace(/o/g, 'O').replace(/s/g, '5').replace(/t/g, '7').replace(/ck/g, 'x').replace(/3r/g, '0r').replace(/you/g, 'j00');

}

getHTML(requestOptions, print1337);