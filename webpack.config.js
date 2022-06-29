const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { optimize } = require('webpack');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;


const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;


module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './js/appMain.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'dist'),
        clean: true,
		publicPath: ''
    },

	devServer: {
		historyApiFallback: true,
		static: './dist',
		open: true,
		// open: {
		// 	app: {
		// 	  name: 'google-chrome',
		// 	},
		//   },
		// compress: true,
		hot: true,
		port: 3000,
	},

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'src/html/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),

        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,
        }),
    ],

	devtool: isProd ? false : 'source-map',

    module: {
        rules: [
			{
                test: /\.html$/,
				loader: 'html-loader',
				options: {
					esModule: false
				}
            },

            {
                test: /\.css$/i,
				use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: isDev
						},
					},
					'css-loader',
					
				]
            },

            {
                test: /\.s[ac]ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: (resurcePath, context) => {
								return path.relative(path.dirname(resurcePath), context) + '/';
							},
						}
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
            },

			{
                test: /\.(?:gif|png|jpg|jpeg|svg)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: `./img/${filename('[ext]')}`,
					}
				}],
            }, 

			{
                test: /\.(?:woff|woff2|eot|ttf|otf)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: `./fonts/${filename('[ext]')}`,
					}
				}],
            },

			{
                test: /\.js$/,
				exclude: '/node_modules/',
				use: [
					'babel-loader',
				],
            }
        ]
    }
};