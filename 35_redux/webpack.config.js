/*
 * webpack.config.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

module.exports = {
  // bundle starting point
  entry: "main.js",

  // compilation result
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  resolve: {
    modulesDirectories: ["js"]
  },

  // transformations
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /(node_modules|bower_components)/ }
    ]
  },

  // external libraries that won't be included
  // in the bundle
  externals: {
    "react" : "React",
    "underscore": "_"
  }
};
