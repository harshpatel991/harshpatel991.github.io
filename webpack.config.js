var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path = require('path');

var sassLoader = ExtractTextPlugin.extract(['css-loader?sourceMap', 'sass-loader?sourceMap']);

var config = {
    entry: {
        app: './index'
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js?[hash]'
    },
    module: {
        loaders: [
            {
                test: /\.(scss|sass)$/,
                loader: sassLoader
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            'Tether': 'tether',
            'window.Tether': 'tether'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [
                    autoprefixer
                ]
            }
        }),
        new ExtractTextPlugin("styles.css")
    ]
};

module.exports = config;