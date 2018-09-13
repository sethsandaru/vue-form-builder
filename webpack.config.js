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
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json'],
        modules: [
            "node_modules",
            APP_DIR
        ]
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
    externals: {
        moment: 'moment',
        jquery: 'jquery',
        bootstrap: 'bootstrap',
        underscore: 'underscore',
        timepicker: 'timepicker',
        select2: 'select2',
        'popper.js': 'popper.js',
        'webpack-jquery-ui': 'webpack-jquery-ui',
        'underscore-deep-extend': 'underscore-deep-exten',
        'v-toaster': 'v-toaster',
        // '@fortawesome/vue-fontawesome': '@fortawesome/vue-fontawesome',
        // '@fortawesome/free-solid-svg-icons': '@fortawesome/free-solid-svg-icons',
        // '@fortawesome/fontawesome-svg-core': '@fortawesome/fontawesome-svg-core',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin( {
            minimize : true,
            sourceMap : false,
            mangle: true,
            compress: {
                warnings: false
            }
        } )
    ]
};

module.exports = [
    // library for browser - form template
    merge(commomConfig, {
        entry: path.resolve(__dirname + '/src/template/index.js'),
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'vue-form-builder-template.browser.min.js',
            libraryTarget: 'window',
            library: 'FormBuilderTemplate',
        },
    }),

    // library for browser - form template
    merge(commomConfig, {
        entry: path.resolve(__dirname + '/src/gui/index.js'),
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'vue-form-builder-gui.browser.min.js',
            libraryTarget: 'window',
            library: 'FormBuilderGui',
        },
    }),

    // library for node - form template
    merge(commomConfig, {
        entry: path.resolve(__dirname + '/src/template/FormBuilderTemplate.vue'),
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            libraryTarget: 'umd',
            library: 'form-builder-template',
            filename: 'vue-form-builder-template.min.js',
            umdNamedDefine: true
        },
    }),

    // library for node - form GUI
    merge(commomConfig, {
        entry: path.resolve(__dirname + '/src/gui/FormBuilderGui.vue'),
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            libraryTarget: 'umd',
            library: 'form-builder-gui',
            filename: 'vue-form-builder-gui.min.js',
            umdNamedDefine: true
        },
    }),
];
//
// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = '#source-map'
//     // http://vue-loader.vuejs.org/en/workflow/production.html
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }),
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             compress: {
//                 warnings: false
//             }
//         }),
//         new webpack.LoaderOptionsPlugin({
//             minimize: true
//         })
//     ])
// }
