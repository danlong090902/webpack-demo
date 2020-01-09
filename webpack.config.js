const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: 'development', //development 或者 production （你要选择的模式）
    entry: './src/index.js', // 入口
    output: { // 出口
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,   //  查找所有js或者jsx文件
                exclude: /node_modules/, //  这里是忽略掉node_modules文件夹
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.less$/, // 查找所有less文件
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
};