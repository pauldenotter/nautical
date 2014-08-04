var querystring = require('querystring');

/**
 * Wrapper to provide access to keys
 *
 * @class Keys
 * @static
 * @see https://developers.digitalocean.com/v2/#keys
 */
module.exports = function Keys() {
	var client = this,
		exports = {};

	/**
	 * Get a list of available keys
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.keys.list(function(err, reply) {});
	 */
	exports.list = function(query, callback) {
		var q = '';

		if (query && 'function' === typeof callback)
			q = '?' + querystring.stringify(query);

		client.exec({
			path: '/account/keys' + q
		}, arguments[arguments.length - 1]);
	};

	/**
	 * Get a single key
	 *
	 * @method fetch
	 * @param {Integer|String} key - keyId or key fingerprint
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.keys.fetch(123, function(err, reply) {});
	 */
	exports.fetch = function(key, callback) {
		client.exec({
			path: '/account/keys/' + key
		}, callback);
	};

	/**
	 * Create a new key
	 *
	 * @method create
	 * @param {Object} data
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.keys.create({}, function(err, reply) {});
	 */
	exports.create = function(data, callback) {
		client.exec({
			method: 'POST',
			path: '/account/keys',
			body: data
		}, callback);
	};

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
	exports.update = function(key, data, callback) {
		client.exec({
			method: 'PUT',
			path: '/account/keys/' + key,
			body: data
		}, callback);
	};

	/**
	 * Remove a key
	 *
	 * @method remove
	 * @param {Integer|String} key - keyId or key fingerprint
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.keys.remove(123, unction(err, reply) {});
	 */
	exports.remove = function(key, callback) {
		client.exec({
			method: 'DELETE',
			path: '/account/keys/' + key
		}, callback);
	};

	return exports;
};
