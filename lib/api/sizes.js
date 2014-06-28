module.exports = function() {
	var client = this,
		exports = {};

	exports.list = function(callback) {
		client.exec({
			path: '/sizes'
		}, callback);
	};

	return exports;
}
