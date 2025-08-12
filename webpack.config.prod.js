const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      // Use the HTML template from the source directory
      template: './src/public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        // Copy static assets from src/public into the dist folder
        { from: 'src/public/images', to: 'img' },
        { from: 'src/public/css', to: 'css' },
        { from: 'src/public/js/vendor', to: 'js/vendor' },
        { from: 'src/public/icon.svg', to: 'icon.svg' },
        { from: 'src/public/favicon.ico', to: 'favicon.ico' },
        { from: 'src/public/robots.txt', to: 'robots.txt' },
        { from: 'src/public/icon.png', to: 'icon.png' },
        { from: 'src/public/404.html', to: '404.html' },
        { from: 'src/public/site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
});
