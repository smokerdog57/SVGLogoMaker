class Shapes {
    constructor(textContent, textColor, shapeType, shapeColor) {
        this.textContent = textContent, // <=3 character text to be displayed inside of shape
        this.textColor = textColor, // text color
        this.shapeType = shapeType, // one of three types: circle, square, triangle
        this.shapeColor = shapeColor // shape color
    }

    render() {
        // Code to render the shape
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
        </svg>`;
    }
}

class Circle extends Shapes {
    constructor(textContent, textColor, shapeType, shapeColor) {
        super(textContent, textColor, shapeType, shapeColor); // Call the base class constructor
    }

    render() {
        // Code to render the circle
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
        </svg>`;
    }
}


class Triangle extends Shapes {
    constructor(textContent, textColor, shapeType, shapeColor) {
        super(textContent, textColor, shapeType, shapeColor) // Call the base class constructor
    }

    render() {
        // Code to render the triangle
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="110,30 205,190 5,190" fill="${this.shapeColor}" />
        <text x="100" y="160" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
        </svg>`;
    }
}


class Square extends Shapes {
    constructor(textContent, textColor, shapeType, shapeColor) {
        super(textContent, textColor, shapeType, shapeColor) // Call the base class constructor
    }

    render() {
        // code here
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="25" width="160" height="160" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
        </svg>`;
    }
}

module.exports = { Circle, Triangle, Square };