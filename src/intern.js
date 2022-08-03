const internList = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the intern?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            }   else {
                console.log("Please enter the intern's name!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "What is the intern's ID number?",
        validate: idInput => {
            if(idInput) {
                return true;
            }   else {
                console.log("Please enter the intern's ID number!");
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            }   else {
                console.log("Please enter the intern's email address!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'school',
        message: "What school did the intern attend or is currently attending?",
        validate: schoolInput => {
            if(schoolInput) {
                return true;
            }   else {
                console.log("Please enter the name of the intern's school!")
                return false;
            }
        }
    },

    {
        type: 'list',
        name: 'selection',
        message: 'Select an option',
        choices: ['-Enter Engineer info', '-Enter Intern info', '-Finish creating team']
    }
]

module.exports = internList;