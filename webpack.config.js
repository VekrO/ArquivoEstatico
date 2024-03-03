const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        watchFiles: ['src/**/*'],
        port: 4000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Projeto',
            template: 'src/index.html',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'widget.html',
            template: 'src/widget.html',
            chunks: ['widget']
        }),
        new MiniCssExtractPlugin()
    ]
};