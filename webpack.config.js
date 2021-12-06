const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
	...defaultConfig,
	entry: {
		index: path.resolve(__dirname, "src/index.js"),
		frontend: path.resolve(__dirname, "src/frontend.js"),
	},
	output: {
		...defaultConfig.output,
		filename: "[name].js",
		path: path.resolve(__dirname, "build"),
	},
	module: {
		rules: [
			{
			  test: /\.(js|jsx)$/,
			  exclude: /(node_modules|bower_components)/,
			  loader: 'babel-loader',
			  options: { presets: ['@babel/env', '@babel/preset-react'] },
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		]
	}
};