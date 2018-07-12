const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: {
		main: ["./src/js/main.js"]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: '/dist/js/'
    },
    mode: 'none',
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
      stats: 'errors-only',
      contentBase: path.join(__dirname, 'dist'),
      port: 9000
    }
};
