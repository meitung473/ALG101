const createFile = require("./copy");
const filename = process.argv.slice(2);

(() => {
    try {
        if (filename.length > 0) {
            createFile(filename);
        } else {
            throw "please input topic";
        }
    } catch (err) {
        console.log(err);
    }
})();
