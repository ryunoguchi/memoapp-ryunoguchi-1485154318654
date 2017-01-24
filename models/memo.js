/**
 * http://usejsdoc.org/
 */
var cradle = require('cradle');

var services = JSON.parse(process.env.VCAP_SERVICES);
var credentials = services['cloudantNoSQLDB'][0].credentials;
var host = credentials.host;
var port = credentials.port;
var options = {
		cache : true,
		raw : false,
		secure : true,
		auth : {
			username : credentials.username,
			password : credentials.password
		}
};

var db = new (cradle.Connection)(host, port, options).database('memo');

exports.list = function(callback) {
	db.view('memos/list',{ descending : true}, callback);

};

exports.get = function(id, callback) {
	db.get(id, callback);
};

exports.save = function(id, doc, callback) {
	db.save(id,doc,callback);
};

exports.remove = function(id, callback) {
	db.remove(id, callback);
};
