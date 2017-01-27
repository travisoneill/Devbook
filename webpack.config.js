module.exports = {
  context: __dirname,
  entry: "./frontend/devbook.jsx",
  output: {
    path: "./app/assets/javascripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  stats: {
            colors: true,
            modules: true,
            reasons: true,
            errorDetails: true
          },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
