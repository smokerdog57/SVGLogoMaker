// dependencies
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const fs = require('fs');
const inquirer = require('inquirer');
const SVG = require('./lib/svg.js'); // Import the SVG class from svg.js

// prompt for logo characteristics
const questions = [
    {
        type: 'input',
        name: 'textContent',
        message: 'Enter text (1 - 3 characters) that will be displayed in the logo.',
        validate: function (input) {
            // check the length of the input
            const valid = input.length >= 1 && input.length <= 3;
            return valid || 'Please enter text between 1 and 3 characters.';
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter logo text color keyword or hexadecimal number',
        validate: function (input) {
            // check the length of the input
            const valid = input.length >= 1;
            return valid || 'Please enter color keyword or hex';
        }
    },
    {
        type: 'list',
        name: 'shapeType',
        message: 'Select the logo shape type',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter logo shape color - keyword or hexadecimal number',
        validate: function (input) {
            // check the length of the input
            const valid = input.length >= 1;
            return valid || 'Please enter color keyword or hex';
        }
    }
];
// write logo.svg file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Generated ${fileName}`);
        }
    });
}

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            // switch based on shape type
            switch (answers.shapeType) {
                case 'circle':
                    shape = new Circle(answers.textContent, answers.textColor, answers.shapeType, answers.shapeColor);
                    break;
                case 'triangle':
                    shape = new Triangle(answers.textContent, answers.textColor, answers.shapeType, answers.shapeColor);
                    break;
                case 'square':
                    shape = new Square(answers.textContent, answers.textColor, answers.shapeType, answers.shapeColor);
                    break;
                default:
                    console.error('Invalid shape type.');
                    return;
            }

            const svg = new SVG();  // Create an instance of SVG class
            svg.setText(answers.textContent, answers.textColor);  // set text characteristics
            svg.setShape(shape);  // set shape characteristics

            const svgCode = svg.render(); // Generate the SVG code using the render method of SVG class
            writeToFile(`./examples/logo.svg`, svgCode);  // call writeToFile function
        })
        .catch(error => console.error(error));
}

init();