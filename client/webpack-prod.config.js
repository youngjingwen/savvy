const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
    vendor: ["react", "react-dom", "jquery"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true }
            },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: 'index-tmp.html',
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};

module.exports = config;
