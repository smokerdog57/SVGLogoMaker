// svg.js
class SVG {
  constructor() {
    this.textContent = "";clear
    this.textColor = "black";
    this.shape = null;
  }

  setText(textContent, textColor) {
    if (textContent.length > 3) {
      throw new Error("Text must not exceed 3 characters.");
    }
    this.textContent = textContent;
    this.textColor = textColor;
  }

  setShape(shape) {
    this.shape = shape;
  }

  render() {
    // Check if no parameters set
    if (!this.shape && !this.textContent) {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
    }

    // Create the SVG structure with the text
    if (this.textContent && this.textColor && !this.shape) {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text></svg>`;
    }

    // Create the SVG structure with the text, and shape
    if (this.textContent && this.textColor && this.shape) {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text></svg>`;
    }
  }
}
module.exports = SVG;
