const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	devServer: {
		open: true,
		port: 8090,
		contentBase: "./dist",
		inline: true,
		progress: true
	},
	entry: {
		index: __dirname + "/src/js/view/index.js",
		login: __dirname + "/src/js/view/login.js"
	},
	output: {
		filename: "[name]-[hash].js",
		path: __dirname + "/dist/js"
	},
	module: {
		rules: [{
				test: /\.css$/,
				exclude: "/node_modules/",
				use: [{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					}
				]
			},
			{
				test: /\.js$/,
				exclude: "/node_modules/",
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]
					}
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: __dirname + "/src/index.template.html",
			chunks: ["index"]
		}),
		new HtmlWebpackPlugin({
			filename: "login.html",
			template: __dirname + "/src/login.template.html",
			chunks: ["login"]
		}),
		new CleanWebpackPlugin("./dist/js")
	]
};