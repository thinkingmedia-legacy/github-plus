chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var path = window.location.pathname;
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

		$("a.minibutton.sidebar-button[title='Download this repository as a zip file']").addClass("primary");
	}
	}, 10);
});