module.exports = {
  multipass: false,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeUselessDefs: false,
          removeUnknownsAndDefaults: false,
        },
      },
    },
    "cleanupIDs",
    "removeViewBox",
  ],
};
