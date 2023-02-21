// * Inquirer library
const inquirer = require("inquirer");
// * fs Node library for reading and writing files
const fs = require("fs");
// * Questions variable
const questions = [
  {
    type: "input",
    message: "What is your GitHub username? ",
    name: "githubName",
  },
  {
    type: "input",
    message: "What is your email address? ",
    name: "email",
  },
  {
    type: "input",
    message: "Project name: ",
    name: "projectName",
  },
  {
    type: "input",
    message: "Add a discription: ",
    name: "discription",
  },
  {
    type: "input",
    message: "Installation code: ",
    name: "install",
  },
  {
    type: "input",
    message: "Usage code: ",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution guidelines: ",
    name: "contribution",
  },
  {
    type: "input",
    message: "Test instructions: ",
    name: "test",
  },
  {
    type: "list",
    message: "Choose a license: ",
    choices: [
      "MIT",
      "Apache License 2.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
    name: "license",
  },
];
// * Calling the questions through inquirer
inquirer
  .prompt(questions)
  // * Generating the response
  .then((response) => {
    // * Generating the markdown
    const input = `# ${response.projectName}
${licenseBadge(response.license)}
## Description
${response.discription}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing-here-is-a-header)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
${response.install}
## Usage
You can use this applicaiton by running:
${response.usage}
## License
This project is licensed under the ${response.license} license.
## Contributing
${response.contribution}
## Tests
To run tests, run the following command:
${response.test}
## Questions
If you have any questions about the repo, open an issue or contact me directly at ${
      response.email
    }. You can find more of my work at ${
      response.githubName
    }(https://github.com/${response.githubName}/).`;
    fs.writeFile("README.md", input, (err) => {
      err ? console.error(err) : console.log("Logged!");
    });
  });

// * Checking the answer for the license and using the corresponding badge
function licenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge =
      "!GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)";
  } else if (license === "Apache License 2.0") {
    badge =
      "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "Mozilla Public License 2.0") {
    badge =
      "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
  } else if (license === "The Unlicense") {
    badge =
      "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
  }
  return badge;
}
