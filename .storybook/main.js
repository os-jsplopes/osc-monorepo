const path = require("path");

module.exports = {
  stories: ["../packages/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/preset-typescript",
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, "./tsconfig.json"),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, "../packages")],
        transpileManager: true,
      },
    },
  ],
};
