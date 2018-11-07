const { compose } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");
const { createEmotionRewire } = require("react-app-rewire-emotion");

const isProd = process.env.NODE_ENV === "production";

/* config-overrides.js */
module.exports = function override(config, env) {
  const rewires = compose(
    rewireMobX, // ... place more rewires
    createEmotionRewire({
      inline: !isProd,
      autoLabel: isProd,
      hoist: isProd,
    })
  );

  return rewires(config, env);
};
