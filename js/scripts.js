/* Business Logic */
var leapYear = function(year) {
	if (year % 100 === 0) {
		console.log("if year is: " + year);
		return false;
	}
	else if (year % 4 === 0) {
		console.log("else if year is: " + year);
		return true;
	}
	else {
		console.log("else year is: " + year);
		return false;
	}
};

/* UI Logic*/
$(document).ready(function() {
	$('form#leap-year').submit(function(event) {
		event.preventDefault();
		var year = parseInt($('input#year').val());
		var result = leapYear(year);
		console.log("year: " + year);
		console.log("result: " + result);
		$('#result').text(result);
	});
});