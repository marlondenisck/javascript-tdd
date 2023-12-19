const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, "./public"),
        filename: `bundle.js`,
    },
    devServer: {
        static: {
        directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
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