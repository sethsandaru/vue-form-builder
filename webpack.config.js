var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var APP_DIR = path.resolve(__dirname, 'src');

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
    externals: {
        moment: 'moment',
        jquery: 'jquery',
        bootstrap: 'bootstrap',
        underscore: 'underscore',
        timepicker: 'timepicker',
        select2: 'select2',
        'popper.js': 'popper.js',
        'webpack-jquery-ui': 'webpack-jquery-ui',
        'underscore-deep-extend': 'underscore-deep-extend',
        'v-toaster': 'v-toaster',
        'vue-fontawesome': '@fortawesome/vue-fontawesome',
        'free-solid-svg-icons': '@fortawesome/free-solid-svg-icons',
        'fontawesome-svg-core': '@fortawesome/fontawesome-svg-core',
    },
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
    //         filename: 'vue-form-builder.browser.min.js',
    //         libraryTarget: 'window',
    //         library: 'FormBuilder',
    //     },
    // }),
    //
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
