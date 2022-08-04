const fs = require('fs');
const inquirer = require('inquirer');
const employeeList = require('./lib/employee')
const engineerList = require('./lib/engineer');
const internList = require('./lib/intern');
const writeFile = require('./src/generate-site')

const questionList = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the employee?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            }   else {
                console.log("Please enter a name!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number?",
        validate: idInput => {
            if(idInput) {
                return true;
            }   else {
                console.log("Please enter the ID number!");
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            }   else {
                console.log("Please enter an email address!");
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    }
]

const prompt = () => {
    return inquirer.prompt(questionList)
    .then(({role}) => {
        switch(role) {
            case 'Manager':
                return inquirer.prompt(
                    {
                        type: 'input',
                        name: 'officeNum',
                        message: "What is the manager's office number?",
                        validate: officeNumInput => {
                            if(officeNumInput) {
                                return true;
                            }   else {
                                console.log("Please enter the manager's office number!")
                                return false;
                            }
                        }
                    }
                );

            case 'Intern':
                return inquirer.prompt(
                    {
                        type: 'input',
                        name: 'school',
                        message: 'What school does, or did, the intern attend?',
                        validate: schoolInput => {
                            if(schoolInput) {
                                return true;
                            }   else{
                                console.log("Please enter the name of the school!")
                                return false;
                            }
                        }
                    }
                );

            case 'Engineer':
                return inquirer.prompt(
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the GitHub username?',
                        validate: githubInput => {
                            if(githubInput) {
                                return true;
                            }   else{
                                console.log("Please enter the GitHub username!")
                                return false;
                            }
                        }
                    }
                );
        }
    })
}


// function call to initialize app

prompt()
