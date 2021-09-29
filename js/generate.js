
const writeReadMe = (answers) =>
`# ${answers.title}
${answers.licenseBody}

## Description 

### This application was built for ${answers.audience}.<br />
${answers.feature}.<br />

---

## Table Of Contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributors](#contributors)
- [Contact](#questions)
- [License](#license)

---

## Technologies 
### This project was built with ${answers.tech}<br />


## Installation 
### ${answers.install}<br />

## Usage
### ${answers.usage}<br />

## Tests
### There are currently no tests for this project.<br />

## License
### ${answers.license}<br />
${answers.licenseInfo}

## Contributors 
### This application was built by ${answers.contributor}<br />


## Questions
### Contact me with further questions here-
- [${answers.github}](https://github.com/${answers.github})
- ${answers.email}
`;

module.exports = writeReadMe;