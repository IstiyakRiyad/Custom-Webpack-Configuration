const path = require('path');

module.exports = {
    entry: {
        main: "./src/scripts/main.js"
    },

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
        clean: true
    }
};