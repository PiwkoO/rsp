const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/app.js",

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|svg|ttf|woff(2)?|eot)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "assets"
                    }

                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:  "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            template: "./src/assets/sass/style.sass",
            filename: 'style.css'
        }),
    ]
};