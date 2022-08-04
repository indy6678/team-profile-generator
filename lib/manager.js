// const managerList = [
//     {
//         type: 'input',
//         name: 'managerName',
//         message: 'What is the name of the team manager?',
//         validate: managerNameInput => {
//             if(managerNameInput) {
//                 return true;
//             }   else {
//                 console.log("Please enter the manager's name!");
//                 return false;
//             }
//         }
//     },

//     {
//         type: 'input',
//         name: 'managerId',
//         message: "What is the manager's ID number?",
//         validate: managerIdInput => {
//             if(managerIdInput) {
//                 return true;
//             }   else {
//                 console.log("Please enter the manager's ID number!");
//                 return false;
//             }
//         }

//     },

//     {
//         type: 'input',
//         name: 'email',
//         message: "What is the manager's email address?",
//         validate: emailInput => {
//             if(emailInput) {
//                 return true;
//             }   else {
//                 console.log("Please enter the manager's email address!");
//                 return false;
//             }
//         }
//     },

//     {
//         type: 'input',
//         name: 'officeNum',
//         message: "What is the manager's office number?",
//         validate: officeNumInput => {
//             if(officeNumInput) {
//                 return true;
//             }   else {
//                 console.log("Please enter the manager's office number!")
//                 return false;
//             }
//         }
//     },

//     {
//         type: 'list',
//         name: 'selection',
//         message: 'Select an option',
//         choices: ['-Enter Engineer info', '-Enter Intern info', '-Finish creating team']
//     }
// ]

// module.exports = managerList;

function Manager(name, id, email, role, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.officeNumber = officeNumber;
}

module.exports = Manager;