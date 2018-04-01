const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: './dist/app.js',
        path: path.resolve(__dirname)
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'mustache-loader'
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'js'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', { modules: false }]
                        ]
                    }
                }],
            },
            {
                test: /\.(scss)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    require('precss'),
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },

        ]
    }
};