import webpack from 'webpack';
import path from 'path';

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './client/app/Client.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "client")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env']
        },
      },
      {
        test: /\.(jpg|png|svg|jpeg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './images/[hash].[ext]',
          },
        },
      },
      {
        test: /(\.s?css)$/,
        loader: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    modules: [ "node_modules" ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  devtool: "source-map",
  context: __dirname,
  plugins: []
};