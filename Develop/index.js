const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// fs, inquirer, path, generateMarkdown.js - require

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        validate : function(input) {
            if (input == 0) {
                return "Please enter your GitHub username";
            } return true;
        }
    },
    {   type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
    validate : function(input) {
        if (input == 0) {
            return "Please enter your email address";
        } return true;
    }
},
    {
        type: "input",
        name: "name",
        message: "What is the name of the author?",
        validate : function(input) {
            if (input == 0) {
                return "Please enter a name";
            } return true;
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate : function(input) {
            if (input == 0) {
                return "Please enter a title";
            } return true;
        }
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {   type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.',
        validate : function(input) {
            if (input == 0) {
                return "Please enter a description";
            } return true;
        }
    },
    {   type: 'input',
        name: 'contributers',
        message: 'Please enter the names of any contributors.',
    },
    {   type: 'input',
        name: 'installations',
        message: 'What instillations do you need to run your project?',
        validate : function(input) {
            if (input == 0) {
                return "Please enter the installation instructions";
            } return true;
        }
    },
    {   type: 'input',
        name: 'image',
        message: 'Insert a Mockup of your project if you have one.',
},
]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // use fs to write file, path

    // activity 13
}

// TODO: Create a function to initialize app
function init() {
    // use inquirer and prompt user for input, take in responses, then write the responses to te file

    // activity 20

    // inside of writeToFile - file name, call your generateMarkdown function and pass in the responses that you got
}

// Function call to initialize app
init();
