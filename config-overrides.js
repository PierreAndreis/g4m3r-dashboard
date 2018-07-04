const { compose } = require("react-app-rewired");
const rewireMobX = require("react-app-rewire-mobx");
const { createEmotionRewire } = require("react-app-rewire-emotion");

/* config-overrides.js */
module.exports = function override(config, env) {
  const rewires = compose(
    rewireMobX, // ... place more rewires
    createEmotionRewire({ inline: true })
  );

  return rewires(config, env);
};
