/* eslint-disable */
var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: ["babel-polyfill", "./app.js"],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ["es2017", "flow", "react", "stage-0"],
                    plugins: ["react-html-attrs", "transform-decorators-legacy", "transform-class-properties", "transform-object-rest-spread"],
                }
            },
            {
                test: /\.css$/,
                loaders: [ "style-loader", "css-loader" ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    output: {
        path: __dirname + "/",
        filename: "build/bundle.js"
    },
    plugins: debug ? [] : [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the eit-app lib size
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false, // Suppress uglification warnings
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
            output: {
                comments: false,
            },
            exclude: [/\.min\.js$/gi], // skip pre-minified libs
            sourceMap: false
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/])
    ],
	resolve: {
    	modules: ["node_modules"],
	},
    node: {
        fs: 'empty'
    },
};
