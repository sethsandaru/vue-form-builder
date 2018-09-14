var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var APP_DIR = path.resolve(__dirname, 'src');
var nodeExternals = require('webpack-node-externals');

var commomConfig = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            }, {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {}
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
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'sethFormBuilder': APP_DIR,
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
    // target: 'node',
    externals: [nodeExternals()],
    plugins: [
        new webpack.optimize.UglifyJsPlugin( {
            minimize : true,
            sourceMap : false,
            mangle: true,
            compress: {
                warnings: false
            }
        } ),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
};

module.exports = [
    // library for browser - form template
    // merge(commomConfig, {
    //     entry: path.resolve(__dirname + '/src/template/index.js'),
    //     output: {
    //         path: path.resolve(__dirname, './browser'),
    //         publicPath: '/browser/',
    //         filename: 'vue-form-builder-template.browser.min.js',
    //         libraryTarget: 'window',
    //         library: 'FormBuilderTemplate',
    //     },
    // }),
    //
    // // library for browser - form template
    // merge(commomConfig, {
    //     entry: path.resolve(__dirname + '/src/gui/index.js'),
    //     output: {
    //         path: path.resolve(__dirname, './browser'),
    //         publicPath: '/browser/',
    //         filename: 'vue-form-builder-gui.browser.min.js',
    //         libraryTarget: 'window',
    //         library: 'FormBuilderGui',
    //     },
    // }),
    //
    // // library for node - form template
    // merge(commomConfig, {
    //     entry: path.resolve(__dirname + '/src/template/FormBuilderTemplate.vue'),
    //     output: {
    //         path: path.resolve(__dirname, './dist'),
    //         publicPath: '/dist/',
    //         libraryTarget: 'umd',
    //         library: 'form-builder-template',
    //         filename: 'vue-form-builder-template.min.js',
    //         umdNamedDefine: true
    //     },
    // }),

    // library for node - form GUI
    merge(commomConfig, {
        entry: './src/FormBuilder.vue',
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            libraryTarget: 'umd',
            library: 'form-builder',
            filename: 'vue-form-builder.min.js',
            umdNamedDefine: true
        },
    }),
];
