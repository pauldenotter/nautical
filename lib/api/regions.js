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
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.regions.list(function(err, reply) {});
	 */
	exports.list = function(callback) {
		client.execList({
			path: '/regions',
			arrayProperty: 'regions'
		}, callback);
	};

	return exports;
};
