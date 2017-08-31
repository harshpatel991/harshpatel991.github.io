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
            Popper: ['popper.js', 'default'],
            'Tether': 'tether',
            'window.Tether': 'tether',
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
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