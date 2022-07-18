  // conditional to check if license is empty if so return the license badge if not return and empty string return `markdown syntax - ![text to be displayed] (link itself)`
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': 
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break; 
    case 'APACHE 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'None':
      return '';
      break;
  }
}

// If there is no license, return an empty string return '## License this repository has the ${license} license'
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return ' [MIT License](LICENSE.MIT)';
      break;
    case 'APACHE 2.0':
      return ' [Apache License 2.0](LICENSE.APACHE)';
      break;
    case 'GPL 3.0':
      return ' [GNU General Public License v3](LICENSE.GPL)';
      break;
    case 'BSD 3':
      return ' [BSD 3-Clause License](LICENSE.BSD)';
      break;
    case 'None':
      return '';
      break;
  }
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      break;
    case 'APACHE 2.0':
      break;
    case 'GPL 3.0':
      break;
    case 'BSD 3':
      break;
    case 'None':
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)};

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [License](#license)
  * [Contributers](#contributers)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Mockup](#mockup)

  ## Description
  ${data.description}

  #Mockup

  #Contributers
  ${data.contributers}

  ## Installation
  ${data.installations}

  #QA
  You can reach me at ${data.email} or though the [GitHub profile](https://github.com/${data.github})

  ## License Information:
  This project is licensed under ${renderLicenseLink(data.license)}. Short version of the license: ${renderLicenseSection(data.license)}. 

`;
}

module.exports = generateMarkdown;
