// require createHTML.js for page creation
const createHTML = require('./src/createHTML')

// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// empty array to receive team strings
const teamArr = [];

const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require("./lib/engineer");

// prompts for manager input
const managerPrompt = [
  {
    type: "input",
    message: "Enter team manager name.",
    name: "name",
  },
  {
    type: "input",
    message: "Enter team manager ID.",
    name: "id",
  },
  {
    type: "input",
    message: "Enter team manager email address.",
    name: "email",
  },
  {
    type: "input",
    message: "Enter team manager office number.",
    name: "offNum",
  },
];


  // prompts for adding employee
const employeePrompt = [
  {
    type: "list",
    message: "Select the role of new member",
    name: "role",
    choices: ["Intern", "Engineer"],
  },
  {
    type: "input",
    message: "Enter name of new member",
    name: "name",
  },
  {
    type: "input",
    message: "Enter ID of new member",
    name: "id",
  },
  {
    type: "input",
    message: "Enter email of new member",
    name: "email",
  },
  {
    type: "input",
    message: "Enter GitHub username of new engineer",
    name: "github",
    when: (input) => input.role === "Engineer",
  },
  {
    type: "input",
    message: "Enter school name of new intern",
    name: "school",
    when: (input) => input.role === "Intern",
  },
  {
    type: "confirm",
    name: "confirmAddEmployee",
    message: "Would you like to add more team members?",
    default: false,
  },
];


// Prompt User for information
  // Set user as manager
const addManager = () => {
  return inquirer
    .prompt(managerPrompt)
    .then((managerResponse) => {
      const { name, id, email, offNum } = managerResponse;
      const manager = new Manager (name, id, email, offNum);
      teamArr.push(manager);
      console.log(manager);
    });
  }


// function for adding employee and adding to team array
const addEmployee = () => {
  return inquirer
    .prompt(employeePrompt)
    .then(employeeInfo => {
      let { name, id, email, role, github, school, confirmAddEmployee } = employeeInfo;
      let employee;
      // *Maybe refactor into switch case*
      if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);
        console.log(employee);
      }
      teamArr.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArr);
      } else {
        return teamArr;
      }
    })
};

const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Congratulations, your team profile page has been created. Open index.html to view the page.");
    }
  })
};

addManager()
  .then(addEmployee)
  .then(teamArr => {
    return createHTML(teamArr);
  })
  .then(teamPage => {
    return writeFile(teamPage);
  })
  .catch(err => {
    console.log(err);
  })

  //1. ID:
  //2. Email:
  //3. GitHub Username(Engineer):
  //4. School(Intern):
  

// Need to link GitHub profile to cards.

// Need to link Default Email program when card eamils are clicked.

// Create some way to enter manager name, ID, email, and office number. 
  // After this has been checked, user can add other profiles.
  // Present list to select what kind of profile we're making:
    // 1. Engineer - then return to menu.
    // 2. Intern - then return to menu.

// Option to finish building the team presented ???
  // Writes/renders HTML to view team details.




// FILE STRUCTURE:
// .
// ├── __tests__/             //jest tests
// │   ├── Employee.test.js
// │   ├── Engineer.test.js
// │   ├── Intern.test.js
// │   └── Manager.test.js
// ├── dist/                  // rendered output (HTML) and CSS style sheet      
// ├── lib/                   // classes
// ├── src/                   // template helper code 
// ├── .gitignore             // indicates which folders and files Git should ignore
// ├── index.js               // runs the application
// └── package.json       