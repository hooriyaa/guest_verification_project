#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log("\t", "-".repeat(70), "\t");
console.log(
  chalk.bold.magenta(
    "\t\tWelcome To My Cli Typescript Project - 'Guest Verification Center'\t\t"
  )
);
console.log("\t", "-".repeat(70), "\t");

let myLoop = true;
let myInvitedGuestList: string[] = [
  "hooriya",
  "mahnoor",
  "malahim",
  "hashir",
  "hira",
  "masood",
  "bilal",
  "fareed",
  "alsa",
  "anna",
];

while (myLoop) {
  let userInput = await inquirer.prompt({
    type: "input",
    name: "UserName",
    message: "Please Enter your name here:",
  });
  let { UserName } = userInput;
  let lowerGuestName = UserName.toLowerCase();
  if (myInvitedGuestList.includes(lowerGuestName)) {
    console.log(
      `Welcome Dear, ${chalk.bold.green(
        lowerGuestName
      )} please make yourself comfortable.. `
    );
    process.exit();
  } else {
    console.log(
      `\nSorry dear,${chalk.bold.red(
        lowerGuestName
      )} your name is not in the guest list....\n`
    );
    let askNameAgain = await inquirer.prompt({
      type: "confirm",
      message:
        "Do you have any another name you go by? if so, we can check again in our guest list!",
      name: "otherName",
      default: false,
    });
    if (!askNameAgain.otherName) {
      myLoop = false;
      console.log(
        chalk.bold.blue(
          "\nWe apologize, but you are not in the guest list. Please contact the event organize..\n"
        )
      );
    }
  }
}
