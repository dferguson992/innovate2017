Package('SavingMyInfo.Services', {
	Navigate : new Class({
		implements : ["trigger", "select"],
		initialize : function()
		{
			this.serviceName = 'saving-my-info:navigate';
			this.importServices = 'applications-nav,modules,ui'.split(',');

			SYMPHONY.services.make(this.serviceName, this, this.implements, true);

			SAPPHIRE.application.listen('start', this.onStart.bind(this));
			SAVING_MY_INFO.events.listen('start', this.onReady.bind(this));
		},
		trigger : function()
		{
			var mod = SYMPHONY.services.subscribe('modules');
			console.log(arguments);
			mod.show(
				"notebookModule", 
				{title: "Bookmark Messages"}, 
				this.serviceName, 
				"https://localhost:80/notebook", 
				{
				  "canFloat": true
				}
			  );

		},
		select : function(id) 
		{
			var mod = SYMPHONY.services.subscribe('modules');
			mod.show(
				"bookmarksModule", 
				{title: "My Bookmarks"}, 
				this.serviceName, 
				"https://localhost:80/bookmarks", 
				{
				  "canFloat": true
				}
			  );
		},
		onStart : function(done)
		{
			var bootstrap = SYMPHONY.services.subscribe('bootstrap');

			this.importServices.each(function(service)
			{
				bootstrap.importService(service);
			}, this);

			bootstrap.exportService(this.serviceName);
			done();
		},

		onReady : function()
		{
			var ui = SYMPHONY.services.subscribe('ui');
			ui.registerExtension('single-user-im', 'singleIm', this.serviceName, {label: "Bookmark"});
			ui.registerExtension('multi-user-im', 'multi-Im', this.serviceName, {label: "Bookmark"});
			ui.registerExtension('room', 'room-Im', this.serviceName, {label: "Bookmark"});

			var nav = SYMPHONY.services.subscribe('applications-nav');
			nav.add("bookmarks-nav", "My Bookmarks", this.serviceName);
		}
	})
});

new SavingMyInfo.Services.Navigate();
