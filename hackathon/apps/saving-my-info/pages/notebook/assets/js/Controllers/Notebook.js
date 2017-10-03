Package('SavingMyInfo.Controllers', {
	Notebook : new Class({
		Extends : Sapphire.Controller,

		initialize : function()
		{
			this.parent();

			SAPPHIRE.application.listenPageEvent('load', 'notebook', this.onLoad.bind(this));
			SAPPHIRE.application.listenPageEvent('show', 'notebook', this.onShow.bind(this));
		},

		onLoad : function()
		{
			this.view = new SavingMyInfo.Views.Notebook();
		},

		onShow : function(panel, query)
		{
			this.view.draw()
		},
	})
});

SAPPHIRE.application.registerController('notebook', new SavingMyInfo.Controllers.Notebook());
