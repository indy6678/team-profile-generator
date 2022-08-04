const fs = require('fs');
const inquirer = require('inquirer');
const employeeList = require('./lib/employee')
const managerList = require('./lib/manager');
const engineerList = require('./lib/engineer');
const internList = require('./lib/intern');
const writeFile = require('./src/generate-site')

const promptManager = () => {
    return inquirer.prompt(managerList)
}

const promptEngineer = () => {
    return inquirer.prompt(engineerList);
}

const promptIntern = () => {
    return inquirer.prompt(internList)
};

// function call to initialize app

promptManager()
    .then(answers => {
        console.log(answers);
    })
    .then(promptEngineer)
    .then(answers => {
        console.log(answers);
    })
    .then(promptIntern)
    .then(answers => {
        console.log(answers)
    })
    .then(writeFile());