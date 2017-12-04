const path = require('path');
const glob = require('glob');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
        './app.js',
        ...glob.sync('./services/*.js')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin ([
            {from "views/*.html"},
            {from "index.html"},
        ])
    ]
};
