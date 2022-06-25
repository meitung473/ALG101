var shell = require("shelljs");
const FOLDERNAME = "LIOJ";

function testfile(filename) {
    let path = FOLDERNAME + "/" + filename + "/";
    shell
        .cat(path + filename + ".txt")
        .exec(`node ${path + filename}.js`, { async: true }, (err) => {
            if (err) throw err;
        });
}

module.exports = testfile;
