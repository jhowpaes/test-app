module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
        },
      ],
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@api": "./src/api",
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@hooks": "./src/hooks",
            "@routes": "./src/routes",
            "@screens": "./src/screens",
            "@theme": "./src/theme",
            "@services": "./src/services",
            "@infra": "./src/infra",
            "@domain": "./src/domain",
          },
        },
      ],
    ],
  };
};
