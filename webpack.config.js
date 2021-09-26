const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ProgressPlugin } = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const dotenvResult = require('dotenv-flow').config();

module.exports = (env) => {
  const { WEBPACK_SERVE, watch, dev} = {
    ...env,
    ...dotenvResult.parsed,
  }

  return {
    entry: './src/index.tsx',
    output: {
      filename: 'assets/js/[contenthash].[name].js',
      path: path.resolve(__dirname, 'docs'),
      assetModuleFilename: 'assets/images/[contenthash].[name].[ext]',
    },
    mode: dev ? 'development' : 'production',
    stats: 'errors-warnings',
    watch: !!watch,
    resolve: {
      extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    },
    devtool: dev && 'source-map',
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
      new ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: "public/index.html",
        inject: 'body',
        minify: !dev,
      }),
      new CaseSensitivePathsPlugin(),
      new MiniCssExtractPlugin({
        filename: 'assets/css/[contenthash].[name].css'
      }),
      ... !WEBPACK_SERVE ? [new CleanWebpackPlugin()] : [],
    ],
  };
}
