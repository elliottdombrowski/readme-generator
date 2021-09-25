// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const generateReadMe = util.promisify(fs.writeFile);

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?'
    },
    {
        type: 'input',
        name: 'audience',
        message: 'Who is this app built for?'
    },
    {
        type: 'input',
        name: 'function',
        message: 'What is this projects main feature?'
    },
    {
        type: 'input',
        name: 'feature',
        message: 'What else does this project do?'
    },
    {
        type: 'input',
        name: 'tech',
        message: 'What technology was this project built with?'
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Does this project need to be installed?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const writeReadMe = (answers) => {
    console.log("fuck");
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => generateReadMe('README.md', writeReadMe(answers)))
        .then(() => console.log("made ya a readme"))
        .catch((err) => console.log(err));
}

function promptUser() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();