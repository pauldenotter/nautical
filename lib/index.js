var Client = require('./client'),
	client;

exports.version = require('../package.json').version;

exports.getClient = function(config) {
	if (!client) client = new Client(config);
	return client;
}
