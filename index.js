#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operation to perform :",
        type: "list",
        name: "operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operation === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operation === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operation === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Enter valid input");
}
