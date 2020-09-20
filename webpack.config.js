const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'public/index.html',
    }),
  ],
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/react'
          ],
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)([\?]?.*)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    contentBase: './public',
  }
}
