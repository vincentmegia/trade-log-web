var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var Webpack = require("webpack");
var Path = require("path");

module.exports = {
    entry: {
        "polyfills": "./src/polyfills.ts",
        "vendor": "./src/vendor.ts",
        "app": "./src/app/main.ts"
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
                //loaders: [ExtractTextPlugin.extract("style", "css-loader"), "to-string", "css"]
                // loader: ExtractTextPlugin.extract({
                //     fallbackLoader: "style-loader",
                //     loader: "css-loader",
                // })
                loaders: ["style-loader", "css-loader"]
            },
        ]
    },    
    plugins: [
      new Webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        root('./src'), // location of your src
        { }
      ),
        new ExtractTextPlugin("css/[name]-[hash:8].bundle.css"),
        new CleanWebpackPlugin(
            [
                "./dist/scripts/",
                "./dist/css/",
                "./dist/assets/",
                "./dist/app/",
                "./dist/index.html"
            ]
        ),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
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