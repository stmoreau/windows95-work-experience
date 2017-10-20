/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
    publicPath: '/build',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/,
        loader: 'babel'
      },
      { test: /\.(png|jpg)$/, 
        include:  [/os-icons/],
        loader: 'url-loader?name=/src/assets/os-icons/[name].[ext]' },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        exclude:  [/os-icons/],
        loaders: [
          'file?hash=sha512&digest=hex&name=/assets/[hash].[ext]',
          'image-webpack?optimizationLevel=7&interlaced=false'
        ]
      }
    ],
  },
  stats: {
    warnings: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx'] 
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.optimize.DedupePlugin(), //dedupe similar code 
    new webpack.optimize.UglifyJsPlugin(), //minify everything
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks 
  ]
};
