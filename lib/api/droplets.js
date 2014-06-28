module.exports = function() {
	var client = this,
		exports = {};

	exports.list = function(callback) {
		client.exec({
			path: '/droplets'
		}, callback);
	};

	exports.fetch = function(dropletId, callback) {
		client.exec({
			path: '/droplets/' + dropletId
		}, callback);
	};

	exports.fetchKernels = function(dropletId, callback) {
		client.exec({
			path: '/droplets/' + dropletId + '/kernels'
		}, callback);
	};

	exports.fetchSnapshots = function(dropletId, callback) {
		client.exec({
			path: '/droplets/' + dropletId + '/snapshots'
		}, callback);
	};

	exports.fetchBackups = function(dropletId, callback) {
		client.exec({
			path: '/droplets/' + dropletId + '/backups'
		}, callback);
	};

	exports.create = function(data, callback) {
		client.exec({
			method: 'POST',
			path: '/droplets',
			body: data
		}, callback);
	};

	exports.remove = function(dropletId, callback) {
		client.exec({
			method: 'DELETE',
			path: '/droplets/' + dropletId
		}, callback);
	};

	return exports;
}
