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
			query   : request.query || null,
			headers : request.headers || {}
		}, req, requestBody;

		if (request.body)
			requestBody = request.body;

		delete request.body;

		if (!options.headers.Accept)
			options.headers.Accept = 'application/json';

		if (!options.headers['Content-Type'])
			options.headers['Content-Type'] = 'application/json';

		options.headers['User-Agent'] = userAgent;

		req = https.request(auth.authorize(options, config), function(res) {
			var responseBody = '';

			res.on('data', function(chunk) {
				responseBody += chunk;
			});

			res.on('end', function() {
				var response = {
					res: res,
					body: responseBody
				}, key;
				
				if (res.headers !== undefined && res.headers['content-type'].slice(0, 16) === 'application/json')
					response.body = JSON.parse(response.body);

				if ('object' === typeof response.body && response.body.links && response.body.links.pages) {
					for (key in response.body.links.pages)
						response[key] = navigate(response.body.links.pages[key]);
				}

				callback(null, response);
			});
		}).on('error', function(err) {
			callback(err, null);
		});

		if (requestBody) {
			requestBody = ('object' === typeof requestBody) ? JSON.stringify(requestBody) : requestBody;
			req.write(requestBody);
		}

		req.end();
	};

	function navigate(path) {
		path = path.replace(url.format(entryPoint), '');
		return function(callback) {
			internals.exec({
				path: path
			}, callback);
		};
	}

	modules.forEach(function(module) {
		var moduleName = module.replace(new RegExp('_([a-z])', 'g'), function(match, part1) {
			return part1.toUpperCase();
		});

		client[moduleName] = require('./api/' + module).bind(internals)();
	});
}

module.exports = Client;
