define(function() {
	return {
		/**
		 * List of registered features.
		 */
		features: [],
		/**
		 * Adds a feature to the dispatcher.
		 *
		 * @param {RegExp} path Regex of URL paths that must match.
		 * @param feature
		 */
		register: function(path,feature)
		{
			this.features.push({ path: path, feature: feature });
		},

		/**
		 * Called when the document is ready.
		 */
		ready: function()
		{
			for(var i=0; i < this.features.length; i++)
			{
				if(window.location.pathname.match(this.features[i].path))
				{
					this.features[i].feature.init();
				}
			}
		}
	};
});