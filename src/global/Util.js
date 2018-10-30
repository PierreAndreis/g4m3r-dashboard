import { css } from "emotion";

const BREAKPOINTS = {
  // Numerical values will result in a min-width query
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  // String values will be used as is
  tallPhone: "(max-width: 360px) and (min-height: 740px)",
};

class Util {
  static dlv = (obj, key, def, p) => {
    p = 0;
    key = key.split ? key.split(".") : key;
    while (obj && p < key.length) obj = obj[key[p++]];
    return obj === undefined || p < key.length ? def : obj;
  };

  static mq = Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
    let prefix = typeof BREAKPOINTS[label] === "string" ? "" : "min-width:";
    let suffix = typeof BREAKPOINTS[label] === "string" ? "" : "px";
    accumulator[label] = cls =>
      css`
        @media (${prefix + BREAKPOINTS[label] + suffix}) {
          ${cls};
        }
      `;
    return accumulator;
  }, {});

  static BREAKPOINTS = BREAKPOINTS;
}

export default Util;
