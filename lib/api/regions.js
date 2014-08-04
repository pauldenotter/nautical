var querystring = require('querystring');

/**
 * Wrapper to provide access to regions
 *
 * @class Regions
 * @static
 * @see https://developers.digitalocean.com/v2/#regions
 */
module.exports = function Regions() {
	var client = this,
		exports = {};

	/**
	 * Get a list of all available regions
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.regions.list(function(err, reply) {});
	 */
	exports.list = function(query, callback) {
		var q = '';

		if (query && 'function' === typeof callback)
			q = '?' + querystring.stringify(query);

		client.exec({
			path: '/regions' + q
		}, arguments[arguments.length - 1]);
	};

	return exports;
};
