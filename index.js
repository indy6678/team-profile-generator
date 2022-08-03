const fs = require('fs');
const inquirer = require('inquirer');
const managerList = require('./src/manager')

const PromptManager = () => {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        return answers}
    )
}

// const PromptEngineer = () => {
//     inquirer.prompt()
// }

// function call to initialize app

PromptManager();