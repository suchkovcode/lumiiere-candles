const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const isDev = process.env.NODE_ENV !== "production";

module.exports = {
   target: isDev ? "web" : "browserslist",
   devtool: isDev ? "eval-source-map" : undefined,
   entry: {
      app: path.resolve(__dirname, "./src/app.js"),
   },
   output: {
      path: path.resolve(__dirname, "./dist"),
      filename: isDev ? "[name].[contenthash].js" : "[name].min.js",
      clean: true,
   },
   resolve: {
      extensions: [".js", ".json", ".scss", ".css"],
      alias: {
         Root: path.resolve(__dirname, "./src"),
         Assets: path.resolve(__dirname, "./src/assets"),
         Components: path.resolve(__dirname, "./src/components"),
      },
   },
   cache: {
      type: "filesystem",
      cacheDirectory: path.resolve(__dirname, ".cache"),
      idleTimeoutAfterLargeChanges: 3000,
      maxAge: 172800000,
      maxMemoryGenerations: isDev ? 5 : Infinity,
      memoryCacheUnaffected: true,
   },
   optimization: {
      splitChunks: {
         cacheGroups: {
            styles: {
               name: "styles",
               type: "css/mini-extract",
               chunks: "all",
               enforce: true,
            },
         },
      },
      minimizer: [
         "...",
         new ImageMinimizerPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i,
            exclude: /(node_modules|bower_components)/,
            minimizer: {
               implementation: isDev ? undefined : ImageMinimizerPlugin.imageminMinify,
               options: {
                  plugins: [
                  ["gifsicle", { interlaced: true, optimizationLevel: 2}],
                  ["mozjpeg", { quality: 50, progressive: true }],
                  ["optipng", { optimizationLevel: 5 }],
               ],
             },
           },
         }),
      ],
   },
   performance: {
      hints: false,
      maxAssetSize: 100000,
      maxEntrypointSize: 400000,
   },
   devServer: {
      static: {
         directory: path.join(__dirname, "./dist"),
      },
      devMiddleware: {
         serverSideRender: false,
         writeToDisk: false,
      },
      server: "http",
      compress: false,
      http2: false,
      https: false,
      port: 5500,
      open: true,
      hot: true,
      liveReload: false,
   },
   externals: {
      jquery: "jQuery",
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: "index.html",
         template: path.resolve(__dirname, "./src/layouts/index.html"),
         inject: "body",
         scriptLoading: "blocking",
         minify: isDev ? false : true,
         xhtml: false,
      }),
      new HtmlWebpackPlugin({
         filename: "pages/home.html",
         template: path.resolve(__dirname, "./src/pages/home.html"),
         inject: false,
         minify: isDev ? false : true,
      }),
      new HtmlWebpackPlugin({
         filename: "pages/about.html",
         template: path.resolve(__dirname, "./src/pages/about.html"),
         inject: false,
         minify: isDev ? false : true,
      }),
      new HtmlWebpackPlugin({
         filename: "pages/care.html",
         template: path.resolve(__dirname, "./src/pages/care.html"),
         inject: false,
         minify: isDev ? false : true,
      }),
      new HtmlWebpackPlugin({
         filename: "pages/faq.html",
         template: path.resolve(__dirname, "./src/pages/faq.html"),
         inject: false,
         minify: isDev ? false : true,
      }),
      new HtmlWebpackPlugin({
         filename: "pages/partners.html",
         template: path.resolve(__dirname, "./src/pages/partners.html"),
         inject: false,
         minify: isDev ? false : true,
      }),
      new HtmlWebpackPlugin({
         filename: "pages/oferta.html",
         template: path.resolve(__dirname, "./src/pages/oferta.html"),
         inject: false,
         minify: isDev ? false : true,
      }),
      new HtmlWebpackPlugin({
         filename: "pages/policy.html",
         template: path.resolve(__dirname, "./src/pages/policy.html"),
         inject: false,
         minify: isDev ? false : true,
      }),
      new HtmlWebpackPlugin({
         filename: "pages/delivery.html",
         template: path.resolve(__dirname, "./src/pages/delivery.html"),
         inject: false,
         minify: isDev ? false : true,
      }),
      new MiniCssExtractPlugin({
         filename: isDev ? "app.css" : "app.min.css",
         linkType: "text/css",
      }),
      new FaviconsWebpackPlugin({
         logo: "./src/assets/img/svg/favicon.svg",
         cache: true,
         mode: "auto",
         publicPath: "./assets/static",
         outputPath: "./assets/static",
         prefix: "",
         inject: true,
         favicons: {
            appName: "Mountain recipe-app",
            appDescription: "Mountain recipe",
            developerName: "Mountain recipe",
            appShortName: "Mountain recipe",
            developerURL: "Mountain recipe",
            display: "standalone",
            background: "#fff",
            theme_color: "#fff",
            lang: "en-US",
            start_url: "/",
            icons: {
               android: true,
               appleIcon: false,
               appleStartup: false,
               favicons: true,
               windows: true,
               yandex: false,
            },
         },
      }),
      new BundleAnalyzerPlugin({
         analyzerMode: isDev ? "static" : "disabled",
         analyzerPort: 5500,
         openAnalyzer: false,
         analyzerHost: "127.0.0.1",
         logLevel: "info"
      }),
      new DuplicatePackageCheckerPlugin(),
   ],
   module: {
      rules: [
         {  // Start Babel
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "./src"),
            exclude: /(node_modules|bower_components)/,
            use: isDev ? undefined : {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"]
               }
            }
         }, // End Babel

         {  // Start Html
            test: /\.html$/i,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, "./src"),
            loader: "html-loader",
            options: {
               minimize: isDev ? false : false,
              },
         }, // End Html

         {  // Start Scss
            test: /\.s[ac]ss$/i,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, "./src"),
            use: [
               isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader",
            ],
         }, // End Scss

         {  // Start IMG
            test: /\.(jpg|png|svg|jpeg|gif)$/,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, "./src"),
            type: "asset/resource",
            generator: {
               filename: isDev ? "assets/img/[contenthash][ext]" : "assets/img/[name][ext]",
            },
         }, // End IMG


         {  // Start Fonts
            test: /\.(eot|ttf|woff|woff2)$/i,
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, "./src"),
            type: "asset/resource",
            generator: {
               filename: "assets/fonts/[name][ext]",
            },
         }, // End Fonts
      ],
   },
};
