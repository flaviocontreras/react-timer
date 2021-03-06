var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.jsx'
  ],
  externals:{
    jquery: 'jQuery' // Indica o nome como a referencia para o jquery poderá ser usado
  },
  plugins:[
    // Substitui tudo que encontrar com estes simbolos, por jquery
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve:{
    root: __dirname,
    alias:{
      Main: 'src/components/Main.jsx',
      Nav: 'src/components/Nav.jsx',
      Timer: 'src/components/Timer.jsx',
      Countdown: 'src/components/Countdown.jsx',
      CountdownForm: 'src/components/CountdownForm.jsx',
      Clock: 'src/components/Clock.jsx',
      Controls: 'src/components/Controls.jsx',
      applicationStyles: 'src/styles/app.scss'
    },
    extensions:['','.js','.jsx']
  },
  module:{
    loaders: [
      {
        loader: 'babel-loader',
        query:{
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader:{
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'eval-source-map'
};
