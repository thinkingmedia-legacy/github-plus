App = {};

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

requirejs.config({
	baseUrl: '/js',
	paths: {
		'app': '/js/app',
		'feature': '/js/app/features',
		'lib': '/js/lib',
		'backbone': '/js/lib/backbone-min',
		'jquery': '/js/lib/jquery.min',
		'tipsy': '/js/lib/jquery.tipsy',
		'mustache': '/js/lib/mustache',
		'underscore': '/js/lib/underscore-min'
	}});

requirejs(["feature/download"]);

requirejs(["app/dispatch"],function(dispatcher)
{
	var readyStateCheckInterval = setInterval(function()
											  {
												  if(document.readyState === "complete")
												  {
													  clearInterval(readyStateCheckInterval);
													  console.log("document is ready");
												  }
											  },10);
});


/*

GitHubPlus = {

	templates: [],

	*/
/**
	 * Loads a template
	 *
	 * @param {string} name
	 * @param {function} fn Call back when the template is loaded.
	 *//*

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
