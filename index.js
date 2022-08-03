const fs = require('fs');
const inquirer = require('inquirer');
const managerList = require('./src/manager');
const engineerList = require('./src/engineer');
const internList = require('./src/intern');

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
        console.log(answers);
    })