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
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.sizes.list(function(err, reply) {});
	 */
	exports.list = function(callback) {
		client.execList({
			path: '/sizes',
			arrayProperty: 'sizes'
		}, callback);
	};

	return exports;
};
