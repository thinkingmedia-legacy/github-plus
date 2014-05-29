/**
 * Adds the GitHubPlus logo.
 */
define(['App/Dispatch','App/Template'],function(dispatch,template)
{
	var feature = {
		name: 'logo',
		init: function()
		{
			template.get('logo',function(tmpl){
				var data = {
					url: chrome.extension.getURL('icons/icon24.png')
				};
				$("div.header:first").append(Mustache.render(tmpl,data));
				//$(".ext-github-plus-logo").tipsy({gravity: 'w'});
			});
		}
	};

	dispatch.register(".*",feature);
});