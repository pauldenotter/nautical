module.exports = function() {
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
	};

	exports.reboot = function(dropletId, callback) {
		doAction(dropletId, 'reboot', {}, callback);
	};

	exports.powerCycle = function(dropletId, callback) {
		doAction(dropletId, 'power_cycle', {}, callback);
	};

	exports.shutdown = function(dropletId, callback) {
		doAction(dropletId, 'shutdown', {}, callback);
	};

	exports.powerOff = function(dropletId, callback) {
		doAction(dropletId, 'power_off', {}, callback);
	};

	exports.powerOn = function(dropletId, callback) {
		doAction(dropletId, 'power_on', {}, callback);
	};

	exports.passwordReset = function(dropletId, callback) {
		doAction(dropletId, 'password_reset', {}, callback);
	};

	exports.enableIPv6 = function(dropletId, callback) {
		doAction(dropletId, 'enable_ipv6', {}, callback);
	};

	exports.resize = function(dropletId, size, callback) {
		doAction(dropletId, 'resize', {size: size}, callback);
	};

	exports.restore = function(dropletId, imageId, callback) {
		doAction(dropletId, 'restore', {image: imageId}, callback);
	};

	exports.rebuild = function(dropletId, image, callback) {
		doAction(dropletId, 'rebuild', {image: image}, callback);
	};

	exports.rename = function(dropletId, name, callback) {
		doAction(dropletId, 'rename', {name: name}, callback);
	};

	exports.changeKernel = function(dropletId, kernelId, callback) {
		doAction(dropletId, 'enable_ipv6', {kernel: kernelId}, callback);
	};

	exports.getAction = function(dropletId, actionId, callback) {
		client.exec({
			path: '/droplets/' + dropletId + '/actions/' + actionId
		}, callback);
	};

	return exports;
}
