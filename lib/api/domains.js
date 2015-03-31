var Base = require('../base');

/**
 * Wrapper providing access to domains
 *
 * @class Domains
 * @static
 * @see https://developers.digitalocean.com/v2/#domains
 */
module.exports = function Domains() {
	var client  = this,
		exports = {},
		base    = new Base(client, 'domains');

	/**
	 * List all domains within your account
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domains.list(function(err, reply) {});
	 */
	exports.list = base.list();

	/**
	 * Get a single domain by it's domain name
	 *
	 * @method fetch
	 * @param {String} domainName
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domains.fetch('example.com', function(err, reply) {});
	 */
	exports.fetch = base.fetch();

	/**
	 * Create a new domain
	 *
	 * @method create
	 * @param {Object|String} data
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domains.create({}, function(err, reply) {});
	 */
	exports.create = base.create();

	/**
	 * Remove a domain
	 *
	 * @method remove
	 * @param {String} domainName
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domains.remove('example.com', function(err, reply) {});
	 */
	exports.remove = base.remove();

	return exports;
};
