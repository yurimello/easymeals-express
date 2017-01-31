var url = require('url');
var suggestgrid = require('suggestgrid');

var sgUrlString = 'https://private:3a16190ee95102ef3832e03dc589b821@us-east.suggestgrid.space/fc02fefc-81ec-4770-9fdc-0a949056a822';

var sgUrl = url.parse(sgUrlString);

var auth = sgUrl.auth.split(':');
var user = auth[0];
var pass = auth[1];

// Configure SuggestGrid.
var config = suggestgrid.configuration;
config.basicAuthUserName = user;
config.basicAuthPassword = pass;
config.BASEURI = sgUrlString;


module.exports = suggestgrid;
