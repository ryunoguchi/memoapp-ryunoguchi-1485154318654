/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./routes');

// create a new express server
var app = express();

// view
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middle
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(methodOverride('_method'));

// ルーティング
app.use('/',routes);

// serve the files out of ./public as our main files
//app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
//var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
//app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
//  console.log("server starting on " + appEnv.url);
//});

var server = app.listen(process.env.PORT || 3000, function(){
	console.log('Listening on port %d', server.address().port);

});
