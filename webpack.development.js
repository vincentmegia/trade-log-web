var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var Webpack = require("webpack");
var Path = require("path");

module.exports = {
    context: Path.resolve(__dirname, "./src"),
    entry: {
        "polyfills": "./polyfills.ts",
        "vendor": "./vendor.ts",
        "app": "./app/main.ts"
    },
    resolve: {
        extensions: ["", ".ts", ".js", ".json", ".css", ".scss", ".html"]
    },
    output: {
        path: "./dist",
        filename: "scripts/[name]-[hash:8].bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ["awesome-typescript-loader", "angular2-template-loader"]
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
                loaders: [ExtractTextPlugin.extract("style", "css-loader"), "to-string", "css"]
                //loader: extractCSS.extract("style", "css?sourceMap")
            },
            {
                test: /\.scss$/,
                //loaders: ["to-string-loader", "css-loader", "sass-loader"]
                loader: ExtractTextPlugin.extract("style", "css?sourceMap!sass?sourceMap"),
            }
        ]
    },    
    plugins: [
        new ExtractTextPlugin("stylesheets/[name]-[hash:8].bundle.css"),
        new CleanWebpackPlugin(["./dist/"]),
        new HtmlWebpackPlugin({
            template: "./index.html",
            inject: "body"
        }),
        new Webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    }
}

function root(__path) {
  return Path.join(__dirname, __path);
}