/* eslint-disable no-console */
const question = require("readline-sync").question;
let initData = require("./initData");

function showOptions() {
    let index = 1;
    let optionsArray = initData.options.dictionaries;
    let modesArray = initData.options.modes;
    console.log("Please choose dictionary:");
    optionsArray.forEach(option => {
        console.log(index, option.desc);
        index++;
    });
    let chosenDictionary = askToChooseADictionary();
    4;
    initData.chosenDictionaryFileName = optionsArray[chosenDictionary - 1].file;
    console.log("Please choose game mode:");
    index = 1;
    modesArray.forEach(mode => {
        console.log(index, mode.desc);
        index++;
    });
    let chosenMode = askToChooseAMode();
    initData.chosenMode = modesArray[chosenMode - 1].name;
}
function askToChooseADictionary() {
    let answer = question("");
    let isValidName =
        answer.match("^[0-9]+$") &&
        answer > 0 &&
        answer < initData.options.dictionaries.length + 1;
    if (isValidName) {
        return answer;
    } else {
        console.log(`Please enter valid number.`);
        return askToChooseADictionary();
    }
}

function askToChooseAMode() {
    let answer = question("");
    let isValidName =
        answer.match("^[0-9]+$") &&
        answer > 0 &&
        answer < initData.options.modes.length + 1;
    if (isValidName) {
        if (initData.options.modes[answer - 1].name === "multiplayer") {
            console.log("This mode is not supported yet.");
            askToChooseAMode();
        }
        return answer;
    } else {
        console.log(`Please enter valid number.`);
        return askToChooseAMode();
    }
}

exports.showOptions = showOptions;
