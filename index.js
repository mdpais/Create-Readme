// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require(`./utils/generateMarkdown`)

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
        choices: [`None`, `Apache License 2.0`, `GNU GPL v3`, `MIT License`, `BSD 3-Clause License`, `Boost Software License 1.0`, `Creative Commons Zero`, `Mozilla Public License 2.0`, `The Unilicense`],
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
        writeToFile(file, generateMarkdown(answers));
      });
}

// Function call to initialize app
init();
