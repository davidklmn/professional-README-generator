// * fs Node library for reading and writing files
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
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
  ])
  .then((response) => {
    const input = `# ${response.projectName}
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
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
This project is licensed under the MIT license.
## Contributing
${response.contribution}
## Tests
To run tests, run the following command:
${response.test}
## Questions
If you have any questions about the repo, open an issue or contact me directly at dmueller@2u.com. You can find more of my work at [dmueller2u](https://github.com/dmueller2u/).`;
    fs.writeFile("README.md", input, (err) => {
      err ? console.error(err) : console.log("Logged!");
    });
  });
