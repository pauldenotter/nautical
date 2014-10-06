var querystring = require('querystring');

/**
 * Wrapper to provide access to images
 *
 * @class Images
 * @static
 * @see https://developers.digitalocean.com/v2/#images
 */
module.exports = function Images() {
	var client = this,
		exports = {};

	/**
	 * Get a list of all available images
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.images.list(function(err, reply) {});
	 */
	exports.list = function(query, callback) {
		var q = '';

		if (query && 'function' === typeof callback)
			q = '?' + querystring.stringify(query);

		client.exec({
			path: '/images' + q
		}, arguments[arguments.length - 1]);
	};

	/**
	 * Get a single image
	 *
	 * @method fetch
	 * @param {Integer|String} image - id or slug
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.images.fetch(123, function(err, reply) {});
	 */
	exports.fetch = function(image, callback) {
		client.exec({
			path: '/images/' + image
		}, callback);
	};

	/**
	 * Update an image
	 *
	 * @method update
	 * @param {Integer} imageId
	 * @param {Object|String} data
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.images.update(123, {}, function(err, reply) {});
	 */
	exports.update = function(imageId, data, callback) {
		client.exec({
			method: 'PUT',
			path: '/images/' + imageId,
			body: data
		}, callback);
	};

	/**
	 * Remove an image
	 *
	 * @method remove
	 * @param {Integer} imageId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.images.remove(123, function(err, reply) {});
	 */
	exports.remove = function(imageId, callback) {
		client.exec({
			method: 'DELETE',
			path: '/images/' + imageId
		}, callback);
	};

	return exports;
};
