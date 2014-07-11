/**
 * Wrapper to provide access to actions
 *
 * @class Actions
 * @static
 * @see https://developers.digitalocean.com/v2/#actions
 */
module.exports = function Actions() {
	var client = this,
		exports = {};

	/**
	 * Get a list of all the actions that have been executed on the current account
	 *
	 * @method list
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.actions.list(function(err, reply) {});
	 */
	exports.list = function(callback) {
		client.execList({
			path: '/actions',
			arrayProperty: 'actions'
		}, callback);
	};

	/**
	 * Get a single executed action by it's id
	 *
	 * @method fetch
	 * @param {Integer} actionId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.actions.fetch(123, function(err, reply) {});
	 */
	exports.fetch = function(actionId, callback) {
		client.exec({
			path: '/actions/' + actionId
		}, callback);
	};

	return exports;
};
