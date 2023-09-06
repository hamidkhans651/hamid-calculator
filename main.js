#!/usr/bin/env node
import inquirer from "inquirer";
import chalkanimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let glitchTitle = chalkanimation.glitch("Let's start calculation"); // Start
    await sleep();
    glitchTitle.stop();
    console.log(` _____________________
    |  _________________  |
    | | JO  3.141592654 | |
    | |_________________| |
    |  __ __ __ __ __ __  |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    | |__|__|__|__|__|__| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
welcome();
async function askQuestion() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "operation",
            message: "Which operation do you want to perform?\n",
            choices: ["addition", "subtraction", "multiplication", "division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2:",
            when: (answers) => ["addition", "subtraction", "multiplication", "division"].includes(answers.operation)
        },
    ])
        .then((answers) => {
        switch (answers.operation) {
            case "addition":
                console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
                break;
            case "subtraction":
                console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
                break;
            case "multiplication":
                console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
                break;
            case "division":
                if (answers.num2 === 0) {
                    console.log("Division by zero is not allowed.");
                }
                else {
                    console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
                }
                break;
            default:
                console.log("Invalid operation.");
        }
    });
}
askQuestion();
