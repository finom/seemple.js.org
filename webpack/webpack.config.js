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
    '/js/app': [
        './sass/screen.scss',
        'babel-polyfill',
        './js/app'
    ]
};

const plugins = [
    new ExtractTextPlugin({
        filename: 'css/style.css',
        allChunks: true
    }),
    new HtmlWebpackPlugin({
        template: './html/layout.html',
        filename: 'index.html',
        language: 'en'
    }),
    new HtmlWebpackPlugin({
        template: './html/layout.html',
        filename: 'ua/index.html',
        language: 'ua'
    }),
    new HtmlWebpackPlugin({
        template: './html/layout.html',
        filename: 'ru/index.html',
        language: 'ru'
    }),
    new GenerateDocumentationPlugin({
        languages: ['en', 'ua', 'ru'],
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
    optimization: { minimize: true },
    output: {
        path: resolve('dist'),
        filename: 'js/[name].js',
        libraryTarget: 'var',
        chunkFilename: 'js/[id].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                }, {
                    loader: 'string-replace-loader',
                    options: {
                        search: 'SERVICE_WORKER_CACHE_VERSION',
                        replace: String(Date.now()),
                    }
                }],
                exclude: /\/node_modules\/(?!balajs\/)/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader', options: {
                            sassOptions: {functions: sassAssetFunctions({
                                images_path: 'sass/inlined-images',
                            })}
                        }
                    }],
                })
            },
            { test: /\.html$/, use: { loader: 'compile-ejs-loader' } },
            {
                test: /\.md$/,
                use: [{ loader: "html-loader", options: { attrs: false } },'markdown-loader']
            },
            { test: /\.yaml$/,  use: ['json-loader', 'yaml-loader'] },
        ]
    },
};
