import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './src/index.js',

  output: {
    path: './build',
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
      // 'react-addons-css-transition-group': 'rc-css-transition-group'
    }
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /src\//,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(xml|txt)$/,
        loader: 'raw'
      },
      {
        test: /\.(woff|ttf|eot)(\?.*)?$/i,
        loader: 'file-loader?name=assets/fonts/[name]_[hash:base64:5].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack'
        ]
      }
    ]
  },

  postcss: () => [
    autoprefixer(),
    require('postcss-flexbugs-fixes')
  ],

  plugins: ([
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /my/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]).concat(ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ] : []),

  stats: { colors: true },

  devtool: ENV === 'production' ? 'source-map' : 'inline-source-map',

  devServer: {
    port: process.env.PORT || 8888,
    host: '0.0.0.0',
    colors: true,
    publicPath: '/',
    contentBase: './src',
    historyApiFallback: true,
    proxy: [
      // OPTIONAL: proxy configuration:
      // {
      // 	path: '/optional-prefix/**',
      // 	target: 'http://target-host.com',
      // 	rewrite: req => { req.url = req.url.replace(/^\/[^\/]+\//, ''); }   // strip first path segment
      // }
    ]
  }
};
