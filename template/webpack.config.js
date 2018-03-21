var path = require('path');
var webpack = require('webpack');
var WebpackHtmlPlugin = require('webpack-html-plugin');

var DEV_HOST = "192.168.178.12",
    DEV_PORT = "9090";

console.log(process.env.NODE_ENV);

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        // 'webpack/hot/dev-server',
        __dirname + '/src/main'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: process.env.NODE_ENV === 'production' ? "./" : "http://" + DEV_HOST + ":" + DEV_PORT + "/",
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        contentBase: "./",
        historyApiFallback: true, //不跳转
        noInfo: true,
        hot: true,
        inline: true,
        host: DEV_HOST,
        port: DEV_PORT,
        open: 'Google Chrome'
    },
    performance: {
        hints: false
    },

    plugins: [
        new WebpackHtmlPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: true,
            hash: true,
            minify: {
                removeComments: process.env.NODE_ENV === 'production', //移除HTML中的注释
                collapseWhitespace: process.env.NODE_ENV === 'production', //删除空白符与换行符
                minifyJS: process.env.NODE_ENV === 'production', //是否压缩html里的js（使用uglify-js进行的压缩）
                minifyCSS: process.env.NODE_ENV === 'production' // 是否压缩html里的css（使用clean-css进行的压缩）
            }
        }),
        new webpack.HotModuleReplacementPlugin(),

        // new webpack.BannerPlugin("Copyright 尚技"),
        // new webpack.optimize.DedupePlugin(),

        // new CopyWebpackPlugin([
        //     { from: '*.html' }
        // ], {
        //     copyUnmodified: true
        // })
    ],

    // devtool: 'inline-source-map'
    devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
        // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}