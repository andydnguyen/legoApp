var request = require('request');

const apiKey =
  process.env.ZIPCODE_API_KEY ||
  'fWBFZIalk9MOrmgOsUuHfsIhic2puh1r5PcCzdonRBrElhjuIqP3JhoQpLmpnM4H';
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

var distance = {
  find: function(req, res, next) {
    request(
      zipCodeURL +
        apiKey +
        '/distance.json/' +
        req.params.zipcode1 +
        '/' +
        req.params.zipcode2 +
        '/mile',
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
