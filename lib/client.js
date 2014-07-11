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
			path    : (request.noEntryPoint) ? request.path : (entryPoint.path + request.path),
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
				if (res.headers['content-type'].slice(0, 16) === 'application/json')
					responseBody = JSON.parse(responseBody);

				callback(null, {
					res: res,
					body: responseBody
				});
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

	internals.execList = function(request, callback) {
		var self = this;
		var arrayProperty = request.arrayProperty;
		if (!arrayProperty) {
			// Use normal exec call
			return self.exec(request, callback);
		}
		// First call
		var combinedArray = [];

		function getNextBlock(cb) {
			self.exec(request, function(err, reply) {
				if (err) return cb(err);
				var arr = reply.body[arrayProperty];
				if (arr) {
					//console.log('Got block length ' + arr.length);
					// Append block to combined array
					combinedArray = combinedArray.concat(arr);
				}
				var links = reply.body.links;
				if (!links || (!links.pages) || (!links.pages.next)) {
					// No next link found, we're done
					reply.body[arrayProperty] = combinedArray;
					return cb(null, reply);
				}
				// Next link found, get it.
				request.noEntryPoint = true;
				request.path = url.parse(links.pages.next).path;
				// console.log('Next=' + links.pages.next);
				// console.log('Next path=' + request.path);
				// Recurse into myself to get the next block
				getNextBlock(cb);
			});
		}

		// Start by getting the first block
		getNextBlock(callback);
	};

	modules.forEach(function(module) {
		var moduleName = module.replace(new RegExp('_([a-z])', 'g'), function(match, part1) {
			return part1.toUpperCase();
		});

		client[moduleName] = require('./api/' + module).bind(internals)();
	});
}

module.exports = Client;
