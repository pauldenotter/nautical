var https    = require('https'),
	url      = require('url'),
	auth     = require('./auth'),
	_package = require('../package.json'),
	entryPoint, userAgent;

function Client(config) {
	var client = this,
		modules = ['actions', 'domain_records', 'domains', 'droplet_actions', 'droplets', 'image_actions', 'images', 'keys', 'regions', 'sizes'],
		internals = {};

	entryPoint = url.parse(config.entryPoint || 'https://api.digitalocean.com/v2');
	userAgent  = _package.name + '/' + _package.version + ' (node.js/' + process.version + ')';

	internals.exec = function(request, callback) {
		var options = {
			method  : request.method || 'GET',
			host    : entryPoint.hostname,
			port    : 443,
			path    : entryPoint.path + request.path,
			headers : request.headers || {}
		}, req, requestBody;

		if (request.body)
			requestBody = request.body;

		delete request.body;

		if (!options.headers['Accept'])
			options.headers['Accept'] = 'application/json';

		if (!options.headers['Content-Type'])
			options.headers['Content-Type'] = 'application/json';

		options.headers['User-Agent'] = userAgent;

		req = https.request(auth.authorize(options, config), function(res) {
			var responseBody = '';

			res.on('data', function(chunk) {
				responseBody += chunk;
			});

			res.on('end', function() {
				if (res.headers['content-type'].slice(0, 'application/json'.length) === 'application/json')
					responseBody = JSON.parse(responseBody);
				callback(null, {
					statusCode: res.statusCode,
					headers: res.headers,
					body: responseBody
				});
			});
		}).on('error', function(err) {
			callback(err, null);
		});

		if (requestBody)
			req.write(requestBody);

		req.end();
	}

	modules.forEach(function(module) {
		var moduleName = module.replace(new RegExp('_([a-z])', 'g'), function(match, part1) {
			return part1.toUpperCase();
		});

		client[module] = require('./api/' + module).bind(internals);
	});
}

module.exports = Client;
