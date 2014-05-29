define(function()
{
	return {
		templates: [],
		get: function(name,fn)
		{
			if(this.templates[name] === undefined)
			{
				$.get(chrome.extension.getURL('templates/'+name+'.mustache')).done(function(tmpl){
					this.templates[name] = tmpl;
					fn(tmpl);
				}.bind(this));
			}
			else
			{
				fn(this.templates[name]);
			}
		}
	};
});