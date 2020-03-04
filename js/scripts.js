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
const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;
// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
    e.preventDefault();
    isMenuOpen = !isMenuOpen;
    // toggle a11y attributes and active class
    menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
    menu.hidden = !isMenuOpen;
    nav.classList.toggle('nav--open');
});