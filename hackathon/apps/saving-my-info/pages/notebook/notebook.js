var Q = require('q');
var Feature = require('sapphire-express').Feature;

module.exports = function(req, res, app)
{
	var notebook = new Feature(app, '/saving-my-info/pages/notebook/');

	notebook.addPage({
		name: 'notebook',
		url: 'assets/pages/notebook.html',
		javascript: ['assets/js/Controllers/Notebook.js', 'assets/js/Views/Notebook.js'],
		css: ['assets/css/notebook.css']
	});

	return Q(app);
}
