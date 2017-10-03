module.exports = {
	useCompression: true,
	builderCache: true,
	minify : true,
	port: 80,
	baseUrl : 'https://localhost:80/',
	basePath : '/app/app',
	useCompression: false,
	builderCache: false,
	minify : false,
	https: {
		key : fs.readFileSync(__dirname + '/certs/localhost.key', {encoding: 'utf-8'}),
		cert : fs.readFileSync(__dirname + '/certs/localhost.cert', {encoding: 'utf-8'}),
	},
};
