chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var path = window.location.pathname;

		// view an existing issue
		if(path.match(/^.*\/issues\/[0-9]+$/))
		{
			$("#discussion_bucket").find(".js-comment-edit-button").on("click",function(){
				$(".discussion-timeline-actions").hide();
				$(this).closest(".js-comment").find(".form-actions > button[type='submit']").addClass("primary");
				$(this).closest(".js-comment").find(".form-actions .minibutton").on("click",function(){
					$(".discussion-timeline-actions").show();
				});
			});
		}

		// add a new issue
		if(path.match(/^.*\/issues\/new$/))
		{
			var tmp = $("<h3>Issue Templates</h3><ul class='filter-list small'><li><a href='#' class='filter-item'><span class='octicon octicon-remove-close'></span><span class='name'>Test Template</span></a></li></ul>");
			$(".column.sidebar").append(tmp)
		}

		// on every page
		$("a.minibutton.sidebar-button[title='Download this repository as a zip file']").addClass("primary");

		// set the logo
		$.get(chrome.extension.getURL('templates/logo.mustache')).done(function(tmpl){
			var data = {
				url: chrome.extension.getURL('icons/icon24.png')
			};
			$("div.header:first").append(Mustache.render(tmpl,data));
			$(".ext-github-plus-logo").tipsy({gravity: 'w'});
		});
	}
	}, 10);
});