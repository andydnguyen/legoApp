var request = require('request');

const apiKey =
  process.env.ZIPCODE_API_KEY ||
  'hkCt1nW1wF1rppaEmoor7T9G4ta7R5wFSu8l1dokNz8y53gGZHDneWWVosbEYirC';
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

var distance = {
  find: function(req, res, next) {
    request(
      zipCodeURL + apiKey + '/distance.json/' + req.params.zipcode2 + '/mile',
      function(err, response, body) {
        if (!err && response.statusCode == 200) {
          response = JSON.parse(body);
          res.send(response);
        } else {
          console.log(response.statusCode + response.body);
          res.send({ distance: -1 });
        }
      }
    );
  }
};

module.exports = distance;
