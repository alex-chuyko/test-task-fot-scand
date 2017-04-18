var circle = document.getElementById("circle");
var bigCircle = document.getElementById("bigCircle");

var SMALLRADIUS = 25,
    BIGRADIUS = 200;

function isMove(mouse, centerX, centerY) {
    var result =  Math.sqrt(Math.pow(mouse.clientX - centerX, 2) + Math.pow(mouse.clientY - centerY, 2));
    return result < SMALLRADIUS + 5;
}

function isSmallInBig(centerX, centerY) {
    var result =  Math.sqrt(Math.pow(centerX - BIGRADIUS, 2) + Math.pow(centerY - BIGRADIUS, 2));
    return result <= BIGRADIUS - SMALLRADIUS - 5;
}

circle.addEventListener("mousemove", function(e) {
    smallCircleObj.move(e);
});
circle.addEventListener("mouseover", function(e) {
    smallCircleObj.move(e);  
});
bigCircle.addEventListener("mousemove", function(e) {
    smallCircleObj.move(e);
});

var bigCircleObj = new Circle(bigCircle, BIGRADIUS, "green");
var smallCircleObj = new Circle(circle, SMALLRADIUS, "red");