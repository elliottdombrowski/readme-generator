const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeReadMe = require('./generate');
const licenseInfo = require('./licenseInfo');
const licenseBadge = require('./licensebadge');

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
        name: 'usage',
        message: 'Please provide basic instruction on how to use this application.'
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
    },
    {
        type: "list",
        name: "license",
        message: "Does your project have a license?",
        choices: [
          "mit",
          "lgpl-3.0",
          "mpl-2.0",
          "agpl-3.0",
          "unlicense",
          "apache-2.0",
          "gpl-3.0",
          "gpl-2.0",
          "epl-1.0",
          "cc0-1.0",
          "bsd-3-clause",
          "bsd-2-clause",
          "wtfpl",
          "artistic-2.0",
          "zlib",
        ],
    },
];


//TODO- ADD COMMENTS AND LINKS, BADGE, FORMATTING

async function addLicense(answers) {
    answers["licenseBody"] = licenseBadge(answers.license);
    await licenseInfo(answers.license)
            .then((info) => answers["licenseInfo"] = info.data.description)
    return answers;
}

function init() {
    promptUser()
        .then((answers) => (addLicense(answers)))
        .then((answers) => generateReadMe('genREADME.md', writeReadMe(answers)))
        .then(() => console.log("made ya a readme"))
        .catch((err) => console.log(err));
}


function promptUser() {
    return inquirer.prompt(questions);
}

init();