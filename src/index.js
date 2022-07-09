const fs = require("fs");
const inquirer = require("inquirer");
const figlet = require("figlet");
const chalk = require("chalk");
const validator = require("email-validator");

const managerQuestions = [
  {
    name: "teamName",
    type: "input",
    message: "Please enter your team name.",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please provide the answer.")
        : true,
  },
  {
    name: "managerName",
    type: "input",
    message: "Please enter the Manager's name.",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please provide the answer.")
        : true,
  },
  {
    name: "managerID",
    type: "input",
    message: "Please enter the Manager's employee ID number.",
    validate: (answer) =>
      answer && !isNaN(answer)
        ? true
        : chalk.yellow(
            "This is mandatory. Please provide the correct ID number."
          ),
  },
  {
    name: "managerEmail",
    type: "input",
    message: "Please enter the manager's email address.",
    validate: (email) =>
      !validator.validate(email)
        ? chalk.yellow("This is mandatory. Please enter a valid email address.")
        : true,
  },
  {
    name: "managerOfficeNumber",
    type: "input",
    message: "Please enter the manager's office number.",
    validate: (answer) =>
      answer && !isNaN(answer)
        ? true
        : chalk.yellow(
            "This is mandatory. Please enter the correct office number."
          ),
  },
];

const selectionQuestion = [
  {
    type: "list",
    name: "selection",
    message: "What of the following team member would you like to add next?",
    choices: [
      {
        name: "Engineer",
        value: "engineer",
      },
      {
        name: "Intern",
        value: "intern",
      },
      {
        name: "None - Exit",
        value: "exit",
      },
    ],
  },
];

const engineerQuestions = [
  {
    name: "engineerName",
    type: "input",
    message: "Please enter the engineer's name.",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please provide the answer.")
        : true,
  },
  {
    name: "engineerID",
    type: "input",
    message: "Please enter the engineer's employee ID.",
    validate: (answer) =>
      answer && !isNaN(answer)
        ? true
        : chalk.yellow(
            "This is mandatory. Please provide the correct ID number."
          ),
  },
  {
    name: "engineerEmail",
    type: "input",
    message: "Please enter the engineer's email address.",
    validate: (email) =>
      !validator.validate(email)
        ? chalk.yellow("This is mandatory. Please enter a valid email address.")
        : true,
  },
  {
    name: "engineerGitHub",
    type: "input",
    message: "Please enter the engineer's GitHub username.",
    validate: (answer) =>
      !answer
        ? chalk.yellow(
            "This is mandatory. Please enter a correct GitHub username."
          )
        : true,
  },
];

const internQuestions = [
  {
    name: "internName",
    type: "input",
    message: "Please enter the intern's name.",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please provide the answer.")
        : true,
  },
  {
    name: "internID",
    type: "input",
    message: "Please enter the intern's employee ID number.",
    validate: (answer) =>
      answer && !isNaN(answer)
        ? true
        : chalk.yellow(
            "This is mandatory. Please provide the correct ID number."
          ),
  },
  {
    name: "internEmail",
    type: "input",
    message: "Please enter the intern's email address.",
    validate: (email) =>
      !validator.validate(email)
        ? chalk.yellow("This is mandatory. Please enter a valid email address.")
        : true,
  },
  {
    name: "internSchool",
    type: "input",
    message: "Please enter the intern's school name.",
    validate: (answer) =>
      !answer
        ? chalk.yellow("This is mandatory. Please enter a correct school name.")
        : true,
  },
];

module.exports = {
  managerQuestions,
  selectionQuestion,
  engineerQuestions,
  internQuestions,
};

const init = async () => {
  const html = generateHTML(answers);

  fs.writeFileSync(".dist/team-profile.html", html);

  console.log(
    figlet.textSync("Team profile generated!", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 64,
      whitespaceBreak: true,
    })
  );
};

init();
