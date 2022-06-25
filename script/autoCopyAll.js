const createFile = require("./copy");

/**
 * auto create LIOJ all topic
 */
(async () => {
    for (let i = 1; i <= 53; i++) {
        let topic = i < 10 ? "0" + i : i;
        createFile("10" + topic);
    }
})();
