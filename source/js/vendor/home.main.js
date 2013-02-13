//Yes I know, my $ is bad and I should feel bad! (V)(;,,;)(V)

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

$(function() {
	$('#ss-submit').on('click', function(event) {
		$('#ss-form').fadeOut();
		$('.success-msg').fadeToggle();
		return false;
	});
});

//Reference for validation: http://web.enavu.com/tutorials/create-an-amazing-contact-form-with-no-ready-made-plugins/
//
//
//

