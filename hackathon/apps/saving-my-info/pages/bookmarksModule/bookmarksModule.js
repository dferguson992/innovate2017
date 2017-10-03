var Q = require('q');
var Feature = require('sapphire-express').Feature;

module.exports = function(req, res, app)
{
	var bookmarksModule = new Feature(app, '/saving-my-info/pages/bookmarksModule/');

	bookmarksModule.addPage({
		name: 'bookmarksModule',
		url: 'assets/pages/bookmarksModule.html',
		javascript: ['assets/js/Controllers/BookmarksModule.js', 'assets/js/Views/BookmarksModule.js'],
		css: ['assets/css/bookmarksModule.css']
	});

	return Q(app);
}
