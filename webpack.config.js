const path = require('path');

module.exports = {
    entry: './src/color-generator.js',
    mode: 'production',
    output: {
        filename: 'color-generator.js',
        path: path.resolve(__dirname, 'dist'),
    },
};