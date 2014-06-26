module.exports.authorize = function(options, config) {
	switch(config.authType || 'oauth')
	{
		case 'basic':
			options.auth = config.token + ':';
			break;
		default:
			options.headers.Authorization = 'Bearer ' + config.token;
			break;
	}

	return options;
};
