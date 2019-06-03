class Session {
    constructor(
        playerName,
        currentPlayerName,
        isGameOver,
        usedWords,
        lastUsedWord
    ) {
        this.playerName = playerName;
        this.currentPlayerName = currentPlayerName;
        this.isGameOver = isGameOver;
        this.usedWords = usedWords;
        this.lastUsedWord = lastUsedWord;
    }
}
module.exports.Session = Session;
