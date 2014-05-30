/**
 * Enables quick editing of fields by clicking on text.
 */
define(['App/Dispatch'],function(dispatch)
{
	function _click($el)
	{
		if($el.length == 1)
		{
			$el[0].click();
		}
	}

	var repoDesc = {
		name: 'repo-desc',
		init: function()
		{
			var $desc = $("div.repository-description");
			if($desc.length == 0)
			{
				return;
			}

			$desc.find('p').on('click',function()
			{
				var $edit = $desc.parent().find('span.edit-link > a');
				_click($edit);
				$desc.parent().find('form.edit-repository-meta > button:contains("Save")').addClass('blue');
			});
		}
	};

	var discussionTitle = {
		name: 'discussion-title',
		init: function()
		{
			$("#js-discussion-header").find("h1.gh-header-title").on("click",function()
			{
				var $edit = $("#js-discussion-header").find('.gh-header-actions > button:contains("Edit")');
				_click($edit);
			});
		}
	};

	var commentEdit = {
		name: 'comment-edit',
		init: function()
		{
			var $comments = $('div.js-discussion div.comment');
			$comments.find('div.comment-content div.comment-body > p').on('click',function(e)
			{
				if($(e.target).prop('tagName') !== 'P')
				{
					return;
				}
				var $edit = $(this).closest('div.comment').find('.timeline-comment-header a.js-comment-edit-button');
				_click($edit);
				$(this).closest('div.comment-content').find('form.js-comment-update button:contains("Update Comment")').addClass('primary');
			});
		}
	};

	dispatch.register(/.*/,repoDesc);
	dispatch.register(/.*/,discussionTitle);
	dispatch.register(/.*/,commentEdit);
});