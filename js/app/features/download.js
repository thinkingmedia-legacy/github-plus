App.Features.Download = {
	name: 'download'
};

define(["app/dispatch"],function(dispatch)
{
	dispatch.register("*",App.Features.Download);
});