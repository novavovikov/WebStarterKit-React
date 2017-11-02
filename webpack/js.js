module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2017', 'react']
                    }
                }
            ]
        }
    }
};