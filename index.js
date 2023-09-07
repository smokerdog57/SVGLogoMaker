const { Circle, Triangle, Square } = require('./lib/shapes.js');
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'textContent',
        message: 'Enter text (1 -3 characters) that will be displayed in the logo.',
        validate: function (input) {
            // Use a regular expression to check the length of the input
            const valid = input.length >= 1 && input.length <= 3;
            return valid || 'Please enter text between 1 and 3 characters.';
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter logo text color keyword or hexadecimal number'
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
        message: 'Enter logo shape color - keyword or hexadecimal number'
    },
];

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
            //let circle;
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
            const svg = shape.render();
            writeToFile(`./examples/logo.svg`,svg);
        })
        .catch(error => console.error(error));
}

init();
