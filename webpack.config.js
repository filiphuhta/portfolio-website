const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images',
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "assets/images/favicon.ico",
      headers: {
        "referrer": "no-referrer"
      },
      meta: {
        'Content-Security-Policy': {
          'base-uri': "'self'",
          'default-src': "'self'",
          'frame-src': "'none'",
          'img-src': ["'self'", 'data:'],
          'media-src': "'none'",
          'object-src': "'none'",
          'script-src': ["'self'"],
          'font-src': ["'self'", "https://fonts.gstatic.com"],
          'style-src': ["'self'", "https://fonts.googleapis.com"],
        }
      }
    }),

  ],
};