var path = require("path"),
    webpack = require("webpack"),
    watchBabel = require("watch-babel"),
    srcJsDir = "assets/js/custom/",
    srcCssDir = "assets/sass/",
    srcDestJsDir = "assets/js/transpiled/",
    options = { glob: "src/*.js" },
    optionsCss = { glob: "src/*.scss" };

module.exports = {

    entry: ["./assets/js/custom/app.js"],
    output: {
        path: "./assets/js/transpiled/",
        filename: "app.es6c.js"
    },
    watch: true,
    devServer: {
        inline: true,
        port: 8000
    },
    module: {
        loaders: [{
            test: [/\.js$/, /\.jsx?$/],
            exclude: /(node_modules|bower_components)/,
            loader: ['babel-loader'],
            query: {
                presets: ["react", "es2015", "stage-0"]
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules/')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};