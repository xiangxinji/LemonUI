const path = require('path');
const { entry, output, template } = require('../utils/path');

module.exports = {
  entry: path.resolve(__dirname, '../index-dev.js'),
  outputPath: output,
  templatePath: path.resolve(template, './index.html'),
};
