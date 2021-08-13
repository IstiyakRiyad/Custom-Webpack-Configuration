const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


let mode = "development";
let tool = "source-map";
let outputName = "[name].js";
let imageName = "[name][ext][query]";
let cssName = "[name].css";

if(process.env.NODE_ENV === "production") {
    mode = "production";
    tool = false;
    outputName = "[name].[contenthash].js";
    imageName = "[name].[hash][ext][query]";
    cssName = "[name].[contenthash].css";
}


module.exports = {
    mode: mode,

    entry: {
        main: "./src/scripts/main.js"
    },

    output: {
        filename: "scripts/" + outputName,
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
                    filename: "assets/images/" + imageName
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: "./src/template.html"}),
        new MiniCssExtractPlugin({filename: "styles/" + cssName})
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