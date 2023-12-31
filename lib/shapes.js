class Shapes {
    constructor(textContent, textColor, shapeType, shapeColor) {
        this.textContent = textContent, // <=3 character text to be displayed inside of shape
            this.textColor = textColor, // text color
            this.shapeType = shapeType, // one of three types: circle, square, triangle
            this.shapeColor = shapeColor // shape color
    };
};

class Circle extends Shapes {
    constructor(textContent, textColor, shapeType, shapeColor) {
        super(textContent, textColor, shapeType, shapeColor); // Call the base class constructor
        this.color = shapeColor;
    }
    setColor(shapeColor) {
        this.color = shapeColor;
    }

    render() {
        // Code to render the circle
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Triangle extends Shapes {
    constructor(textContent, textColor, shapeType, shapeColor) {
        super(textContent, textColor, shapeType, shapeColor) // Call the base class constructor
        this.color = shapeColor;
    }

    setColor(shapeColor) {
        this.color = shapeColor;
    }

    render() {
        // Code to render the triangle
        return `<polygon points=\"150, 18 244, 182 56, 182\" fill="${this.color}" />`
    }
}

class Square extends Shapes {
    constructor(textContent, textColor, shapeType, shapeColor) {
        super(textContent, textColor, shapeType, shapeColor) // Call the base class constructor
        this.color = shapeColor;
    }

    setColor(shapeColor) {
        this.color = shapeColor;
    }

    render() {
        // code to render the square
        return `<rect x=\"90\" y=\"40\" width=\"120\" height=\"120\" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };