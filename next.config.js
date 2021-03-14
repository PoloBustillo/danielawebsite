const path = require("path");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const withPurgeCss = require("next-purgecss");
const withImages = require("next-images");
dotenvLoad();

const withNextEnv = nextEnv();

const config = withPurgeCss(
  withNextEnv(
    withImages({
      purgeCssPaths: ["pages/**/*", "components/**/*"],
      purgeCss: {
        whitelist: () => ["player"],
        whitelistPatterns: () => [/Toastify/, /.*nprogress.*/],
        rejected: true,
      },
      purgeCssEnabled: ({ dev, isServer }) => true, // Enable PurgeCSS for all env
    })
  )
);
module.exports = config;
