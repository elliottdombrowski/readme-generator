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
        message: 'Who is this applications target audience?'
    },
    {
        type: 'input',
        name: 'feature',
        message: 'Provide a brief description of your project.'
    },
    {
        type: 'input',
        name: 'tech',
        message: 'What technology was this project built with?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Provide a brief description of how to install this application.'
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Who contributed to this project?'
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

const writeReadMe = (answers) => 
`# ${answers.title}

## Description 
###This application was built for ${answers.audience}.

### This application will ${answers.function}. It will also ${answers.feature}.

## Technologies 
###This project was built with ${answers.tech}.

## Installation 
### ${answers.install}.

## Contributors 
### This application was built by ${answers.contributor}.
`;

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