// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({title, description, installation, usage, license, contributing, tests, github, email}) =>
`# ${title}

## Description

${description}

## Table of Contents

    [Installation](#installation)
    [Usage](#usage)
    [License](#license)
    [Contributing](#contributing)
    [Tests](#tests)
    [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

If you have any questions regarding this project, you can contact me through my GitHub profile ${github} or email me at ${email}`;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        name: `title`,
        message: `What's the title of your project?`,
    },
    {
        type: `input`,
        name: `description`,
        message: `Enter a description for your project`,
    },
    {
        type: `input`,
        name: `installation`,
        message: `What are the steps required to install your project?`,
    },
    {
        type: `input`,
        name: `usage`,
        message: `What are the instructions to use your project?`,
    },
    {
        type: `list`,
        name: `license`,
        message: `Which of the following licenses would you like to use?`,
        choices: [`None`, `Apache License 2.0`, `GNU License`, `MIT License`, `BSD License`, `Boost Software License 1.0`, `Creative Commons Zero`, `Mozilla Public License 2.0`, `The Unilicense`],
    },
    {
        type: `input`,
        name: `contributing`,
        message: `What are your guidelines for developers contributing to your project?`,
    },
    {
        type: `input`,
        name: `tests`,
        message: `Provide examples on how to run tests for your application.`,
    },
    {
        type: `input`,
        name: `github`,
        message: `What's the link to your GitHub profile?`,
    },
    {
        type: `input`,
        name: `email`,
        message: `What's your email address?`,
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(`An error was encountered while creating the readme file.`) : console.log(`Your readme file was successfully created!`))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const file = `README.md`;
        writeToFile(file, generateHTML(answers));
      });
}

// Function call to initialize app
init();
