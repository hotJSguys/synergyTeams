const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: './index.js',
  context: resolve(__dirname, '../src'),
  
  module: {
    rules: [

//GENERAL
      { 
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react', 
            '@babel/preset-env'
          ]
        },
        exclude: /node_modules/
      },

      
//ASSETS
      {
        test: /\.(?:ico|png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: { 
              limit: 8000,
              name: 'images/[hash]-[name].[ext]'
            }  
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: { 
              limit: 8000,
              mimetype: 'image/svg+xml',
              name: 'images/[hash]-[name].[ext]'
            }  
          }
        ]
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: { 
              limit: 8000,
              name: 'fonts/[hash]-[name].[ext]'
            }  
          }
        ]
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: { 
              limit: 8000,
              name: 'fonts/[hash]-[name].[ext]'
            }  
          }
        ]
      }
    ]
  },

  performance: {
    hints: 'warning',
    maxAssetSize: 20000000,
    maxEntrypointSize: 100000000
  },

  
  plugins: [
    new HtmlWebpackPlugin({
      template: `assets/index.html`,
      filename: 'index.html',
      inject: true
    })
  ],
}