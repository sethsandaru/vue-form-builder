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
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[hash:20].[ext]',
                            limit: 8192
                        }
                    }
                ]
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin( {
            minimize : true,
            sourceMap : false,
            mangle: true,
            compress: {
                warnings: false
            }
        } ),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // new BundleAnalyzerPlugin()
    ]
};

module.exports = [
    // library for browser - form template
    merge(commomConfig, {
        entry: path.resolve(__dirname + '/src/main.js'),
        output: {
            path: path.resolve(__dirname, './dist'),
            publicPath: '/dist/',
            filename: 'vue-form-builder.browser.min.js',
            libraryTarget: 'window',
            library: 'FormBuilder',
        },
    }),

    // library for node - form GUI
    merge(commomConfig, {
        entry: './src/FormBuilder.vue',
        output: {
            path: path.resolve(__dirname, './dist'),
            // path: '/Applications/XAMPP/xamppfiles/htdocs/formbuilder/webpack-form-builder/node_modules/v-form-builder/dist',
            // path: path.resolve(__dirname, '../test-form/node_modules/v-form-builder/dist'),
            // path: path.resolve(__dirname, '../VueProject/test-form/node_modules/v-form-builder/dist'),
            publicPath: '/dist/',
            libraryTarget: 'umd',
            library: 'form-builder',
            filename: 'vue-form-builder.min.js',
            umdNamedDefine: true
        },
    }),
];
