/* eslint-disable no-console */
const init = require("./src/init/init").init;
const game = require("./src/game/game");

init();
game.startGame();

console.log("DONE");
