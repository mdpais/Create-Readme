// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case `None`:
      return(``);
    case `Apache License 2.0`:
      return(`![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`);
    case `GNU GPL v3`:
      return(`![License](https://img.shields.io/badge/License-GPLv3-blue.svg)`);
    case `MIT License`:
      return(`![License](https://img.shields.io/badge/License-MIT-yellow.svg)`);
    case `BSD 3-Clause License`:
      return(`![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`);
    case `Boost Software License 1.0`:
      return(`![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`);
    case `Creative Commons Zero`:
      return(`![License](https://licensebuttons.net/l/zero/1.0/80x15.png)`);
    case `Mozilla Public License 2.0`:
      return(`![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`);
    case `The Unilicense`:
      return(`![License](https://img.shields.io/badge/license-Unlicense-blue.svg)`);
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case `None`:
      return(``);
    case `Apache License 2.0`:
      return(`https://opensource.org/licenses/Apache-2.0`);
    case `GNU GPL v3`:
      return(`https://www.gnu.org/licenses/gpl-3.0`);
    case `MIT License`:
      return(`https://opensource.org/licenses/MIT`);
    case `BSD 3-Clause License`:
      return(`https://opensource.org/licenses/BSD-3-Clause`);
    case `Boost Software License 1.0`:
      return(`https://www.boost.org/LICENSE_1_0.txt`);
    case `Creative Commons Zero`:
      return(`http://creativecommons.org/publicdomain/zero/1.0/`);
    case `Mozilla Public License 2.0`:
      return(`https://opensource.org/licenses/MPL-2.0`);
    case `The Unilicense`:
      return(`http://unlicense.org/`);
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  console.log(link);
  return `## License
  
  [${license}](${link})
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title} ${badge}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  -[Installation](#installation)

  -[Usage](#usage)

  -[License](#license)

  -[Contributing](#contributing)

  -[Tests](#tests)

  -[Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${licenseSection}## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions regarding this project, you can contact me through my GitHub profile ${data.github} or email me at ${data.email}
`;
}

module.exports = generateMarkdown;
