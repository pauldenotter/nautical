var querystring = require('querystring');

/**
 * Wrapper to provide access to droplets
 *
 * @class Droplets
 * @static
 * @see https://developers.digitalocean.com/v2/#droplets
 */
module.exports = function Droplets() {
	var client = this,
		exports = {};

	/**
	 * List all droplets in your account
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.droplets.list(function(err, reply) {});
	 */
	exports.list = function(query, callback) {
		var q = '';

		if (query && 'function' === typeof callback)
			q = '?' + querystring.stringify(query);

		client.exec({
			path: '/droplets' + q
		}, arguments[arguments.length - 1]);
	};

	/**
	 * Get a single droplet
	 *
	 * @method fetch
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.droplets.fetch(123, function(err, reply) {});
	 */
	exports.fetch = function(dropletId, callback) {
		client.exec({
			path: '/droplets/' + dropletId
		}, callback);
	};

	/**
	 * Get all available kernels
	 *
	 * @method fetchKernels
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.droplets.fetchKernels(123, function(err, reply) {});
	 */
	exports.fetchKernels = function(dropletId, callback) {
		client.exec({
			path: '/droplets/' + dropletId + '/kernels'
		}, callback);
	};

	/**
	 * Get all available snapshots
	 *
	 * @method fetchSnapshots
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.droplets.fetchSnapshots(123, function(err, reply) {});
	 */
	exports.fetchSnapshots = function(dropletId, callback) {
		client.exec({
			path: '/droplets/' + dropletId + '/snapshots'
		}, callback);
	};

	/**
	 * Get all available backups
	 *
	 * @method fetchBackups
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.droplets.fetchBackups(123, function(err, reply) {});
	 */
	exports.fetchBackups = function(dropletId, callback) {
		client.exec({
			path: '/droplets/' + dropletId + '/backups'
		}, callback);
	};

	/**
	 * Create a new droplet
	 *
	 * @method create
	 * @param {Object|String} data
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.droplets.create({}, function(err, reply) {});
	 */
	exports.create = function(data, callback) {
		client.exec({
			method: 'POST',
			path: '/droplets',
			body: data
		}, callback);
	};

	/**
	 * Remove a droplet
	 *
	 * @method remove
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.droplets.remove(123, function(err, reply) {});
	 */
	exports.remove = function(dropletId, callback) {
		client.exec({
			method: 'DELETE',
			path: '/droplets/' + dropletId
		}, callback);
	};

	return exports;
};
