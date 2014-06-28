module.exports = function() {
	var client = this,
		exports = {};

	exports.list = function(callback) {
		client.exec({
			path: '/account/keys'
		}, callback);
	};

	exports.fetch = function(key, callback) {
		client.exec({
			path: '/account/keys/' + key
		}, callback);
	};

	exports.create = function(data, callback) {
		client.exec({
			method: 'POST',
			path: '/account/keys',
			body: data
		}, callback);
	};

	exports.update = function(key, data, callback) {
		client.exec({
			method: 'PUT',
			path: '/account/keys/' + key,
			body: data
		}, callback);
	};

	exports.remove = function(key, callback) {
		client.exec({
			method: 'DELETE',
			path: '/account/keys/' + key
		}, callback);
	};

	return exports;
}
