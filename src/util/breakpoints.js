import { css } from "emotion";

export const breakpoints = {
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  moreThanLarge: "(min-width: 992px)",
  tallPhone: "(max-width: 360px) and (min-height: 740px)",
  shortPhone: "(max-height: 550px)",
};

export const mq = Object.keys(breakpoints).reduce((accumulator, label) => {
  let query = breakpoints[label];

  if (typeof query !== "string") {
    query = `(max-width: ${query}px)`;
  }

  accumulator[label] = cls =>
    css`
      @media ${query} {
        ${cls};
      }
    `;
  return accumulator;
}, {});

export default mq;
