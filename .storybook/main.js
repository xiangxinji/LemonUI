const path = require('path')

module.exports = {
  stories: ["../src/**/*.stories.[tj]s"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
  addons: ['@storybook/addon-storysource'],
};
