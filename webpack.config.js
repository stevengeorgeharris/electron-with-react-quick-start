module.exports = {
  entry: [
    __dirname + '/public/js/client.js'
  ],
  output: {
    path: __dirname + "/public/js",
    publicPath: '/',
    filename: 'client.bundle.js'
  },
  module: {
    devtool: "source-map",
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
};
