#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number - done
//2) user input for guessing number - done
//3) compare user input with computer generated number and show result - done
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed right number.");
}
else {
    console.log("Sorry! you guessed wrong number.");
}
