let mode = "development";

if (process.env.NODE_ENV === "production") {
    mode = "production";
};

module.exports = {
    //Activate Developing mode to view codes in Normal Format , Change to Product for Security
    mode: mode,
    // babel and other plugin configuration
    module: {
        rules: [
            {
                test: /\.js$/, // target all js file for babel
                exclude: /node_modules/, //exclude nod_module as it include million files
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    // to false to see main.js file in a readable format , or use source-map
    devtool: "source-map",
    //point distribution folder to load html file automatically
    devServer: {
        contentBase: "./dist",
    },
};