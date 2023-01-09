// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({title, description, installation, usage, license, contributing, tests, github, email}) =>
`#${title}

##Description
${description}

##Table of Contents
    Installation
    Usage
    License
    Contributing
    Tests
    Questions

##Installation
${installation}

##Usage
${usage}

##License
${license}

##Contributing
${contributing}

##Tests
${tests}

##Questions
If you have any questions regarding this project, you can contact me through my GitHub profile ${github} or email me at ${email}`;

// TODO: Create an array of questions for user input
const questions = [`What's the title of your project?`, `Enter a description for your project`, `What are the steps required to install your project?`, `What are the instructions to use your project?`, `Which of the following licenses would you like to use?`, `What are your guidelines for developers contributing to your project?`, `Provide examples on how to run tests for your application.`, `What's the link to your GitHub profile?`, `What's your email address?`];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
