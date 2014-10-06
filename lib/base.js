/**
 * Wrapper to provide basic functions for the API's
 *
 * @class Base
 * @static
 */
 function Base(client, endpoint) {
	var base = this;

	/**
	 * Get a list of all records for the current API
	 *
	 * @method list
	 * @param {Object} query - OPTIONAL querystring params
	 * @param {Function} callback
	 */
	base.list = function() {
		return function(query, callback) {
			var q = '';

			if (query && 'function' === typeof callback)
				q = '?' + querystring.stringify(query);

			client.exec({
				path: '/' + endpoint + q
			}, arguments[arguments.length - 1]);
		};
	};

	/**
	 * Get a single record by its key
	 *
	 * @method fetch
	 * @param {Integer|String} key
	 * @param {Function} callback
	 */
	base.fetch = function() {
		return function(key, callback) {
			client.exec({
				path: '/' + endpoint + '/' + key
			}, callback);
		};
	};

	/**
	 * Create a new record
	 *
	 * @method create
	 * @param {Object|String} data
	 * @param {Function} callback
	 */
	base.create = function() {
		return function(data, callback) {
			client.exec({
				method: 'POST',
				path: '/' + endpoint,
				body: data
			}, callback);
		};
	};

	/**
	 * Update a record
	 *
	 * @method update
	 * @param {Integer|String} key
	 * @param {Object|String} data
	 * @param {Function} callback
	 */
	base.update = function() {
		return function(key, data, callback) {
			client.exec({
				method: 'PUT',
				path: '/' + endpoint + '/' + key,
				body: data
			}, callback);
		};
	};

	/**
	 * Remove a record
	 *
	 * @method remove
	 * @param {Integer|String} key
	 * @param {Function} callback
	 */
	base.remove = function() {
		return function(key, callback) {
			client.exec({
				method: 'DELETE',
				path: '/' + endpoint + '/' + key
			}, callback);
		};
	};
}

module.exports = Base;
