$("document").ready(function () {

	var count = 0;
	while (count < 100) {
		var op = $("<option>").attr("value", count).html(count);
		$("#age").append(op);
		count++;
	}

	var subs = 663965;
	setInterval(function() {
		var ftr = $('#subscribers');
		subs++;
		ftr.html(subs);
	}, 3000);
});