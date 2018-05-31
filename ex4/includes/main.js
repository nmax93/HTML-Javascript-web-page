$("document").ready(function () {

	var count = 0;
	while (count < 100) {
		var op = $("<option>").attr("value", count).html(count);
		$("#age").append(op);
		count++;
	}
});