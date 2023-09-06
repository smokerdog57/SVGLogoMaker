class Shapes {
    constructor(textColor, shapeColor) {
        this.textColor = textColor; // text color
        this.shapeColor = shapeColor; // shape color
    }

    render() {
        // Code to render the shape
    }
}

class Circle extends Shapes {
    constructor(radius, textColor, shapeColor) {
        super(textColor, shapeColor); // Call the base class constructor
        this.radius = radius; // Set the radius property
    }

    render() {
        // Code to render the circle
    }
}

class Triangle extends Shapes {
    constructor(sideNum, baseLength, baseAngle1, baseAngle2, textColor, shapeColor) {
        super(textColor, shapeColor); // Call the base class constructor
        this.sideNum = sideNum; // Set the number of sides
        this.baseLength = baseLength; // Set the base length
        this.baseAngle1 = baseAngle1; // Set the first base angle
        this.baseAngle2 = baseAngle2; // Set the second base angle
    }

    render() {
        // Code to render the triangle
    }
}

class Square extends Shapes {
    constructor(sideNum, sideLength, textColor, shapeColor) {
        super(textColor, shapeColor); // Call the base class constructor
        this.sideNum = sideNum; // Set the number of sides
        this.sideLength = sideLength; // Set the length of the sides
    }

    render() {
        // Code to render the square
    }
}

module.exports = Shapes;



