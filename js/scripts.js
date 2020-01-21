console.log("https://github.com/techb");


// https://github.com/objectivehtml/FlipClock
var date = new Date(2020, 7, 21);
var now = new Date();
var diff = (date.getTime()/1000) - (now.getTime()/1000);
var clock = jQuery('#timer-container').FlipClock(diff, {
	clockFace: 'DailyCounter',
	countdown: true,
});