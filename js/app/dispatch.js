App.Dispatch = {
	/**
	 * List of registered features.
	 */
	features: [],
	/**
	 * Adds a feature to the dispatcher.
	 *
	 * @param {string} path Regex of URL paths that must match.
	 * @param feature
	 */
	register: function(path,feature)
	{
		console.log("feature:"+feature.name);
	}
};

define(function() {	return App.Dispatch; });