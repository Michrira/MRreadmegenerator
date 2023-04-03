const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'BSD'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions for your project:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Function to generate README content
function generateREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![License](https://img.shields.io/badge/License-${answers.license}-green.svg)

This project is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions or concerns, please contact the project owner:  
GitHub: https://github.com/${answers.github}  
Email: ${answers.email}
`;
}

// Function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const readmeContent = generateREADME(answers);
    await writeFileAsync('README.md', readmeContent);
    console.log('README.md has been generated!');
  } catch (error) {
    console.error(error);
  }
}

// Function call to initialize app
init();
