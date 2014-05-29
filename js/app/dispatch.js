define(function() {
	return {
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
			this.features.push({ path: path, feature: feature });
		},

		/**
		 * Called when the document is ready.
		 */
		ready: function()
		{
			var path = window.location.pathname;

			for(var i=0; i < this.features.length; i++)
			{
				if(path.match(this.features[i].path))
				{
					this.features[i].feature.init();
				}
			}
		}
	};
});