console.log("https://github.com/techb");



// https://github.com/objectivehtml/FlipClock
var date = new Date(2020, 7, 21);
var now = new Date();
var diff = (date.getTime()/1000) - (now.getTime()/1000);
var clock = $('#timer-container').FlipClock(diff, {
	clockFace: 'DailyCounter',
	countdown: true,
});


// https://codepen.io/mxbck/pen/xdaGNL
$('.menuBtn').click(function() {
    $(this).toggleClass('act');
        if($(this).hasClass('act')) {
            $('.mainMenu').addClass('act');
        }
        else {
            $('.mainMenu').removeClass('act');
        }
});

// close menu on menu item select
$('.top-menu ul li a').click(function() {
    $('.menuBtn').toggleClass('act');
    if($(this).hasClass('act')) {
        $('.mainMenu').addClass('act');
    }
    else {
        $('.mainMenu').removeClass('act');
    }
});