const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


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

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                type: "asset/resource",

                generator: {
                    filename: "assets/image/[name][ext][query]"
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: "./src/template.html"}),
        new MiniCssExtractPlugin({filename: "styles/main.css"})
    ],

    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin()
        ]
    },

    devtool: tool,

    devServer: {
        contentBase: "./build",
        hot: true
    }
};