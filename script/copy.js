const fs = require("fs");
const FOLDERNAME = "LIOJ";
const BASEFILE = "base.js";

function createFile(filename) {
    const path = FOLDERNAME + "/" + filename;
    if (!fs.existsSync(path)) {
        fs.mkdir(path, { recursive: true }, (err) => {
            if (err) throw err;
            copyData(filename, path);
        });
    } else {
        console.log("file exists and override !");
        copyData(filename, path);
    }
}

/**
 * file and path name,same for LIOJ topic
 * @param {String} name
 */
function copyData(name, path) {
    const outputPath = path + "/" + name;
    fs.readFile(`${__dirname}/${BASEFILE}`, function (err, data) {
        if (err) throw err;
        fs.writeFile(outputPath + ".js", data, function (err) {
            if (err) throw err;
            console.log(name + " js complete");
        });
        fs.writeFile(outputPath + ".txt", "", function (err) {
            if (err) throw err;
            console.log(name + " txt complete");
        });
    });
}

module.exports = createFile;
