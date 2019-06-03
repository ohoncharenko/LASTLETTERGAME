/* eslint-disable no-console */
const question = require("readline-sync").question;
function askForValidname() {
    let answer = question("Enter your name: ");
    let isValidName = answer.match("^[A-z0-9]+$");
    if (isValidName) {
        console.log("Thank you,", answer);
        return answer;
    } else {
        console.log(`Please use only letters and numbers.`);
        return askForValidname();
    }
}

exports.askForValidname = askForValidname;
