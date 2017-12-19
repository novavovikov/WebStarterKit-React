import webpack from 'webpack';
import merge from 'webpack-merge';
import { env } from './config';

import WebpackCleanupPlugin from 'webpack-cleanup-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import img from './webpack/img';
import fonts from './webpack/fonts';
import css from './webpack/css';
import js from './webpack/js';
import jsUglify from './webpack/js.uglify';
import pug from './webpack/pug';
import devServer from './webpack/devServer';

//plugins=
const getPlugins = () => {
    let plugins = [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: `${env.path.client}/index.pug`
        })
    ];

    return plugins;
};


const common = merge([
    {
        entry: {
            index: `${env.path.client}/js/index.js`
        },
        output: {
            path: env.path.public,
            filename: 'js/[name].js'
        },
        plugins: getPlugins()
    },
    img(),
    fonts(),
    css(),
    js(),
    pug()
]);

//
module.exports = env => {
    if (env === 'production') {
        return merge([
            common,
            jsUglify()
        ])
    }
    if (env === 'development') {
        return merge([
            common,
            devServer()
        ])
    }
};