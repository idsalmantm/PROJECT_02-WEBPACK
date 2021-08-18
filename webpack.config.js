//importing MiniCssExtract Plugin
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { default: dist } = require("mini-css-extract-plugin/dist");


//making the mode more dynamic , for production with minified version , for dev more readable format
let mode = "development";
let target = 'web'; //default web layout
if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist"; // during the production , it will will do prefix
};

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    //Activate Developing mode to view codes in Normal Format , Change to Product for Security
    mode: mode,
    // babel and other plugin configuration
    target: target,
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'assets/images/[name][ext]',
    },
    module: {
        rules: [{
            test: /\.scss$/i, //to find all css file and extract same from JS
            use: [MiniCssExtractPlugin.loader,
                "css-loader",
                "postcss-loader",
                "sass-loader"
            ], //extract scss from JS
        },
        {
            test: /\.jsx?$/, // target all js file for babel
            exclude: /node_modules/, //exclude nod_module as it include million files
            use: {
                loader: "babel-loader",
            }
        },
        {
            test: /\.(.jpe?g|png|gif|svg|ico|woff|woff2|eos|ttf)$/i,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: path.resolve(__dirname, "src/"),
                    outputPath: 'dist/',
                    publicPath: '../',
                    useRelativePaths: true
                }
            }
        }

        ]
    },
    // to false to see main.js file in a readable format , or use source-map
    devtool: "source-map",
    // use MiniCssExtractPlugin,File Copy Plugin
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: './src/assets', to: 'assets' }
            ]
        }),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })],
    //resolution that accept js and jsx file without extension
    resolve: {
        extensions: [".js", ".jsx"]
    },
    //point distribution folder to load html file automatically
    devServer: {
        contentBase: "./dist",
        hot: true, // to have autoreload
    },
};