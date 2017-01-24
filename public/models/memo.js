/**
 * http://usejsdoc.org/
 */
var docs = {};

exports.list = function(callback) {
	var list = Object.keys(docs).map(function(id) {
		var row = {
				id : id,
				title : docs[id].title,
				updatedAt : docs[id].updatedAt
		};

		return row;
	}).sort(function(a, b) {
		if (a.updatedAt < b.updatedAt)
			return 1;
		if (a.updatedAt > b.updatedAt)
			return -1;

		return 0;
	});

	process.nextTick(function() {
		callback(null, list);
	});
};

exports.get = function(id, callback) {
	var doc = {
			title : docs[id].title,
			content : docs[id].content,
			updatedAt : docs[id].updateAt
	};

	process.nextTick(function() {
		callback(null, doc);
	});

};

exports.save = function(id, doc, callback) {
	docs[id] = {
			title : doc.title,
			content : doc.content,
			updatedAt : doc.updatedAt
	};

	process.nextTick(function() {
		callback();
	});
};

exports.remove = function(id, callback){
	delete docs[id];

	process.nextTick(function(){
		callback();
	});
};
