const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');
const {
  entry,
  outputPath,
  outputFileName,
  outputCssFileName,
} = require('../config/build');

const isRunningAnalys = process.env.RUNNING_ANALYS === 'YES';

const config = {
  mode: 'production',
  entry,
  output: {
    path: outputPath,
    filename: outputFileName,
    library: 'LemonUI',
    // 打包目标为 umd (es6,cjs,script,amd)
    libraryTarget: 'umd',
    // 默认以.default导出
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre',
        options: {
          fix: true,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {},
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: outputCssFileName, /// /都提到build目录下的css目录中
    }),
    new OptimizeCSSAssetsPlugin(),
  ],
};

module.exports = (({ isRunningAnalys }) => {
  if (isRunningAnalys) {
    config.plugins.push(new WebpackBundleAnalyzer.BundleAnalyzerPlugin());
  }
  return config;
})({
  isRunningAnalys,
});
