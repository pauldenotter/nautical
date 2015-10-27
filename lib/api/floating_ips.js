var Base = require('../base');

/**
 * Wrapper providing access to Floating IPs
 *
 * @class FloatingIPs
 * @static
 * @see https://developers.digitalocean.com/v2/#floating-ips
 */
module.exports = function FloatingIPs() {
	var client  = this,
		exports = {},
		base    = new Base(client, 'floating_ips');

	/**
	 * List all floating IPs within your account
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.floatingIps.list(function(err, reply) {});
	 */
	exports.list = base.list();

	/**
	 * Get a single floating IP by it's IP address
	 *
	 * @method fetch
	 * @param {String} IP address
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.floatingIps.fetch('123.123.123.123', function(err, reply) {});
	 */
	exports.fetch = base.fetch();

	/**
	 * Create a new floating IP
	 *
	 * @method create
	 * @param {Object} data
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.floatingIps.create({droplet_id: 1234567}, function(err, reply) {});
	 *
	 *   nauticalClient.floatingIps.create({region: 'nyc3'}, function(err, reply) {});
	 */
	exports.create = base.create();

	/**
	 * Remove a floating IP
	 *
	 * @method remove
	 * @param {String} IP address
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.floatingIps.remove('123.123.123.123', function(err, reply) {});
	 */
	exports.remove = base.remove();

	return exports;
};
