// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // conditional to check if license is empty
  // if so return the license badge
  // if not return and empty string

  //return `markdown syntax - ![text to be displayed] (link itself)`
  // https://img.shields.io/badge/license-MIT-badge.svg
  // https://img.shields.io/badge/license-${license}-badge.svg
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

// same pattern that you used above (conditional statement)
// return '## License
// this repository has the ${license} license'
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents

  ## Description

`;
}

module.exports = generateMarkdown;
