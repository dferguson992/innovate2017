Package('SavingMyInfo.Controllers', {
	Bookmarks : new Class({
		Extends : Sapphire.Controller,

		initialize : function()
		{
			this.parent();

			SAPPHIRE.application.listenPageEvent('load', 'bookmarks', this.onLoad.bind(this));
			SAPPHIRE.application.listenPageEvent('show', 'bookmarks', this.onShow.bind(this));
		},

		onLoad : function()
		{
			this.view = new SavingMyInfo.Views.Bookmarks();
		},

		onShow : function(panel, query)
		{
			this.view.draw()
		},
	})
});

SAPPHIRE.application.registerController('bookmarks', new SavingMyInfo.Controllers.Bookmarks());
