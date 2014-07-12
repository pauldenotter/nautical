var querystring = require('querystring');

/**
 * Wrapper to provide access to sizes
 *
 * @class Sizes
 * @static
 * @see https://developers.digitalocean.com/v2/#sizes
 */
module.exports = function Sizes() {
	var client = this,
		exports = {};

	/**
	 * Get a list of all available droplet sizes
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.sizes.list(function(err, reply) {});
	 */
	exports.list = function(query, callback) {
		var q = '';

		if (query && 'function' === typeof callback)
			q = '?' + querystring.stringify(query);

		client.exec({
			path: '/sizes' + q
		}, arguments[arguments.length - 1]);
	};

	return exports;
};
