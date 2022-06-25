const shellfile = require("./shellfile");
const filename = process.argv.slice(2);

(() => {
    try {
        if (filename.length > 0) {
            shellfile(filename);
        } else {
            throw "please input topic";
        }
    } catch (err) {
        console.log(err);
    }
})();
