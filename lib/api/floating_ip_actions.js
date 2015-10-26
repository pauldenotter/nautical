/**
 * Wrapper to provide access to floating ip actions
 *
 * @class FloatingIPActions
 * @static
 * @see https://developers.digitalocean.com/v2/#floating-ip-actions
 */
module.exports = function FloatingIPActions() {
	var client = this,
		exports = {};

	function doAction(ip, action, body, callback) {
		body.type = action;

		client.exec({
			method: 'POST',
			path: '/floating_ips/' + ip + '/actions',
			body: body
		}, callback);
	}

	/**
	 * Assign a floating ip to a droplet
	 *
	 * @method assign
	 * @param {String} IP address
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.reboot(123, function(err, reply) {});
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
	 *   nauticalClient.FloatingIPActions.unassign('45.55.96.47', function(err, reply) {});
	 */
	exports.unassign = function(ip, callback) {
		doAction(ip, 'unassign', {}, callback);
	};

	return exports;
};
