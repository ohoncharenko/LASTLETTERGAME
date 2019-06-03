const question = require("readline-sync").question;
let initData = require("./../init/initData");
function askIfAnswerIsAcceptable(answer) {
    let rejectAnswer = question(
        'Submit "r" is you want to reject this word: ' + answer + "  "
    );
    if (rejectAnswer === "r" || rejectAnswer === "R") {
        initData.session["usedWords"].push(answer);
        return false;
    }
    return true;
}
exports.askIfAnswerIsAcceptable = askIfAnswerIsAcceptable;
