"use strict";

const { entry, outputPath, templatePath } = require("../config/dev");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const pathUtils = require("../utils/path");

module.exports = {
  entry,
  output: {
    path: outputPath,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        enforce: "pre",
        options: {
          fix: true,
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
  resolve: {},
  devtool: "source-map",
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: templatePath,
    }),
  ],
  devServer: {
    hot: true,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": pathUtils.entry,
      vue: "vue/dist/vue.esm.js",
    },
  },
};
