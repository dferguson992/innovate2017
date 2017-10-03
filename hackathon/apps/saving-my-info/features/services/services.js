var Q = require('q');
var Feature = require('sapphire-express').Feature;

module.exports = function(req, res, app)
{
	var services = new Feature(app, '/saving-my-info/features/services/');

	services.addJS(['assets/js/Services/Bootstrap.js','assets/js/Services/Navigate.js']);


	return Q(app);
}
