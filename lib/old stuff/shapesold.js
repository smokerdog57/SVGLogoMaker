class Shapes {
    constructor(textContent, textColor, shapeType, shapeColor) {
        this.textContent = textContent, // <=3 character text to be displayed inside of shape
        this.textColor = textColor, // text color
        this.shapeType = shapeType, // one of three types: circle, square, triangle
        this.shapeColor = shapeColor // shape color
    }


    renderCommonL1() {
        // Common code for all shapes (first line)
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    }

    renderCommonL2() {
        // Common code for all shapes (third line)
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>`;
    }
}

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
        return `${this.renderCommonL1()}<circle cx="150" cy="100" r="80" fill="${this.color}" />
        ${this.renderCommonL2()}
        </svg>`;
    }
}

class Triangle extends Shapes {
    constructor(textContent, textColor, shapeType, shapeColor) {
        super(textContent, textColor, shapeType, shapeColor) // Call the base class constructor
        this.color = shapeColor;
    }

    render() {
        // Code to render the triangle
        return `${this.renderCommonL1()}<polygon points="150, 10 290, 190 10, 190" fill="${this.color}" />
        ${this.renderCommonL2()}
        </svg>`;
    }
}

class Square extends Shapes {
    constructor(textContent, textColor, shapeType, shapeColor) {
        super(textContent, textColor, shapeType, shapeColor) // Call the base class constructor
        this.color = shapeColor;
    }

    render() {
        // code to render the square
        return `${this.renderCommonL1()}<rect x="70" y="25" width="160" height="160" fill="${this.color}" />
        ${this.renderCommonL2()}
        </svg>`;
    }
}

module.exports = { Circle, Triangle, Square };