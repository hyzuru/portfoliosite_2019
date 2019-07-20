window.requestAnimFrame = { function() {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ) {
        window.setTimeout ( callback, 1000/60);
    };
}}();

var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
cw = window.innerWidth,
ch = window.innerHeight,
fireworks = [],
particles = [],
hue = 120,
limiterTotal = 5,
limiterTick = 0,
timerTotal = 80,
timerTick = 0,
mousedown = false,
mx,
my;

canvas.width = cw;
canvas.height = ch;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function calculateDistance(p1x, p1y, p2x, p2y) {
    var
}