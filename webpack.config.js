var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  plugins: [new CompressionPlugin({
    algorithm: "gzip",
    filename: "bundle.js.gz",
  })],
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  mode: "development",
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          'presets': ['@babel/preset-react']
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader","sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};