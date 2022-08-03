const managerList = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the team manager?',
        validate: managerNameInput => {
            if(managerNameInput) {
                return true;
            }   else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's ID number?",
        validate: managerIdInput => {
            if(managerIdInput) {
                return true;
            }   else {
                console.log("Please enter the manager's ID number!");
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            }   else {
                console.log("Please enter the manager's email address!");
                return false;
            }
        }
    },

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
    },

    {
        type: 'list',
        name: 'selection',
        message: 'Select an option',
        choices: ['Enter Engineer info', 'Enter Intern info', 'Finish creating team']
    }
]

const engineerList = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the engineer?',
        validate: engineerNameInput => {
            if(engineerNameInput) {
                return true;
            }   else {
                console.log("Please enter the engineer's name!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's ID number?",
        validate: engineerIdInput => {
            if(engineerIdInput) {
                return true;
            }   else {
                console.log("Please enter the engineer's ID number!");
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            }   else {
                console.log("Please enter the engineer's email address!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        validate: officeNumInput => {
            if(officeNumInput) {
                return true;
            }   else {
                console.log("Please enter the engineer's GitHub username!")
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'selection',
        message: 'Select an option',
        choices: ['*Enter Engineer info', '*Enter Intern info', '*Finish creating team']
    }
]

module.exports = managerList, engineerList;