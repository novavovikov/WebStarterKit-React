const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (env) {
    return {
        module: {
            rules: [
                {
                    test: /\.styl$/,
                    use: ExtractTextPlugin.extract({
                        publicPath: '../',
                        fallback: "style-loader",
                        use: [{
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        } , "stylus-loader"]
                    })
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        publicPath: '../',
                        fallback: "style-loader",
                        use: {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        }
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin("./css/[name].css"),
        ]
    }
};