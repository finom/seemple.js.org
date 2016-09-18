const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const GenerateDocumentationPlugin = require('./generate-documentation');
const sassAssetFunctions = require('node-sass-asset-functions');

const resolve = (...givenPaths) => path.resolve(__dirname, '..', ...givenPaths);
const { NODE_ENV, PORT } = process.env;

const entry = {
    app: [
        'babel-polyfill',
        './js/app'
    ],
    style: './sass/screen.scss'
};

const plugins = [
    new ExtractTextPlugin('css/style.css', {
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        template: './html/layout.html',
        filename: 'index.html',
        language: 'en'
    }),
    new HtmlWebpackPlugin({
        template: './html/layout.html',
        filename: 'index.ru.html',
        language: 'ru'
    }),
    new GenerateDocumentationPlugin({
        templateFolder: resolve('jsdoc-template/'),
        srcFolder: resolve('doc/'),
        getDestination: lang => resolve('html', lang, 'temp')
    }),
    new CopyWebpackPlugin([{
        from: resolve('static/'),
        to: resolve('dist/')
    }])
];

// TODO turn on dev server, for that documentation generator needs to be modified
module.exports = {
    devtool: 'source-map',
    context: resolve('./'),
    entry,
    plugins,
    output: {
        path: resolve('dist/v2'),
        filename: 'js/[name].js',
        libraryTarget: 'var'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
            { test: /\.html$/, loader: 'ejs-compiled' },
            { test: /\.md$/, loader: "html!markdown" },
            { test: /\.yaml$/,  loader: 'json!yaml' }
        ]
    },
    sassLoader: {
        functions: sassAssetFunctions({
            images_path: 'sass/inlined-images',
        })
    }
};
