// Function to generate license badge
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  // Return the appropriate badge based on the license type
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GPL 3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD 3":
      return "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}

// Function to generate license link
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  // Return the appropriate link based on the license type
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL 3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

// Function to generate license section of README
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  // Return the appropriate license section based on the license type
  switch (license) {
    case "MIT":
      return `
## License

This project is licensed under the terms of the [MIT License](${renderLicenseLink(license)}).
      `;
    case "Apache 2.0":
      return `
## License

This project is licensed under the terms of the [Apache License 2.0](${renderLicenseLink(license)}).
      `;
    case "GPL 3.0":
      return `
## License

This project is licensed under the terms of the [GNU General Public License v3.0](${renderLicenseLink(license)}).
      `;
    case "BSD 3":
      return `
## License

This project is licensed under the terms of the [BSD 3-Clause License](${renderLicenseLink(license)}).
      `;
    default:
      return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about this project, please contact me directly at ${
    data.email
  }. You can view more of
