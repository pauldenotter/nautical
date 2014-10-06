var querystring = require('querystring'),
	Base        = require('../base');

/**
 * Wrapper to provide access to sizes
 *
 * @class Sizes
 * @static
 * @see https://developers.digitalocean.com/v2/#sizes
 */
module.exports = function Sizes() {
	var client  = this,
		exports = {},
		base    = new Base(client, 'sizes');

	/**
	 * Get a list of all available droplet sizes
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.sizes.list(function(err, reply) {});
	 */
	exports.list = base.list();

	return exports;
};
