var request = require('request');

var options = {
  url: 'http://j0.hn/urls'
, method: 'post'
, json: true
};

module.exports.shorten = function( url, callback ){
  options.body = { url: url };

  request( options, function( error, res, body ){
    if ( callback ) callback( error || body[':('], body.url ? ('http://' + body.url) : null );
  });
};