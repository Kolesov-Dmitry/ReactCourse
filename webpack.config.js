const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {  
  entry: './src/index.tsx',
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html'
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/manifest.json', to: 'manifest.json' },
        { from: 'src/service-worker.js', to: 'service-worker.js' },
        { from: 'src/assets/img/icons_chat_144px.png', to: 'img/icons_chat_144px.png' }
      ],
    }),
  ],

  module: {
    rules: [
      // TypeScript
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      // CSS стили
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // Для подгрузки шрифтов
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },        
      },
      {
        test: /\.png$/,
        loader: 'file-loader'        
      }
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3000,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.png'],
  },

  output: {
    filename: 'bundle.js',
    path: outputPath,
    //publicPath: path.join(__dirname, 'dist'),
  },
};
