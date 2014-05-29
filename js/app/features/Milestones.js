/**
 * Adds the Milestones tab.
 */
define(['App/Dispatch','App/Template'],function(dispatch,template)
{
	var feature = {
		name: 'milestone',
		init: function()
		{
			var $issues = $("ul.sunken-menu-group > li[aria-label='Issues']");
			var $group = $issues.parent();

			template.get('milestone',function(tmpl)
			{
				var data = {
					url: $issues.find('a').attr('href')
				};
				$issues.after(Mustache.render(tmpl,data));
			});

		}
	};

	dispatch.register(".*",feature);
});