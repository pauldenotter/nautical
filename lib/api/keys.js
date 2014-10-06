var querystring = require('querystring'),
	Base        = require('../base');

/**
 * Wrapper to provide access to keys
 *
 * @class Keys
 * @static
 * @see https://developers.digitalocean.com/v2/#keys
 */
module.exports = function Keys() {
	var client  = this,
		exports = {},
		base    = new Base(client, 'account/keys');

	/**
	 * Get a list of available keys
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.keys.list(function(err, reply) {});
	 */
	exports.list = base.list();

	/**
	 * Get a single key
	 *
	 * @method fetch
	 * @param {Integer|String} key - keyId or key fingerprint
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.keys.fetch(123, function(err, reply) {});
	 */
	exports.fetch = base.fetch();

	/**
	 * Create a new key
	 *
	 * @method create
	 * @param {Object} data
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.keys.create({}, function(err, reply) {});
	 */
	exports.create = base.create();

	/**
	 * Update a key
	 *
	 * @method update
	 * @param {Integer|String} key - keyId or key fingerprint
	 * @param {Object|String} data
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.keys.update(123, {}, function(err, reply) {});
	 */
	exports.update = base.update();

	/**
	 * Remove a key
	 *
	 * @method remove
	 * @param {Integer|String} key - keyId or key fingerprint
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.keys.remove(123, unction(err, reply) {});
	 */
	exports.remove = base.remove();

	return exports;
};
