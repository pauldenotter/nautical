module.exports = function() {
	var client = this,
		exports = {};

	exports.list = function(callback) {
		client.exec({
			path: '/images'
		}, callback);
	};

	exports.fetch = function(image, callback) {
		client.exec({
			path: '/images/' + image
		}, callback);
	};

	exports.update = function(imageId, data, callback) {
		client.exec({
			method: 'PUT',
			path: '/images/' + image,
			body: data
		}, callback);
	};

	exports.remove = function(imageId, callback) {
		client.exec({
			method: 'DELETE',
			path: '/images/' + imageId
		}, callback);
	};

	return exports;
}
