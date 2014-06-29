/**
 * Wrapper to provide access to image actions
 *
 * @class ImageActions
 * @static
 * @see https://developers.digitalocean.com/v2/#image-actions
 */
module.exports = function ImageActions() {
	var client = this,
		exports = {};

	/**
	 * Tranfser images from one region to another
	 *
	 * @method transfer
	 * @param {Integer} imageId
	 * @param {String} region - slug
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.imageActions.transfer(123, 'ams2', function(err, reply) {});
	 */
	exports.transfer = function(imageId, region, callback) {
		client.exec({
			method: 'POST',
			path: '/images/' + imageId + '/actions',
			body: {
				type: 'transfer',
				region: region
			}
		}, callback);
	};

	/**
	 * Get an executed action on the image
	 *
	 * @method getAction
	 * @param {Integer} imageId
	 * @param {Integer} actionId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.imageActions.getAction(123, 456, function(err, reply) {});
	 */
	exports.getAction = function(imageId, actionId, callback) {
		client.exec({
			path: '/images/' + imageId + '/actions/' + actionId
		}, callback);
	};

	return exports;
};
