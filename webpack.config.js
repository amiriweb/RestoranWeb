var path = require('path');
module.exports = {
  entry: "./scripts/App.js",
  output: {
    path: path.resolve(__dirname, "./temp/scripts"),
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_moduels/
      }
    ]
  }
}
