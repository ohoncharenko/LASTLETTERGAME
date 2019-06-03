const fs = require("fs");
function loadDictionary(fileName) {
    var dictionary = fs
        .readFileSync("./dictionaries/" + fileName)
        .toString()
        .split("\n");
    return dictionary;
}

exports.loadDictionary = loadDictionary;
