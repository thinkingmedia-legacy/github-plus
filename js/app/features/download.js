/**
 * Changes the "Download Zip" to green.
 */
define(['App/Dispatch'],function(dispatch)
{
	var feature = {
		name: 'download',
		init: function()
		{
			$("a.minibutton.sidebar-button span.octicon.octicon-cloud-download").parent().addClass("primary");
		}
	};

	dispatch.register(/.*/,feature);
});