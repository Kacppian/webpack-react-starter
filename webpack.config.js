const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
	context: path.join(__dirname, 'src'),
	entry: [
		'./index.js',
		'webpack/hot/only-dev-server',
		'webpack-dev-server/client?http://localhost:8080',
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.sass$/,
				loader: ['style-loader', 'css-loader' ,'sass-loader']
			}
		],
	},
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
		],
	},
	devServer: {
      contentBase: './dist',
	  hot: true
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin(['dist']),
  ],
};