var querystring = require('querystring'),
	Base        = require('../base');

/**
 * Wrapper to provide access to actions
 *
 * @class Actions
 * @static
 * @see https://developers.digitalocean.com/v2/#actions
 */
module.exports = function Actions() {
	var client  = this,
		exports = {},
		base    = new Base(client, 'actions');

	/**
	 * Get a list of all the actions that have been executed on the current account
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.actions.list(function(err, reply) {});
	 */
	exports.list = base.list();

	/**
	 * Get a single executed action by it's id
	 *
	 * @method fetch
	 * @param {Integer} actionId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.actions.fetch(123, function(err, reply) {});
	 */
	exports.fetch = base.list();

	return exports;
};
