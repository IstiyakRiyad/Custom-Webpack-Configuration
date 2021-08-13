const path = require('path');

let mode = "development";
let tool = "source-map";


if(process.env.NODE_ENV === "production") {
    mode = "production";
    tool = false;
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
    },

    devtool: tool,

    devServer: {
        contentBase: "./build",
        hot: true
    }
};