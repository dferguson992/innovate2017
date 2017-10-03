Package('SavingMyInfo.Controllers', {
	SavingMyInfo : new  Class({
		Extends: Sapphire.Controller,

		initialize : function()
		{
			this.parent();
			SAPPHIRE.application.listen('start', this.onStart.bind(this));
			SAPPHIRE.application.listen('ready', this.onReady.bind(this));
		},

		onStart : function(callback)
		{
			callback();
		},

		onReady : function()
		{
			this.view = new SavingMyInfo.Views.SavingMyInfo();
		}
	})
});

SAPPHIRE.application.registerController('saving-my-info', new SavingMyInfo.Controllers.SavingMyInfo());
