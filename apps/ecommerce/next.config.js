const withTM = require("next-transpile-modules")(["components"]);

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const nextConfig = {
  webpack: function (config) {
    config.resolve.symlinks = true;

    config.resolve.plugins = [
      ...config.resolve.plugins,
      new TsconfigPathsPlugin(),
    ];

    return config;
  },
};

module.exports = withTM(nextConfig);