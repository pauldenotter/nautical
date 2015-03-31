var Base = require('../base');

/**
 * Wrapper to provide access to images
 *
 * @class Images
 * @static
 * @see https://developers.digitalocean.com/v2/#images
 */
module.exports = function Images() {
	var client  = this,
		exports = {},
		base    = new Base(client, 'images');

	/**
	 * Get a list of all available images
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.images.list(function(err, reply) {});
	 */
	exports.list = base.list();

	/**
	 * Get a single image
	 *
	 * @method fetch
	 * @param {Integer|String} image - id or slug
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.images.fetch(123, function(err, reply) {});
	 */
	exports.fetch = base.fetch();

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
	exports.update = base.update();

	/**
	 * Remove an image
	 *
	 * @method remove
	 * @param {Integer} imageId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.images.remove(123, function(err, reply) {});
	 */
	exports.remove = base.remove();

	return exports;
};
