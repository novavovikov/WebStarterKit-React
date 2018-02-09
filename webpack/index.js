import webpack from 'webpack';
import merge from 'webpack-merge';
import { env } from '../config';
import WebpackCleanupPlugin from 'webpack-cleanup-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import img from './includes/img';
import fonts from './includes/fonts';
import css from './includes/css';
import js from './includes/js';
import jsUglify from './includes/js.uglify';
import pug from './includes/pug';
import devServer from './includes/devServer';

const common = merge([
    {
        entry: [
            'babel-polyfill',
            'react-hot-loader/patch',
            `${env.path.client}/js/index.js`
        ],
        output: {
            path: env.path.public,
            filename: 'js/[name].js'
        },
        plugins: [
            new WebpackCleanupPlugin(),
            new HtmlWebpackPlugin({
                filename: `index.html`,
                template: `${env.path.client}/index.pug`
            }),
            new CopyWebpackPlugin([
                {
                    context: `${env.path.client}/data`,
                    from: '**/*',
                    to: `${env.path.public}/data`
                }
            ])
        ]
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
            {
                plugins: [
                    new webpack.DefinePlugin({
                        'process.env.NODE_ENV': JSON.stringify('production')
                    })
                ]
            },
            jsUglify()
        ])
    }
    if (env === 'development') {
        return merge([
            common,
            {
                plugins: [
                    new webpack.DefinePlugin({
                        'process.env.NODE_ENV': JSON.stringify('development')
                    })
                ]
            },
            devServer()
        ])
    }
};