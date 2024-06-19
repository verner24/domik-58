const fs = require('fs')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const BeautifyHtmlWebpackPlugin = require('@sumotto/beautify-html-webpack-plugin')
// const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const { resolve, join } = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const pages = fs.readdirSync(join(__dirname, './src')).filter(fileName => fileName.endsWith('.html'))

console.log(pages)

module.exports = {
	mode: process.env.NODE_ENV,
	devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,

	devServer: {
		port: 8080,
		compress: true,
		client: {
			overlay: {
				errors: true,
				warnings: true
			}
		},
		historyApiFallback: true,
		hot: true
	},

	entry: resolve(__dirname, './src'),

	output: {
		clean: true,
		path: resolve(__dirname, './dist'),
		filename: process.env.NODE_ENV === 'development' ? 'js/[name].js' : 'js/[name].min.js',
		assetModuleFilename: 'assets[name][ext]'
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.vue'],
		alias: {
			vue$: 'vue/dist/vue.esm-bundler.js',
			'@': resolve(__dirname, './src'),
			'@assets': resolve(__dirname, './src/assets'),
			'@components': resolve(__dirname, './src/vue/components')
		}
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					{
						loader: 'vue-loader'
					}
				]
			},
			{
				test: /\.(tsx|ts|jsx|js)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					},
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				]
			},
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: process.env.NODE_ENV === 'development' ? true : false
						}
					},
					{ loader: 'postcss-loader', options: {} },
					{ loader: 'sass-loader', options: {} }
				]
			},
			{
				test: /\.html$/i,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: false,
							interpolate: true
						}
					}
				]
			},
			{
				test: /\.woff2?$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
			},
			{
				test: /\.(jpe?g|png|webp|gif|svg)$/i,
				exclude: [resolve(__dirname, './src/assets/icons')],
				use: [
					{
						loader: 'image-webpack-loader',
						options: {}
					}
				],
				type: 'asset/resource',
				generator: {
					filename: 'images/[name][ext]'
				}
			},
			{
				test: /\.svg$/,
				include: [resolve(__dirname, './src/assets/icons')],
				use: [
					{
						loader: 'svg-sprite-loader',
						options: {}
					}
				]
			},
			{
				test: /\.(mp3|mp4)?$/i,
				type: 'asset/resource',
				generator: {
					filename: 'media/[name][ext]'
				}
			}
		]
	},

	plugins: [
		new ESLintPlugin({ extensions: ['js', 'ts', 'vue'] }),
		new StylelintPlugin({
			files: ['**/*.{html,vue,css,sass,scss}']
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: join(__dirname, './src/public'),
					globOptions: {
						ignore: ['**/*.md']
					}
				}
			]
		}),
		new MiniCssExtractPlugin({
			filename: process.env.NODE_ENV === 'development' ? 'css/[name].css' : 'css/[name].min.css'
		}),
		new webpack.DefinePlugin({
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false,
			__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
		}),
		new VueLoaderPlugin(),
		// new SpriteLoaderPlugin({ plainSprite: true }),
		...pages.map(
			page =>
				new HtmlWebpackPlugin({
					template: `${join(__dirname, './src')}/${page}`,

					filename: `./${page}`,
					minify: {
						removeComments: true
					},
					inject: 'body',
					scriptLoading: 'blocking'
				})
		),

		new BeautifyHtmlWebpackPlugin({
			indent_size: 2,
			preserve_newlines: false
		})
	],

	optimization: {
		minimizer:
			process.env.NODE_ENV === 'development'
				? undefined
				: [
						new CssMinimizerPlugin(),
						new TerserPlugin({
							terserOptions: {
								format: {
									comments: false
								}
							},
							extractComments: false
						})
					]
	}
}
