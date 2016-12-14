module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.scss$|.css$/,
        loader: "style-loader!css-loader!sass-loader"
      },
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
}
