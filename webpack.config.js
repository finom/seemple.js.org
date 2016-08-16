const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app:'./js/app',
        style: './sass/screen.scss'
    },
    output: {
        path: `${__dirname}/temp`,
        filename: 'app-test.js',
        libraryTarget: 'var'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.html$/,
                loader: 'ejs-compiled'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('temp/style.css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
         template: 'html/_layouts/main.html',
          filename: 'tablo.html',
       })
    ]
};
