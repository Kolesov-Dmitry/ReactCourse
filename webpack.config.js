const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {  
  entry: './src/index.tsx',
  mode: 'development',
  
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
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),    
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html'
    }),
  ],

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },

  output: {
    filename: 'bundle.js',
    path: outputPath,
    publicPath: '/dist/',
  },
};
