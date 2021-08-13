const path = require('path');

let mode = "development";


if(process.env.NODE_ENV === "production") {
    mode = "production";
}


module.exports = {
    mode: mode,

    entry: {
        main: "./src/scripts/main.js"
    },

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
        clean: true
    }
};