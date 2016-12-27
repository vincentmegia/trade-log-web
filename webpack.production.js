var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        "polyfills": "./angular-app/polyfills.ts",
        "vendor": "./angular-app/vendor.ts",
        "app": "./angular-app/app/main.ts"
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.html']
    },
    output: {
        path: "./wwwroot",
        filename: "js/[name]-[hash:8].bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
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
                loader: [ExtractTextPlugin.extract('style', 'css'), , 'to-string', 'css']
            },
            {
                test: /\.scss$/,
                exclude: [/\.global\.scss$/],
                loaders: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.global\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].bundle.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor", "polyfills"]
        }),
        new CleanWebpackPlugin(
            [
                "./wwwroot/js/",
                "./wwwroot/css/",
                "./wwwroot/assets/",
                "./wwwroot/index.html"
            ]
        ),
        // inject in index.html
        new HtmlWebpackPlugin({
            template: "./angular-app/index.html",
            inject: "body"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: "minimal"
    }
};