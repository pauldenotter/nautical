/**
 * Wrapper for DigitalOcean's v2 API
 *
 * @module nautical
 */

var Client = require('./client'),
	client;

exports.version = require('../package.json').version;


	/**
	 * Get a nauticalClient instance
	 *
	 * @method getClient
	 * @param {object} config
	 * @param {string} config.token - Your DigitalOcean API token
	 * @example
	 *   var nauticalClient = nautical.getClient(config);
	 */
exports.getClient = function(config) {
	if (!client) client = new Client(config);
	return client;
};
