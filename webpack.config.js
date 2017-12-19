const KotlinWebpackPlugin = require('@jetbrains/kotlin-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: 'kotlinApp', // kotlinApp is the default module name

    resolve: {
        modules: ['node_modules', 'kotlin_build']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, '../kotlin_build'),
                use: ['source-map-loader'],
                enforce: 'pre',
            },
        ],
    },

    output: {
        path: __dirname + '/build',
        filename: 'build.js',
    },

    plugins: [
        new KotlinWebpackPlugin({
            src: __dirname + '/src',
        })
    ]
};