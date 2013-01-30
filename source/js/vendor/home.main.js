//Yes I know, my jQuery is bad and I should feel bad! (V)(;,,;)(V)

//Smooth Scrolling
$(function() {
	$('a').bind('click',function(event){
		var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top
			}, 1500,'easeInOutExpo');
		event.preventDefault();
	});
});

//Waypoints
$(function() {
	$('body').delegate('.waypoint', 'waypoint.reached', function(event, direction) {
			var $active = $(this);
			if (direction === "up") {
				$active = $active.prev();
			}
			if (!$active.length) $active = $active.end();
			$('.active').removeClass('active');
			$('a[href=#'+$active.attr('id')+']').addClass('active');
		});
	$('.waypoint').waypoint({
			offset: '25'
	});
});


