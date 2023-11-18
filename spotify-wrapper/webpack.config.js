const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'spotifyWrapper.js',
    library: 'spotifyWrapper',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};