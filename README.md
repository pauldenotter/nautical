# It's a wrap(per)
This node module wraps DigitalOcean's new v2 API (currently in public beta).

## Install
Install the module by running the following commands on your command line

```bash
$ npm install --save nautical
```

## Usage
It's encouraged to put your DigitalOcean API token in a configuration file like:

File: config.json
```javascript
{
	"nautical": {
		"token": "your_token_here"
	}
}
```

Then you can use the wrapper like this:

```javascript
var config         = require('./config.json').nautical,
	nauticalClient = require('nautical').getClient(config);

nauticalClient.sizes.list(function(err, reply) {
	if (err) throw err;
	console.log({
		responseBody: reply.body,
		statusCode: reply.res.statusCode,
		headers: reply.res.headers
	});
});
```

## Participate in development
Pull requests will be greatly appreciated :)

## More information
For more information visit the [DigitalOcean developers portal](https://developers.digitalocean.com/v2)
