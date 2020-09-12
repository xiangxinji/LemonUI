const path = require('path')
const { srcPath } = require('../config/build')
module.exports = {
  stories: ["../packages/**/*.stories.[tj]s"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    config.resolve.alias['@'] = srcPath
    return config;
  },
  addons: ['@storybook/addon-storysource'],
};
