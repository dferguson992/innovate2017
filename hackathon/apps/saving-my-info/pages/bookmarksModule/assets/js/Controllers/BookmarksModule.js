Package('SavingMyInfo.Controllers', {
	BookmarksModule : new Class({
		Extends : Sapphire.Controller,

		initialize : function()
		{
			this.parent();

			SAPPHIRE.application.listenPageEvent('load', 'bookmarksModule', this.onLoad.bind(this));
			SAPPHIRE.application.listenPageEvent('show', 'bookmarksModule', this.onShow.bind(this));
		},

		onLoad : function()
		{
			this.view = new SavingMyInfo.Views.BookmarksModule();
		},

		onShow : function(panel, query)
		{
			this.view.draw()
		},
	})
});

SAPPHIRE.application.registerController('bookmarksModule', new SavingMyInfo.Controllers.BookmarksModule());
