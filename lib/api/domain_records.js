/**
 * Wrapper providing access to domain records
 *
 * @class DomainRecords
 * @static
 * @see https://developers.digitalocean.com/v2/#domain-records
 */
module.exports = function DomainRecords() {
	var client = this,
		exports = {};

	/**
	 * Get a list of all domain records for a domainName
	 *
	 * @method list
	 * @param {String} domainName
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domainRecords.list('example.com', function(err, reply) {});
	 */
	exports.list = function(domainName, callback) {
		client.execList({
			path: '/domains/' + domainName + '/records',
			arrayProperty: 'domain_records'
		}, callback);
	};

	/**
	 * Get a single domain record by it's domainName and recordId
	 *
	 * @method fetch
	 * @param {String} domainName
	 * @param {Integer} recordId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domainRecords.fetch('example.com', 123, function(err, reply) {});
	 */
	exports.fetch = function(domainName, recordId, callback) {
		client.exec({
			path: '/domains/' + domainName + '/records/' + recordId
		}, callback);
	};

	/**
	 * Create a domain record
	 *
	 * @method create
	 * @param {String} domainName
	 * @param {Object|String} data
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domainRecords.create('example.com', {}, function(err, reply) {});
	 */
	exports.create = function(domainName, data, callback) {
		client.exec({
			method: 'POST',
			path: '/domains/' + domainName + '/records',
			body: data
		}, callback);
	};

	/**
	 * Update a domain record
	 *
	 * @method update
	 * @param {String} domainName
	 * @param {Integer} recordId
	 * @param {Object} data
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domainRecords.update('example.com', 123, {}, function(err, reply) {});
	 */
	exports.update = function(domainName, recordId, data, callback) {
		client.exec({
			method: 'PUT',
			path: '/domains/' + domainName + '/records/' + recordId,
			body: data
		}, callback);
	};

	/**
	 * Remove a domain record
	 *
	 * @method remove
	 * @param {String} domainName
	 * @param {Integer} recordId
	 * @param {Function} callback
	 * @example
	 *   nauticalClient.domainRecords.remove('example.com', 123, function(err, reply) {});
	 */
	exports.remove = function(domainName, recordId, callback) {
		client.exec({
			method: 'DELETE',
			path: '/domains/' + domainName + '/records/' + recordId
		}, callback);
	};

	return exports;
};
