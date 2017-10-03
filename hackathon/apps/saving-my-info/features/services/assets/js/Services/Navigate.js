Package('SavingMyInfo.Services', {
	Navigate : new Class({
		implements : ["trigger"],
		initialize : function()
		{
			this.serviceName = 'saving-my-info:navigate';
			this.importServices = 'application-nav,modules,ui'.split(',');

			SYMPHONY.services.make(this.serviceName, this, this.implements, true);

			SAPPHIRE.application.listen('start', this.onStart.bind(this));
			SAVING_MY_INFO.events.listen('start', this.onReady.bind(this));
		},
		trigger : function()
		{
			var mod = SYMPHONY.services.subscribe('modules');
			mod.show(
				"notebookModule", 
				{title: "My Notebook"}, 
				this.serviceName, 
				"https://localhost:80/notebook", 
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
			ui.registerExtension('single-user-im', 'singleIm', this.serviceName, {label: "Save"});
			ui.registerExtension('multi-user-im', 'multi-Im', this.serviceName, {label: "Save"});
			ui.registerExtension('room', 'room-Im', this.serviceName, {label: "Save"});
		}
	})
});

new SavingMyInfo.Services.Navigate();
