/**
 * Wrapper to provide access to droplet actions
 *
 * @class DropletActions
 * @static
 * @see https://developers.digitalocean.com/v2/#droplet-actions
 */
module.exports = function DropletActions() {
	var client = this,
		exports = {};

	function doAction(dropletId, action, body, callback) {
		body = body || {};
		body.type = action;

		client.exec({
			method: 'POST',
			path: '/droplets/' + dropletId + '/actions',
			body: body
		}, callback);
	}

	/**
	 * Reboot a droplet
	 *
	 * @method reboot
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.reboot(123, function(err, reply) {});
	 */
	exports.reboot = function(dropletId, callback) {
		doAction(dropletId, 'reboot', {}, callback);
	};

	/**
	 * Power cycle a droplet
	 *
	 * @method powerCycle
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.powerCycle(123, function(err, reply) {});
	 */
	exports.powerCycle = function(dropletId, callback) {
		doAction(dropletId, 'power_cycle', {}, callback);
	};

	/**
	 * Shutdown a droplet
	 *
	 * @method shutdown
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.shutdown(123, function(err, reply) {});
	 */
	exports.shutdown = function(dropletId, callback) {
		doAction(dropletId, 'shutdown', {}, callback);
	};

	/**
	 * Power off a droplet
	 *
	 * @method powerOff
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.powerOff(123, function(err, reply) {});
	 */
	exports.powerOff = function(dropletId, callback) {
		doAction(dropletId, 'power_off', {}, callback);
	};

	/**
	 * Power on a droplet
	 *
	 * @method powerOn
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.powerOn(123, function(err, reply) {});
	 */
	exports.powerOn = function(dropletId, callback) {
		doAction(dropletId, 'power_on', {}, callback);
	};

	/**
	 * Perform a root password reset on a droplet
	 *
	 * @method passwordReset
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.passwordReset(123, function(err, reply) {});
	 */
	exports.passwordReset = function(dropletId, callback) {
		doAction(dropletId, 'password_reset', {}, callback);
	};

	/**
	 * Enable IPv6 on a droplet (if available)
	 *
	 * @method enableIPv6
	 * @param {Integer} dropletId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.enableIPv6(123, function(err, reply) {});
	 */
	exports.enableIPv6 = function(dropletId, callback) {
		doAction(dropletId, 'enable_ipv6', {}, callback);
	};

	/**
	 * Resize a droplet
	 *
	 * @method resize
	 * @param {Integer} dropletId
	 * @param {String} size - slug
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.resize(123, '1gb', function(err, reply) {});
	 */
	exports.resize = function(dropletId, size, callback) {
		doAction(dropletId, 'resize', {size: size}, callback);
	};

	/**
	 * Restore a backup to a droplet
	 *
	 * @method restore
	 * @param {Integer} dropletId
	 * @param {Integer} imageId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.restore(123, 456, function(err, reply) {});
	 */
	exports.restore = function(dropletId, imageId, callback) {
		doAction(dropletId, 'restore', {image: imageId}, callback);
	};

	/**
	 * Rebuild a droplet
	 *
	 * @method rebuild
	 * @param {Integer} dropletId
	 * @param {Integer} image - slug or id
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.rebuild(123, 456, function(err, reply) {});
	 */
	exports.rebuild = function(dropletId, image, callback) {
		doAction(dropletId, 'rebuild', {image: image}, callback);
	};

	/**
	 * Rename a droplet (hostname)
	 *
	 * @method powerCycle
	 * @param {Integer} dropletId
	 * @param {String} name
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.rename(123, 'newhostname.example.com', function(err, reply) {});
	 */
	exports.rename = function(dropletId, name, callback) {
		doAction(dropletId, 'rename', {name: name}, callback);
	};

	/**
	 * Change a droplet's kernel
	 *
	 * @method changeKernel
	 * @param {Integer} dropletId
	 * @param {Integer} kernelId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.changeKernel(123, 456, function(err, reply) {});
	 */
	exports.changeKernel = function(dropletId, kernelId, callback) {
		doAction(dropletId, 'enable_ipv6', {kernel: kernelId}, callback);
	};

	/**
	 * Get an executed action on the droplet
	 *
	 * @method getAction
	 * @param {Integer} dropletId
	 * @param {Integer} actionId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.dropletActions.getAction(123, 456, function(err, reply) {});
	 */
	exports.getAction = function(dropletId, actionId, callback) {
		client.exec({
			path: '/droplets/' + dropletId + '/actions/' + actionId
		}, callback);
	};

	return exports;
};
