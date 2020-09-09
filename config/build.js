const path = require('path');
const { entry, output } = require('../utils/path');

module.exports = {
  entry: path.resolve(entry, './index.js'),
  outputPath: output,
  outputFileName: 'index.js',
  outputCssFileName: 'index.css',
};
