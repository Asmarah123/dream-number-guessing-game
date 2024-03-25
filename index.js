#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWEllcome to my dream-number-guessing-game\n");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number between 1-6:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guess a correct number.");
}
else {
    console.log("Sorry, You guess a wrong numbe.");
}
