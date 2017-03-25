const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack-dev.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(8080, 'localhost', () => {
  console.log('listening at port 8080')
})
