module.exports = function() {
	var client = this,
		exports = {};

	exports.list = function(callback) {
		client.exec({
			path: '/domains'
		}, callback);
	};

	exports.fetch = function(domainName, callback) {
		client.exec({
			path: '/domains/' + domainName
		}, callback);
	};

	exports.create = function(data, callback) {
		client.exec({
			method: 'POST',
			path: '/domains',
			body: data
		}, callback);
	};

	exports.remove = function(domainName, callback) {
		client.exec({
			method: 'DELETE',
			path: '/domains/' + domainName
		}, callback);
	};

	return exports;
}
