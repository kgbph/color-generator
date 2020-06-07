const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'color-generator.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'ColorGenerator'
    },
};