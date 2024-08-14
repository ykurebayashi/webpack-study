const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: { somename: path.resolve(__dirname, 'src/index.js') },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
            },
            {
                test: /\.(png|jpeg|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App 2',
            filename: 'index.html',
            template: 'src/template.html'
        }),
    ]
}