module.exports = {
  stories: [
    "../examples/**/*.stories.mdx",
    "../examples/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  typescript: { reactDocgen: false },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ["postcss-loader"],
    });

    return config;
  },
  staticDirs: ["../public"],
};
