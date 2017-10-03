var Q = require('q');
var Feature = require('sapphire-express').Feature;

module.exports = function(req, res, app)
{
	var bookmarks = new Feature(app, '/saving-my-info/pages/bookmarks/');

	bookmarks.addPage({
		name: 'bookmarks',
		url: 'assets/pages/bookmarks.html',
		javascript: ['assets/js/Controllers/Bookmarks.js', 'assets/js/Views/Bookmarks.js'],
		css: ['assets/css/bookmarks.css']
	});

	return Q(app);
}
