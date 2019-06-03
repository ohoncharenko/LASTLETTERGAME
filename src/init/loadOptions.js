/* eslint-disable no-console */
const readFileSync = require("fs").readFileSync;
let initData = require("./initData");

function loadOptions() {
    let file = readFileSync("./options.json");
    initData.options = JSON.parse(file);
}

exports.loadOptions = loadOptions;
