const question = require("readline-sync").question;
let initData = require("./../init/initData");
class Player {
    constructor(name) {
        this.name = name;
    }
    askForANewWord(lastUsedWord) {
        let answer;
        if (lastUsedWord.length > 0) {
            answer = question(
                "Please enter a new valid word starting with '" +
                    lastUsedWord.slice(-1) +
                    "' or just press enter to surrender: "
            );
        } else {
            answer = question(
                "Please start a game by entering a new valid word. You can just press enter on your turn to surrender: "
            );
        }

        return answer;
    }
    tryGenerateANewWordAutomatically() {
        if (
            initData.dictionary.length === initData.session["usedWords"].length
        ) {
            initData.session["isGameOver"] = true;
            return "";
        }
        const availableWords = initData.dictionary.reduce((result, word) => {
            // get the first letter. (this assumes no empty words in the list)
            const letter = word[0];

            // ensure the result has an entry for this letter
            if (
                !initData.session["usedWords"].includes(word) &&
                letter === initData.session["lastUsedWord"].slice(-1)
            ) {
                result.push(word);
            }

            return result;
        }, []);

        if (availableWords.length === 0) {
            initData.session["isGameOver"] = true;
            return "";
        }
        // eslint-disable-next-line no-console
        console.log("DEBUG", "bot's answer is ", availableWords[0]);
        return availableWords[0];
    }
}
module.exports.Player = Player;
