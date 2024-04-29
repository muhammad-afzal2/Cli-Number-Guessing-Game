#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 20 + 1);
const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please Guess a Number between 1-20",
  },
]);
// conditional statement
if (answers.userGuessedNumber === randomNumber) {
  console.log("Congratulation You Guessed Right Number");
} else {
  console.log("You Guessed Wrong Number");
}
