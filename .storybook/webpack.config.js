const webpack = require('webpack');
const path = require("path");

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve.alias = {
    ...storybookBaseConfig.resolve.alias,
    angular: require.resolve("angular")
  };
  return {
    ...storybookBaseConfig,
    plugins: [
      ...storybookBaseConfig.plugins,
      new webpack.DefinePlugin({
        ON_TEST: process.env.NODE_ENV === 'test'
      })
    ],
    module: {
      ...storybookBaseConfig.module,
      rules: [
        ...storybookBaseConfig.module.rules,
        {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"],
          include: path.resolve(__dirname, "../")
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    } 
  };
};