var querystring = require('querystring'),
	Base        = require('../base');

/**
 * Wrapper to provide access to droplets
 *
 * @class Droplets
 * @static
 * @see https://developers.digitalocean.com/v2/#droplets
 */
module.exports = function Droplets() {
	var client  = this,
		exports = {},
		base    = new Base(client, 'droplets');

	/**
	 * List all droplets in your account
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.droplets.list(function(err, reply) {});
	 */
	exports.list = base.list();

	/**
	 * Get a single droplet
	 *
	 * @method fetch
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.droplets.fetch(123, function(err, reply) {});
	 */
	exports.fetch = base.fetch();

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
	 * Get all actions executed on the droplet
	 *
	 * @method fetchActions
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.droplets.fetchActions(123, function(err, reply) {});
	 */
	exports.fetchActions = function(dropletId, callback) {
		client.exec({
			path: '/droplets/' + dropletId + '/actions'
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
	exports.create = base.create();

	/**
	 * Remove a droplet
	 *
	 * @method remove
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.droplets.remove(123, function(err, reply) {});
	 */
	exports.remove = base.remove();

	return exports;
};
