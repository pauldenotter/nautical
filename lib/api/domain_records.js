module.exports = function() {
	var client = this,
		exports = {};

	exports.list = function(domainName, callback) {
		client.exec({
			path: '/domains/' + domainName + '/records'
		}, callback);
	};

	exports.fetch = function(domainName, recordId, callback) {
		client.exec({
			path: '/domains/' + domainName + '/records/' + recordId
		}, callback);
	};

	exports.create = function(domainName, data, callback) {
		client.exec({
			method: 'POST',
			path: '/domains/' + domainName + '/records',
			body: data
		}, callback);
	};

	exports.update = function(domainName, recordId, data, callback) {
		client.exec({
			method: 'PUT',
			path: '/domains/' + domainName + '/records/' + recordId,
			body: data
		}, callback);
	};

	exports.remove = function(domainName, recordId, callback) {
		client.exec({
			method: 'DELETE',
			path: '/domains/' + domainName + '/records/' + recordId
		}, callback);
	};

	return exports;
}
