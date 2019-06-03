const {
    loadOrCreateSessionFromFile
} = require("./loadOrCreateSessionFromFile");
const sayHello = require("./sayHello").sayHello;
const askForValidname = require("./askForValidname").askForValidname;
const loadDictionary = require("./loadDictionary").loadDictionary;
const loadOptions = require("./loadOptions").loadOptions;
const showOptions = require("./showOptions").showOptions;
let initData = require("./initData");

function init() {
    sayHello();
    initData.playerName = askForValidname();
    loadOptions();
    showOptions();
    initData.dictionary = loadDictionary(initData.chosenDictionaryFileName);
    initData.session = loadOrCreateSessionFromFile(initData.playerName);
}
exports.init = init;
