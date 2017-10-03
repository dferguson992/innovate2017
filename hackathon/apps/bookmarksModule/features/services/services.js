var Q = require('q');
var Feature = require('sapphire-express').Feature;

module.exports = function(req, res, app)
{
	var bootstrap = new Feature(app, '/bookmarksModule/features/services/');

	bootstrap.addJS(['assets/js/Services/Bootstrap.js']);

	return Q(app);
}
