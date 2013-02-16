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



//Reference for validation: http://web.enavu.com/tutorials/create-an-amazing-contact-form-with-no-ready-made-plugins/
//
//
//

$(function() {
	$('#ss-form').submit(function(e) {

		e.preventDefault();

		var error = 'false';
		var email = $('#entry_1972873101').val();

		if (email.length == 0 || email.indexOf('@') == '-1') {
			var error = true;
			$('.form-error').fadeIn(500);
		}

		if (error == 'false') {
			$.ajax({
				type: 'POST',
				url: 'https://docs.google.com/forms/d/1i0MYZIbUS6ty8djYN8_iM3ReGHbQDmBJVO2r5vS81kw/formResponse',
				data: $(this).serialize(),
				success: function(data) {
					$('#ss-form').fadeOut();
					$('.success-msg').fadeToggle();
				},
			});

		}

	});
});