module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/i,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2017']
                    }
                }
            ]
        }
    }
};