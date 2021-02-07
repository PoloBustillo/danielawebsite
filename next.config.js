const path = require("path");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

const withImages = require("next-images");
dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv(
  withImages({
    webpack: (config) => {
      config.resolve.alias["components"] = path.resolve(
        __dirname,
        "components"
      );
      config.resolve.alias["public"] = path.resolve(__dirname, "public");
      return config;
    },
  })
);
