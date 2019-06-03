let initData = require("./../init/initData");
function changeCurrentPlayer(currentPlayer) {
    if (currentPlayer === initData.player1.name) {
        initData.currentPlayer = initData.player2.name;
    } else initData.currentPlayer = initData.player1.name;
    // eslint-disable-next-line no-console
    console.log(
        "DEBUG",
        "chaged current player from " +
            currentPlayer +
            " to " +
            initData.currentPlayer
    );
    initData.session["currentPlayerName"] = initData.currentPlayer;
}
exports.changeCurrentPlayer = changeCurrentPlayer;
