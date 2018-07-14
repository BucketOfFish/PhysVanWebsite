$('.question-of-the-day .answer.btn').on('click', function(e) {
	e.preventDefault();
	var $this = $(this);
	var $collapse = $this.closest('.question-of-the-day').find('.collapse');
	$collapse.collapse('toggle');
	$this.hide();
	$('#recent-posts').hide();
	$('#related-questions').fadeIn("slow");
});

$(document).ready(function() {
	$('#nav').affix({
		offset: {
			top: $('#ask-header').height()//+$('#nav').height()
		}
	});
});