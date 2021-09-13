const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    entry: './src/index.tsx',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'build'),
    },
    mode: env.dev ? 'development' : 'production',
    stats: 'minimal',
    watch: !!env.watch,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
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
      new HtmlWebpackPlugin({
        template: "public/index.html",
        inject: 'body',
        minify: false
      }),
    ],
  };
}