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

