const fs = require("fs");
let initData = require("./../init/initData");
const Session = require("./session").Session;

function updateAndSaveSession(currentPlayerName, lastUsedWord) {
    // eslint-disable-next-line no-console

    let session = Object.assign(new Session(), initData.session);
    session.usedWords.push(lastUsedWord);
    session.currentPlayerName = currentPlayerName;
    session.lastUsedWord = lastUsedWord;
    // eslint-disable-next-line no-console
    console.log("DEBUG", "saving a new session ", session);

    fs.writeFileSync(
        "./tmp/" + session.playerName + ".json",
        JSON.stringify(session)
    );
    initData.session = session;
}
exports.updateAndSaveSession = updateAndSaveSession;
