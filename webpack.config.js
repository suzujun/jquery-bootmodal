const webpack = require('webpack');
const path = require('path');

module.exports = {
  watch: true,
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/js')
  },
  module: {
    rules: [{
      // ローダーの処理対象ファイル
      test: /\.js$/,
      // ローダーの処理対象から外すディレクトリ
      exclude: [
        /node_modules/,
        /public/
      ],
      use: [{
        // 利用するローダー
        loader: 'babel-loader',
        // ローダーのオプション
        options: {
          presets: ['env']
        }
      }],
    }, {
      enforce: 'pre',
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /public/,
        /webpack.config.js/
      ],
      loader: 'eslint-loader',
    }],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     drop_console: true
    //   },
    // }),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ]
};

var $ = require('jquery');