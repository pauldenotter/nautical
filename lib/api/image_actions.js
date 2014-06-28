module.exports = function() {
	var client = this,
		exports = {};

	exports.transfer = function(imageId, region, callback) {
		client.exec({
			method: 'POST',
			path: '/images/' + imageId + '/actions',
			body: {
				type: 'transfer',
				region: region
			}
		}, callback);
	};

	exports.getAction = function(imageId, actionId, callback) {
		client.exec({
			path: '/images/' + imageId + '/actions/' + actionId
		}, callback);
	};

	return exports;
}
