const path = require('path');
const { entry, output } = require('../utils/path');

module.exports = {
  entry: path.resolve(entry, './index.js'),
  srcPath: path.resolve(entry),
  outputPath: output,
  outputFileName: 'index.js',
  outputCssFileName: 'index.css',
};
