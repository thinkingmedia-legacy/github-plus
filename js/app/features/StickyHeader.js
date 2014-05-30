/**
 * Makes the top header bar sticky.
 */
define(['App/Dispatch'],function(dispatch)
{
	var sticky = {
		name: 'sticky',
		init: function()
		{
			var $bar = $("body > div.wrapper:first > div.header:first");
			$bar.addClass("ext-github-plus-sticky");
			$("body > div.wrapper:first > div.site:first").css({'margin-top': $bar.height()+'px'});

			var $wnd = $(window);
			$wnd.bind('scroll',function()
			{
				if($wnd.scrollTop() <= 0)
				{
					$bar.removeClass('stuck');
					return;
				}
				$bar.addClass('stuck');
			});
		}
	};

	dispatch.register(/.*/,sticky);
});