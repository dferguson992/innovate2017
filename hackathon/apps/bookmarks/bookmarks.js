var Q = require('q');
var sapphire = require('sapphire-express');

function main(req, res, app)
{
	app.addJS([
		'https://www.symphony.com/resources/api/v1.0/symphony-api.js',
	], true);

	app.addCSS([
		'https://www.symphony.com/resources/api/v1.1/symphony-style.css',
		'https://symphony.com/resources/api/v2.0/styles/symphony-external-app.css',
	], true);

	app.addCSS([
		'/bookmarks/assets/css/bookmarks.css',
	]);

	app.addJS([
		'/assets/js/lib/translate.js',
		'/assets/js/lib/templates.js',
		'/bookmarks/assets/js/Views/Bookmarks.js',
		'/bookmarks/assets/js/Controllers/Bookmarks.js',
	]);


	return Q(app)
}

function use(type, name, req, res)
{
	var module = require('./' + type + '/' + name + '/' + name + '.js');
	return function(app)
	{
		return module(req, res, app);
	}
}

exports.getApplication = function(req, res)
{
	var session = req.session.get();
	var app = new sapphire.Application('BOOKMARKS', req, res);

	app.setTitle('Bookmarks');
	app.setBody('apps/bookmarks/templates/body.html');
	app.setMaster('apps/bookmarks/templates/master.html');
	app.addVariable('baseUrl', CONFIG.baseUrl);
	app.addVariable('appId', CONFIG['bookmarks'].appId);

	return main(req, res, app)
		.then(sapphire.features.animator.bind(sapphire.features.animator, req, res))
		.then(sapphire.features.dialogs.bind(sapphire.features.dialogs, req, res))
		.then(use('features', 'services', req, res))
		.then(function(app)
		{
			return Q(app);
		})
}
