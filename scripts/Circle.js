function Circle(domElement, radius, color) {
    this.domElement = domElement;
    this.radius = radius;
    this.color = color;
    this.domElement.style.width = this.radius * 2 + "px";
    this.domElement.style.height = this.radius * 2 + "px";
    this.domElement.style.background = this.color;        
};

Circle.prototype.setRadius = function(radius) {
    this.radius = radius;
    this.domElement.style.width = radius * 2 + "px";
    this.domElement.style.height = radius * 2 + "px";
}

Circle.prototype.setColor = function(color) {
    this.color = color;
    this.domElement.style.background = color;
}

Circle.prototype.move = function(e) {
    var circle = this.domElement;
    var atan, smallCircleX, smallCircleY, dr = 5;
    var centerX = parseInt(circle.style.left) + SMALLRADIUS, centerY = parseInt(circle.style.top) + SMALLRADIUS;    
    if(isMove(e, centerX, centerY)) {
        smallCircleX = parseInt(circle.style.left);
        smallCircleY = parseInt(circle.style.top);
        atan = Math.atan2 (e.clientY - centerY, e.clientX - centerX);

        if(isSmallInBig(centerX, centerY)) {
            smallCircleY -= dr * Math.sin (atan);
            smallCircleX -= dr * Math.cos (atan);   
        } else {
            smallCircleY += 30 * Math.sin (atan);
            smallCircleX += 30 * Math.cos (atan);    
        }

        circle.style.left = smallCircleX + "px"; 
        circle.style.top = smallCircleY + "px";
    }
}