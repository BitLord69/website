// Set default check in date to today
$("#check-in").val(new Date().toLocaleDateString());
// $("#check-in");

// Set default check out date to tomorrow
var date = new Date();
date.setDate(date.getDate() + 1);
$("#check-out").val(date.toLocaleDateString());
