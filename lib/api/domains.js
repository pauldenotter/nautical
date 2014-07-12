var querystring = require('querystring');

/**
 * Wrapper providing access to domains
 *
 * @class Domains
 * @static
 * @see https://developers.digitalocean.com/v2/#domains
 */
module.exports = function Domains() {
	var client = this,
		exports = {};

	/**
	 * List all domains within your account
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domains.list(function(err, reply) {});
	 */
	exports.list = function(query, callback) {
		var q = '';

		if (query && 'function' === typeof callback)
			q = '?' + querystring.stringify(query);

		client.exec({
			path: '/domains' + q
		}, arguments[arguments.length - 1]);
	};

	/**
	 * Get a single domain by it's domain name
	 *
	 * @method fetch
	 * @param {String} domainName
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domains.fetch('example.com', function(err, reply) {});
	 */
	exports.fetch = function(domainName, callback) {
		client.exec({
			path: '/domains/' + domainName
		}, callback);
	};

	/**
	 * Create a new domain
	 *
	 * @method create
	 * @param {Object|String} data
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domains.create({}, function(err, reply) {});
	 */
	exports.create = function(data, callback) {
		client.exec({
			method: 'POST',
			path: '/domains',
			body: data
		}, callback);
	};

	/**
	 * Remove a domain
	 *
	 * @method remove
	 * @param {String} domainName
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domains.remove('example.com', function(err, reply) {});
	 */
	exports.remove = function(domainName, callback) {
		client.exec({
			method: 'DELETE',
			path: '/domains/' + domainName
		}, callback);
	};

	return exports;
};
