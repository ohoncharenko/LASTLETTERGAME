/* eslint-disable no-console */
const { validateAnswer } = require("./validateAnswer");

const { changeCurrentPlayer } = require("./changeCurrentPlayer");

const { updateAndSaveSession } = require("./updateAndSaveSession");

const { askIfAnswerIsAcceptable } = require("./askIfAnswerIsAcceptable");

const { askCurrentPlayer } = require("./askCurrentPlayer");

const { calcIfGameover } = require("./calcIfGameover");
const { gameOver } = require("./gameOver");

let initData = require("./../init/initData");
const Player = require("./player").Player;

function startGame() {
    if (initData.chosenMode === "single") {
        console.log("DEBUG", "startGame singlemode");
        initData.player1 = new Player(initData.playerName);
        initData.player2 = new Player("bot");
        while (!initData.session.isGameOver) {
            let answer;
            let isAccepted = false;
            console.log("DEBUG", "game loop new cycle");
            initData.session["isGameOver"] = calcIfGameover(
                initData.dictionary,
                initData.session["usedWords"]
            );
            if (
                !initData.session["isGameOver"] &&
                initData.session["currentPlayerName"] !== "bot"
            ) {
                let isValidAnswer = false;
                do {
                    answer = askCurrentPlayer(
                        initData.session["currentPlayerName"],
                        initData.session["lastUsedWord"]
                    );
                    isValidAnswer = validateAnswer(
                        answer,
                        initData.session["lastUsedWord"]
                    );
                } while (!isValidAnswer);
            }
            if (
                !initData.session["isGameOver"] &&
                initData.session["currentPlayerName"] === "bot"
            ) {
                do {
                    answer = askCurrentPlayer(
                        initData.session["currentPlayerName"],
                        initData.session["lastUsedWord"]
                    );
                    if (answer.length == 0) gameOver();
                    isAccepted = askIfAnswerIsAcceptable(answer);
                } while (!isAccepted);
            }

            if (!initData.session["isGameOver"]) {
                updateAndSaveSession(
                    initData.session["currentPlayerName"],
                    answer
                );
                changeCurrentPlayer(initData.session["currentPlayerName"]);
            } else console.log("The answer was rejected.");
        }
    }
}
exports.startGame = startGame;
