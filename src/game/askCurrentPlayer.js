let initData = require("./../init/initData");
function askCurrentPlayer(currentPlayer, lastUsedWord) {
    if (currentPlayer !== "bot") {
        return initData.player1.askForANewWord(lastUsedWord);
    } else return initData.player2.tryGenerateANewWordAutomatically();
}
exports.askCurrentPlayer = askCurrentPlayer;
