const fs = require('fs');
const inquirer = require('inquirer');
const managerList = require('./src/manager');
const engineerList = require('./src/engineer');

const promptManager = () => {
    return inquirer.prompt(managerList)
}

const promptEngineer = () => {
    return inquirer.prompt(engineerList);
}

// function call to initialize app

promptManager()
    .then(answers => {
        console.log(answers)
    })
    .then(promptEngineer)
    .then(answers => {
        console.log(answers);
    })