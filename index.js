// * fs Node library for reading and writing files
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is name of your project?",
      name: "projectName",
    },
  ])
  .then((response) => {
    const input = `# ${response.projectName}
    ​
    ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
    ​
    ## Description
    ​
    ## Table of Contents 
    ​
    * [Installation](#installation)
    ​
    * [Usage](#usage)
    ​
    * [License](#license)
    ​
    * [Contributing](#contributing-here-is-a-header)
    ​
    * [Tests](#tests)
    ​
    * [Questions](#questions)
    ​
    ## Installation
    ​
    To install necessary dependencies, run the following command:
    ​
    ## Usage
    ​
    You can use this applicaiton by running node index.js.
    ​
    ## License
    ​
    This project is licensed under the MIT license.
        
    ## Contributing Here Is A Header
    ​
    Fork and pull request.
    ​
    ## Tests
    ​
    To run tests, run the following command:
    ​
    ## Questions
    ​
    If you have any questions about the repo, open an issue or contact me directly at dmueller@2u.com. You can find more of my work at [dmueller2u](https://github.com/dmueller2u/).`;
    fs.writeFile("README.md", input, (err) => {
      err ? console.error(err) : console.log("Logged!");
    });
  });
