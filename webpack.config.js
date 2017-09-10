const path = require('path');
const webpack = require('webpack');
const WebpackPreBuildPlugin = require('pre-build-webpack');

module.exports = {
    watch:true,
    entry: {
        app: './index.ts',
        publicPath: path.join(__dirname)
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: []
    },
    plugins: [
        new WebpackPreBuildPlugin(function(stats) {
            require("./server/index.js");
        })
    ]
};