//Yes I know, my jQuery is bad and I should feel bad! (V)(;,,;)(V)
$(function() {
	$('body').delegate('section', 'waypoint.reached', function(event, direction) {
		var $active = $(this);
		if (direction === "up") {
			$active = $active.prev();
		}
		if (!$active.length) $active = $active.end();
		$('.link-active').removeClass('link-active');
		$('a[href=#'+$active.attr('id')+']').addClass('link-active');
	});
	$('section').waypoint({ offset: '10' });
});

//Smooth Scrolling
$(function() {
	$('a').bind('click',function(event){
		var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top
			}, 1200,'easeInOutExpo');
		event.preventDefault();
	});
});

