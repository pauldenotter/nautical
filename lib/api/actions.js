module.exports = function() {
	var client = this,
		exports = {};

	exports.list = function(callback) {
		client.exec({
			path: '/actions'
		}, callback);
	};

	exports.fetch = function(actionId, callback) {
		client.exec({
			path: '/actions/' + actionId
		}, callback);
	}

	return exports;
}
