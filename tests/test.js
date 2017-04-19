describe("Circle.setColor", function() {

    it("изменение цвета меньшего круга на белый", function() {
        smallCircleObj.setColor("white");
        assert.equal(smallCircleObj.color, "white");
    });

    it("изменение цвета большего круга на серый", function() {
        bigCircleObj.setColor("grey");
        assert.equal(bigCircleObj.color, "grey");
    });

});

describe("Circle.setRadius", function() {

    it("изменение радиуса болшего круга на 200", function() {
        BIGRADIUS = 200;
        bigCircleObj.setRadius(BIGRADIUS);
        assert.equal(bigCircleObj.radius, BIGRADIUS);
    });

    it("изменение радиуса меньшего круга на 25", function() {
        SMALLRADIUS = 25;
        smallCircleObj.setRadius(SMALLRADIUS);
        assert.equal(smallCircleObj.radius, SMALLRADIUS);
    });

});

describe("Circle.move", function() {

    it("круг не двигается, если мышь находится не рядом с ним", function() {
        var eventObj = document.createEvent('MouseEvents'); 
        var oldCircleX = smallCircleObj.domElement.style.left;
        var oldCircleY = smallCircleObj.domElement.style.top;
        for(var i = 150; i < 160; i += 1) {
            eventObj.initMouseEvent( 'mousemove', true, true, window, 1, i, i, parseInt(smallCircleObj.domElement.style.left) + 50, parseInt(smallCircleObj.domElement.style.top) + 50, 
                                    false, false, true, false, 0, null );
            bigCircleObj.domElement.dispatchEvent(eventObj);
        }
        assert.equal(smallCircleObj.domElement.style.left, oldCircleX);
        assert.equal(smallCircleObj.domElement.style.top, oldCircleY);
    });

    it("круг двигается, если мышь находится рядом ним", function() {
        var eventObj = document.createEvent('MouseEvents'); 
        var oldCircleX = parseInt(smallCircleObj.domElement.style.left);  
        var oldCircleY = smallCircleObj.domElement.style.top;
        for(var i = 150; i < 160; i += 1) {
            eventObj.initMouseEvent( 'mousemove', true, true, window, 1, i, i, parseInt(smallCircleObj.domElement.style.left) + 25, parseInt(smallCircleObj.domElement.style.top) + 25, 
                                    false, false, true, false, 0, null );
            bigCircleObj.domElement.dispatchEvent(eventObj);
            oldCircleX -= 5;
        }
        assert.equal(smallCircleObj.domElement.style.left, oldCircleX + "px");
        assert.equal(smallCircleObj.domElement.style.top, oldCircleY);
    });

});

