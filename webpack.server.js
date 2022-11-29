const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {

    // Inform webpack that we're builing a bundle 
    // for nodeJS, rather than for the browser
    target: 'node',

    // Tell webpack the root file of our server application
    entry: './server/index.js',

    // Tell webpack where to put the generated output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
