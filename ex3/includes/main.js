$("document").ready(function() {
	var plus = $('h1');
	var counter = 0;
	var oldop;
	var oldcol;

	while (counter < 4) {
		addbox('.l3_main');
		counter++;
	}

	plus.click(function() {
		addbox('.l3_main'); 
	});		
});

function addbox (element) {
	var tempbox = $('<section>').addClass('l3_box').css('opacity', Math.random()).hover(function() {
		oldop = $(this).css('opacity');
		oldcol = $(this).css('background-color');
		$(this).css({'opacity': '1', 'background-color': '#ffffff'});
	}, function() {
		$(this).css({'opacity': oldop, 'background-color': oldcol});
	});
	$(element).append(tempbox);
}