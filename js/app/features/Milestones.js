/**
 * Adds the Milestones tab.
 */
define(['App/Dispatch','App/Template'],function(dispatch,template)
{
	/**
	 * Adds a milestone tab on the vertical tabs.
	 */
	var milestoneTab = {
		name: 'milestone-tab',
		init: function()
		{
			var selected = window.location.pathname.endsWith("/issues/milestones") || window.location.pathname.endsWith("/issues/milestones/new");
			var $issues = $("ul.sunken-menu-group > li[aria-label='Issues']");
			var issue_url = $issues.find('a').attr('href');
			var $group = $issues.parent();

			if(selected)
			{
				$group.find('li a.selected').removeClass('selected');
			}

			template.get('menu',function(tmpl)
			{

				var data = {
					key: 'milestones',
					title: 'Milestones',
					url: issue_url + '/milestones',
					hotkey: 'g m',
					icon: 'gear',
					selected: selected
				};
				$issues.after(Mustache.render(tmpl,data));
			});

		}
	};

	/**
	 * Adds a "New Milestone" button to the tabs nav.
	 */
	var newMilestone = {
		name: 'new-milestone',
		init: function()
		{
			var $tabnav = $(".tabnav a.js-new-issue-button").removeClass("primary").parent();

			var $list = $("#milestone_list");
			var $newButton = $list.find("a.btn-create-a-new-milestone");
			$newButton.removeClass().addClass('button minibutton bigger primary').text('New Milestone');
			$newButton.prependTo($tabnav);

			$list.find(".column:first > div.rule").remove();
		}
	};

	/**
	 * Fixes the create milestone UI.
	 */
	var createMilestone = {
		name: 'create-milestone',
		init: function()
		{
			var $tabnav = $(".tabnav a.js-new-issue-button").removeClass("primary").parent();
			$("#new_milestone").find("button[type='submit']").addClass("primary");
		}
	};

	dispatch.register(/.*/,milestoneTab);
	dispatch.register(/^.*\/issues\/milestones$/,newMilestone);
	dispatch.register(/^.*\/issues\/milestones\/new$/,createMilestone);
});