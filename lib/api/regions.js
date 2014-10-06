var querystring = require('querystring'),
	Base        = require('../base');

/**
 * Wrapper to provide access to regions
 *
 * @class Regions
 * @static
 * @see https://developers.digitalocean.com/v2/#regions
 */
module.exports = function Regions() {
	var client  = this,
		exports = {},
		base    = new Base(client, 'regions');

	/**
	 * Get a list of all available regions
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.regions.list(function(err, reply) {});
	 */
	exports.list = base.list();

	return exports;
};
