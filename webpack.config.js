const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: [
        './app.config.js',
        './app.module.js',
        ...glob.sync('./controllers/*.js'),
        ...glob.sync('./services/*.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        new CopyWebpackPlugin ([
            {from: "views/*.html"},
            {from: "index.html"}
        ]),
        new webpack.optimize.UglifyJsPlugin(),
        extractSass
    ]
};
