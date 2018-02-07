import config from '../config'

export function generateWebpackConfig(answers) {
  let defaultConfig = `
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    context: __dirname + '/src',

    entry: {
      bundle: './${'sdf}'
    },
  
    output: {
      path: __dirname + '/build',
      filename: 'index.jsx'
    },
  
    devtool: 'inline-source-map',
    ${'sdfs'}
    ${'sdfs'}
    
    resolve: {
      extensions: ${'sdfsd'}
    },
    
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ]
  };
`
}