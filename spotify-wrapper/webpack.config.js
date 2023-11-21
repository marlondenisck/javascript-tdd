const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "./dist"),
    filename: `spotifyWrapper.umd.js`,
    library: 'spotifyWrapper',
    libraryTarget: 'var',
    // libraryExport: 'default',
    umdNamedDefine: true,
},
  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: 'spotifyWrapper.js',
  //   library: 'spotifyWrapper',
  //   libraryTarget: 'umd',
  //   globalObject: 'this',
  //   umdNamedDefine: true
  // },
  resolve: {
    fallback: {
      path: false,
      os: false,
      crypto: false,
    }
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