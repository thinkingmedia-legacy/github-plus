requirejs(["app/dispatch"]);

GitHubPlus = {

	templates: [],

	/**
	 * Loads a template
	 *
	 * @param {string} name
	 * @param {function} fn Call back when the template is loaded.
	 */
	template: function(name,fn) {
		if(GitHubPlus.template[name] === undefined)
		{
			$.get(chrome.extension.getURL('templates/'+name+'.mustache')).done(function(tmpl){
				fn(tmpl);
			});
		}
		else
		{
			fn(GitHubPlus.template[name]);
		}
	},

	button: function(title) {
	}
};

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
		$("a.minibutton.sidebar-button span.octicon.octicon-cloud-download").parent().addClass("primary");

		// set the logo
		GitHubPlus.template('logo',function(tmpl){
			var data = {
				url: chrome.extension.getURL('icons/icon24.png')
			};
			$("div.header:first").append(Mustache.render(tmpl,data));
			$(".ext-github-plus-logo").tipsy({gravity: 'w'});
		});

		// viewing a repo
		if(path.match(/^\/.+\/.+$/))
		{
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
*/
		}
	}
	}, 10);
});