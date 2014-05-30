/**
 * Sets the default repo filter for the home page.
 */
define(['App/Dispatch'],function(dispatch)
{
	var feature = {
		name: 'default-filter',
		init: function()
		{
		   $("ul.repo-filterer > li a.repo-filter[data-filter='.source']")[0].click();
		}
	};

	dispatch.register(/^\/$/,feature);
});