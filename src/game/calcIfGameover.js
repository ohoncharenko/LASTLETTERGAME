let initData = require("./../init/initData");
function calcIfGameover(dictionary, usedWords) {
    if (dictionary.length === usedWords.length) {
        initData.session["isGameOver"] = true;
        return true;
    } else {
        return false;
    }
}
exports.calcIfGameover = calcIfGameover;
