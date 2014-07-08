/**
 * Adds features for managing labels.
 */
define(['App/Dispatch','App/Template'],function(dispatch,template)
{
	var sortLabels = {
		name: 'sort-labels',
		init: function()
		{
			var $labels = $("ul.js-color-label-list");

			template.get('dropdown',function(tmpl){
				var data = {
					title: 'Sort',
					value: 'Default'
				};
				$labels.find('h4').append(Mustache.render(tmpl,data));

				template.get('options-popup',function(tmpl)
				{
					var data = {
						title: 'Sort options',
						Items: [
							{selected: true, url:'#', title: 'Default'},
							{url:'#', title: 'By Count'},
							{url:'#', title: 'By Color'}
						]
					};
					$labels.find('h4').append(Mustache.render(tmpl,data));

					$labels.find('h4 > .minibutton').on('click',function()
					{
						$labels.find('h4 > .select-menu-modal-holder').show();
					});
				});
			});
		}
	};

	dispatch.register(/.*/,sortLabels);
});