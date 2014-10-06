function Base(client, endpoint) {
	var base = this;

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

	base.fetch = function() {
		return function(id, callback) {
			client.exec({
				path: '/' + endpoint + '/' + id
			}, callback);
		};
	};

	base.create = function() {
		return function(data, callback) {
			client.exec({
				method: 'POST',
				path: '/' + endpoint,
				body: data
			}, callback);
		};
	};

	base.update = function() {
		return function(id, data, callback) {
			client.exec({
				method: 'PUT',
				path: '/' + endpoint + '/' + id,
				body: data
			}, callback);
		};
	};

	base.remove = function() {
		return function(id, callback) {
			client.exec({
				method: 'DELETE',
				path: '/' + endpoint + '/' + id
			}, callback);
		};
	};
}

module.exports = Base;
