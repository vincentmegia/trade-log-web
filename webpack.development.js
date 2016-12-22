var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        "polyfills": "./angular-app/polyfills.ts",
        "vendor": "./angular-app/vendor.ts",
        "app": "./angular-app/app/main.ts"
    },
    resolve: {
        extensions: ["", ".ts", ".js", ".json", ".css", ".scss", ".html"]
    },
    output: {
        path: "./wwwroot",
        filename: "scripts/[name]-[hash:8].bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ["awesome-typescript-loader", "angular2-template-loader"],
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                loader: "file?name=assets/[name]-[hash:6].[ext]",
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name]-[hash:8].bundle.css"),
        new CleanWebpackPlugin(
            [
                "./wwwroot/scripts/",
                "./wwwroot/css/",
                "./wwwroot/assets/",
                "./wwwroot/app/",
                "./wwwroot/index.html"
            ]
        ),
        new HtmlWebpackPlugin({
            template: "./angular-app/index.html",
            inject: "body"
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    }
};