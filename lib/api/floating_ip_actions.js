var Base = require('../base');

/**
 * Wrapper to provide access to floating ip actions
 *
 * @class FloatingIPActions
 * @static
 * @see https://developers.digitalocean.com/v2/#floating-ip-actions
 */
module.exports = function FloatingIPActions() {
	var client = this,
		exports = {},
		base = new Base(client, 'floating_ips'),
		doAction = base.doAction();

	/**
	 * Assign a floating ip to a droplet
	 *
	 * @method assign
	 * @param {String} IP address
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.floatingIpActions.assign('123.123.123.123', 123, function(err, reply) {});
	 */
	exports.assign = function(ip, dropletId, callback) {
		doAction(ip, 'assign', {droplet_id: dropletId}, callback);
	};

	/**
	 * unassign a floating ip
	 *
	 * @method unassign
	 * @param {String} IP address
	 * @example
	 *   nauticalClient.FloatingIPActions.unassign('123.123.123.123', function(err, reply) {});
	 */
	exports.unassign = function(ip, callback) {
		doAction(ip, 'unassign', {}, callback);
	};

	return exports;
};
