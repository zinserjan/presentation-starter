import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const pathBase = path.resolve(__dirname, '..');
const pathSrc = path.join(pathBase, 'src');
const pathLib = path.join(pathBase, 'lib');
const pathDist = path.join(pathBase, 'dist');
const pathLoader = path.join(pathBase, 'webpack', 'loader');

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(pathSrc, 'presentation')
  ],
  output: {
    path: pathDist,
    chunkFilename: '[id].chunk.js',
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js'],
    root: [
      pathSrc
    ],
    alias: {
      'lib': pathLib,
    }
  },
  resolveLoader: {
    fallback: [
      pathLoader
    ],
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.md$/,
        loader: 'html-loader!highlight-loader!markdown-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          pathSrc,
          pathLib
        ]
      },
      {
        test: /reveal\.js\/plugin\/.*\.js$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /reveal\.js\/plugin\/.*\.html$/,
        loader: 'file?name=[path][name].[ext]'
      },

      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: '',
      template: path.join(pathLib, 'template', 'Html.js') // Load a custom template
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 50000
    }),
    new webpack.optimize.AggressiveMergingPlugin()

  ]
};


export default config;
