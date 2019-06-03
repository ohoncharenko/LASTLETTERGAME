/* eslint-disable no-console */
let initData = require("./../init/initData");
const { gameOver } = require("./gameOver");
function validateAnswer(answer, lastUsedWord) {
    if (answer.length == 0) {
        gameOver();
    }
    let isInDict = true;
    if (!isInDictionary(answer)) {
        console.log("This word is not found in dictionary");
        isInDict = false;
    }
    if (lastUsedWord.length == 0 && isInDict) {
        return true;
    }
    if (lastUsedWord.length == 0 && !isInDict) {
        return false;
    }
    let isFirstLetterCorrect = true;
    if (lastUsedWord.slice(-1) !== answer[0]) {
        console.log("First letter should be " + lastUsedWord.slice(-1));
        isFirstLetterCorrect = false;
    }

    let isUsed = false;
    if (isUsedBefore(answer)) {
        console.log("This word is already used before");
        isUsed = true;
    }
    if (isInDict && isFirstLetterCorrect && !isUsed) {
        return true;
    } else return false;
}

function isUsedBefore(word) {
    console.log("DEBUG", initData.session["usedWords"]);
    return initData.session["usedWords"].includes(word);
}

function isInDictionary(word) {
    console.log(
        "DEBUG",
        "initData.dictionary.includes(word); = ",
        initData.dictionary.includes(word)
    );
    console.log(
        "DEBUG",
        "initData.dictionary.length; = ",
        initData.dictionary.length
    );

    return initData.dictionary.includes(word);
}
exports.validateAnswer = validateAnswer;
