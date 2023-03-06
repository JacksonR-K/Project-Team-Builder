const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let employees = [];

//Questions used when creating an instance of a Manager
const managerQuestions = [
    {
        type: 'input',
        message: "Team Manager's Name:",
        name: 'name',
        validate: hasValue,
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
        validate: isValidNum,
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email',
        validate: isValidEmail,
    },
    {
        type: 'input',
        message: 'Office Number:',
        name: 'office',
        validate: isValidNum,
    },
]

//Questions used when creating an instance of a Engineer
const engineerQuestions = [
    {
        type: 'input',
        message: 'Name:',
        name: 'name',
        validate: hasValue,
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
        validate: isValidNum,
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email',
        validate: isValidEmail,
    },
    {
        type: 'input',
        message: 'Github:',
        name: 'github',
        validate: hasValue,
    },
]

//Questions used when creating an instance of a Intern
const internQuestions = [
    {
        type: 'input',
        message: 'Name:',
        name: 'name',
        validate: hasValue,
    },
    {
        type: 'input',
        message: 'Employee ID:',
        name: 'id',
        validate: isValidNum,
    },
    {
        type: 'input',
        message: 'Email:',
        name: 'email',
        validate: isValidEmail,
    },
    {
        type: 'input',
        message: 'School:',
        name: 'school',
        validate: hasValue,
    },
]

//Validate user input is an integer
function isValidNum(input) {
    if (Number.isInteger(Number.parseInt(input))) {
        return true;
    }
    else {
        return "ID must be a positive whole number!";
    }
}

//Validate user input is not blank
function hasValue(input) {
    if (input === "") {
        return "Cannot be blank! Enter a value"
    }
    else {
        return true;
    }
}

function isValidEmail(input) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)) {
        return true;
    }
    else {
        return "Invalid email address format! Please try again."
    }
}

//Using the information in the parameter, create an object of a given type of Employee (Manager/Engineer/Intern)
function addEmployee (data) {
    //Parse ID from string into an integer before passing into constructors
    data.id = Number.parseInt(data.id);

    //Determine the type of employee by checking for their unique data (Office/Github/School) and add the new instance to an array of Employees
    if (data.office !== undefined) {
        data.office = Number.parseInt(data.office); //Parse office number from string into integer
        employees.push(new Manager(data.name, data.id, data.email, data.office));
    }
    else if (data.github !== undefined) {
        employees.push(new Engineer(data.name, data.id, data.email, data.github));
    }
    else if (data.school !== undefined) {
        employees.push(new Intern(data.name, data.id, data.email, data.school));
    }
}

//A recurring function that prompts the user to either add additional employees or finish building their team and end the program
function additionalPrompt() {
    inquirer
        .prompt(
            {
                type: 'list',
                message: 'Select another employee to add or select finish:',
                choices: ['Add Engineer', 'Add Intern', 'Finish building'],
                name: 'action',
            }
        )
        .then((response) => {
            //Generate HTML and end program
            if (response.action === 'Finish building') {
                writeToFile();
            } 
            //Check which type of Employee was selected to be added and prompting the user to enter that employee's information
            else {
                if (response.action === 'Add Engineer') {
                    var promptQuestions = engineerQuestions; 
                }
                else if (response.action === 'Add Intern') {
                    var promptQuestions = internQuestions;
                }
                inquirer
                    .prompt(promptQuestions)
                    .then((response) => {
                        addEmployee(response);
                        additionalPrompt(); //Cue additional prompt to add additional employees or finish building team
                    })
            }
        })
}

//Add the given HTML structure into a file called 'index.html' located in the dist folder structure
function writeToFile() {
    var data = htmlStructureGeneration();
    fs.writeFile('./dist/index.html', data, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully. It can be found in './dist/index.html'");
        }
    });
}

//Generate HTML structure to display the user's team based on the given information about their employees
function htmlStructureGeneration() {
    var structure = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://kit.fontawesome.com/08b7f8f7a0.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class="container-cards"> 
        ${htmlEmployeeGeneration()}
    </body>
    </html>`
    return structure;
}

//Creates chunks of HTML for each instance of Employee type with their corresponding info
function htmlEmployeeGeneration() {
    var employeeHTML = "";
    employees.forEach(employee => {
        switch (employee.constructor.name) {
            case 'Manager':
                employeeHTML += 
        `<div class="card">
            <div class="card-heading">
                <h2>${employee.name}</h2>
                <i class="fa-regular fa-id-card"></i>
                <h3 class="title">Manager</h3>
            </div>
            <div class="card-properties">
                <p>ID: ${employee.id}</p>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p>Office number: ${employee.officeNumber}</p>
            </div>
        </div>`;
                break;
            case 'Engineer':
                employeeHTML += 
    `
        <div class="card">
            <div class="card-heading">
                <h2>${employee.name}</h2>
                <i class="fa-solid fa-wrench"></i>
                <h3 class="title">Engineer</h3>
            </div>
            <div class="card-properties">
                <p>ID: ${employee.id}</p>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p>Github: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></p>
            </div>
        </div>`;
                break;
            case 'Intern':
                employeeHTML += 
    `
        <div class="card">
            <div class="card-heading">
                <h2>${employee.name}</h2>
                <i class="fa-solid fa-graduation-cap"></i>
                <h3 class="title">Intern</h3>
            </div>
            <div class="card-properties">
                <p>ID: ${employee.id}</p>
                <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p>School: ${employee.school}</p>
            </div>
        </div>`;
                break;
        }
    })
    return employeeHTML;
}

//Inital prompt when program starts. Asks user to add info for Manager employee
function init() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            addEmployee(response);
            additionalPrompt(); //Cue additional prompt to add additional employees or finish building team
        })
}

init();