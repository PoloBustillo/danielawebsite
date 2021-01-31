const path = require("path");

const withImages = require("next-images");
module.exports = withImages({
  webpack: (config) => {
    config.resolve.alias["components"] = path.resolve(__dirname, "components");
    config.resolve.alias["public"] = path.resolve(__dirname, "public");
    return config;
  },
});
