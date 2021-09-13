const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    entry: './src/index.tsx',
    output: {
      filename: 'assets/js/[contenthash].[name].js',
      path: path.resolve(__dirname, 'build'),
      assetModuleFilename: 'assets/images/[contenthash].[name].[ext]',
    },
    mode: env.dev ? 'development' : 'production',
    stats: 'errors-warnings',
    watch: !!env.watch,
    resolve: {
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    devtool: env.dev && 'source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.(s?)css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.svg$/i,
          type: 'asset/resource',
          use: 'svgo-loader',
        },
        {
          test: /\.ts(x?)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        inject: 'body',
        minify: !env.dev,
      }),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[contenthash].[name].css'
      }),
      ... !env.notclean ? [new CleanWebpackPlugin()] : [],
    ],
  };
}