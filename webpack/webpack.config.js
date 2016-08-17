const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GenerateDocumentationPlugin = require('./generate-documentation');


const resolve = (...givenPaths) => path.resolve(__dirname, '..', ...givenPaths);

module.exports = {
    devtool: 'source-map',
    context: resolve('./'),
    entry: {
        app: './js/app',
        style: './sass/screen.scss'
    },
    output: {
        path: resolve('dist/v2'),
        filename: 'js/[name].js',
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
        new ExtractTextPlugin('css/style.css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: 'html/_layouts/main.html',
            filename: 'tablo.html'
        }),
        new GenerateDocumentationPlugin({
            srcFolder: resolve('doc/'),
            getDestination: lang => resolve('temp/', lang)
        }),
        new CopyWebpackPlugin([{
            from: resolve('static/'),
            to: resolve('dist/')
        }])
    ]
};
