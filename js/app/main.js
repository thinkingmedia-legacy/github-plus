/**
 * Hacks require to load modules into the extension's context and not the website.
 */
(function() {
	var global = this;
	require.load = function (context, moduleName, url) {
		var xhr;
		xhr = new XMLHttpRequest();
		xhr.open("GET", chrome.extension.getURL(url) + '?r=' + new Date().getTime(), true);
		xhr.onreadystatechange = function (e) {
			if (xhr.readyState === 4 && xhr.status === 200) {
				eval.call(global, xhr.responseText + '\n//@ sourceURL=' + url);
				context.completeLoad(moduleName)
			}
		};
		xhr.send(null);
	};
})();

if (typeof String.prototype.endsWith !== 'function') {
	String.prototype.endsWith = function(suffix) {
		return this.indexOf(suffix, this.length - suffix.length) !== -1;
	};
}

requirejs.config({
	baseUrl: '/js',
	paths: {
		'App': '/js/App',
		'Feature': '/js/App/Features'
	}
});

/**
 * Load all the features.
 */
requirejs([
			  "Feature/Download",
			  "Feature/Logo",
			  "Feature/Milestones",
			  "Feature/DefaultFilter",
			  "Feature/QuickEdit",
			  "Feature/StickyHeader"
			  //"Feature/Labels"
		  ]);

/**
 * Initialize the extension.
 */
requirejs(["App/Dispatch"],function(dispatch)
{
	function _waitReady()
	{
		if(document.readyState === "complete")
		{
			clearInterval(readyStateCheckInterval);
			dispatch.ready();
		}
	}

	var readyStateCheckInterval = setInterval(_waitReady,10);
});


/*

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

		// viewing a repo
		if(path.match(/^\/.+\/.+$/))
		{
*/
/*
			GitHubPlus.template('button',function(tmpl){
				var data = {
					class: "new-issue",
					url: path+"/issues/new",
					title: 'New Issue'
				};
				var file = $(".file-navigation:first");
				if(file.length != 0)
				{
					return;
				}
				var btn = $(Mustache.render(tmpl,data)).appendTo("body");
				var p = file.offset();
				var w = file.outerWidth() - btn.outerWidth();
				btn.css('top', p.top+3+'px');
				btn.css('left', p.left+w+'px');
			});
*//*

		}
	}
	}, 10);
});*/
