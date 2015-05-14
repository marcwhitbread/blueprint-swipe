var obj = {}

$(document).ready(function() {
	
	$('#blueprint-swipe').on('mouseenter', function(e) {
		
		$('#blueprint-swipe').on('mousemove.swipe', function(e) {
			
			if((e.pageX - obj.x) > 0) {
				
				var offset = 
					(obj.w - (e.pageX - obj.x)) < 40 ? 40 :
					(obj.w - (e.pageX - obj.x)) > obj.w - 40 ? obj.w - 40 : obj.w - (e.pageX - obj.x);
				
				$('#blueprint-swipe .foreground').stop().animate({
					right: offset
				}, 450, 'easeOutBack');
				
			}
			
			if((e.pageY - obj.y) > 0) {
				
				var offset = 
					(e.pageY - obj.y) < 60 ? 60 :
					(e.pageY - obj.y) > obj.h - 60 ? obj.h - 60 : e.pageY - obj.y;
				
				$('#blueprint-swipe .foreground .handle').stop().animate({
					top: offset
				}, 500, 'easeOutElastic');
				
			}
			
		});
			
	});
	
	$('#blueprint-swipe').on('mouseleave', function(e) {
		$('#blueprint-swipe').off('mousemove.swipe');
		
		$('#blueprint-swipe .foreground .handle').stop().delay(250).animate({
			top: obj.h / 2
		}, 750, 'easeInOutExpo');
	});
	
	$(window).on('resize.', calibrate);
	calibrate(undefined);
	
});

var calibrate = function(e) {
	
	obj = {
		x: $('#blueprint-swipe').offset().left,
		y: $('#blueprint-swipe').offset().top,
		w: $('#blueprint-swipe').width(),
		h: $('#blueprint-swipe').outerHeight(true)
	}
	
}