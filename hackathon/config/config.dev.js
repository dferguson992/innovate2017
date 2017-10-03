var fs = require('fs');
module.exports = {
	port: 80,
	baseUrl : 'http://localhost:80/',
	useCompression: false,
	builderCache: false,
	minify : false,
	https: {
		key : fs.readFileSync(__dirname + '/certs/localhost.key', {encoding: 'utf-8'}),
		cert : fs.readFileSync(__dirname + '/certs/localhost.cert', {encoding: 'utf-8'}),
	},
};
