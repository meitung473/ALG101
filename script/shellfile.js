var shell = require("shelljs");
const FOLDERNAME = "LIOJ";

function testfile(filename) {
    let path = FOLDERNAME + "/" + filename + "/";
    shell.cat(path + filename + ".txt").exec(`node ${path + filename}.js`);
}

module.exports = testfile;
