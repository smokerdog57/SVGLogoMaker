# SVG Logo Maker

## Badges
    
![github](https://img.shields.io/badge/github-Profile-lightgrey.svg) ![jses6](https://img.shields.io/badge/JavaScript--ES6-yellow.svg) ![node.js](https://img.shields.io/badge/node.js-12.0-green.svg) ![npm](https://img.shields.io/badge/npm-6.14.4-blue.svg) ![filesystem](https://img.shields.io/badge/fs-File_System-red.svg) ![inquirer](https://img.shields.io/badge/Inquirer-8.2.4-purple.svg)

## Description

This is a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a shape, shape color and text content and text color for the logo. The app saves the generated SVG to an `.svg` file.
  
## Table of Contents
  
- [Description](#description)

- [Installation](#installation)

- [Usage](#usage)

- [Requirements](#requirements)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)
  
## Installation
  
1. create a new github repository named 'svglogomaker'
2. launch microsoft visual studio Code app
3. enter cli:  cd ~/bootcamp/homework
4. enter cli:  git clone <repository> // creates SVGLogoMaker directory
5. enter cli:  cd SVGLogoMaker
6. enter cli:  npm init
7. enter cli:  npm i inquirer@8.2.4  // install inquirer node.js code
8. enter cli:  npm i jest --dev-save // install jest node.js test code
  
## Usage

Execute the app (node index.js) at the command line and you will be asked to input the logo characteristics: logo shape type (circle,triangle,square), logo shape color, logo text and logo text color. This will result in the creation of a file entitled logo.svg which includes the SVG code to render the logo.  You can then view the logo on the live server.

Castify link:   https://drive.google.com/file/d/1_P32OhU37DymUzNjt863pcYXy64DSBQK/view

## Requirements

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## License

github
https://opensource.org/licenses/MIT

jses6
https://opensource.org/licenses/MIT

node.js
https://opensource.org/licenses/No license required

npm
https://opensource.org/licenses/Artistic-2.0

filesystem
https://opensource.org/licenses/ISC

inquirer
https://opensource.org/licenses/MIT

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

## Contributing

1. Sandy Smith (tutor):  Sandy helped me understand the challenge readme instructions.

## Tests

The following example test should pass:

```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
```
in addition the following two test suites should pass:
1. shapes.test.js
2. svg.test.js

## Questions
  
### Github username
smokerdog57

### Github url
https://github.com/smokerdog57/svglogomaker
  
### Contact me
email: smokerdog57@gmail.com
phone: 941-221-1132