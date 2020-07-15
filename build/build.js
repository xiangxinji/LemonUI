"use strict";

const {
  entry,
  outputPath,
  outputFileName,
  outputCssFileName,
} = require("../config/build");

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: "production",
  entry: entry,
  output: {
    path: outputPath,
    filename: outputFileName,
    library: "Sinte",
    // 打包目标为 umd (es6,cjs,script,amd)
    libraryTarget: "umd",
    // 默认以.default导出
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {},
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: outputCssFileName, ////都提到build目录下的css目录中
    }),
    new OptimizeCSSAssetsPlugin(),
  ],
};
