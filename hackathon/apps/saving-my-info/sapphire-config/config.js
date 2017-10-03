var config = {
	appId: 'saving-my-info',
}

var env = process.env.node_env || 'dev';

envConfig = {};
try
{
	if (env) envConfig = require('./config.' + env);
}
catch (e)
{
}

module.exports = Object.merge(config, envConfig);
