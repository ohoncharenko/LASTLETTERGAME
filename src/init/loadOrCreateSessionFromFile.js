const fs = require("fs");
const Session = require("../game/session").Session;
const readFileSync = require("fs").readFileSync;

function loadOrCreateSessionFromFile(playerName) {
    if (fs.existsSync("./tmp/" + playerName + ".json")) {
        let existingSession = readFileSync("./tmp/" + playerName + ".json");
        let obj = JSON.parse(existingSession);
        return Object.assign(new Session(), obj);
    } else {
        let newSession = new Session(playerName, playerName, false, [], "");
        return newSession;
    }
}
exports.loadOrCreateSessionFromFile = loadOrCreateSessionFromFile;
