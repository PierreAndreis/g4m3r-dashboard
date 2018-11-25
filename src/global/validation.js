import {
  regexAdHocEmoji,
  regexAdHocEmojiAnimated,
  regexUnicodeEmoji,
  regexUnicodeTextEmoji,
} from "../constants/validation";
import textEmojis from "../constants/textEmojis";

const validationMessages = {
  required: "This field is required",

  stringMin: min => `String is too short (min: ${min} chars)`,
  stringMax: max => `String is too long (max: ${max} chars)`,

  hexColor: `This is not a valid hex color code`,
  emoji: `This is not a valid emoji`,

  isNumber: `This is not a valid number`,

  numberMin: min => `Number is too low (min: ${min})`,
  numberMax: max => `Number is too high (max: ${max})`,
};

// returns false if is valid
// returns a string if is not valid, the string is the explaination why it failed
const Validation = {
  required: () => value => {
    if (!value || value === "" || typeof value === "undefined") {
      return validationMessages.required;
    }
  },

  // String validations

  stringMin: min => value => {
    if (value.length < min) {
      return validationMessages.stringMin(min);
    }
  },

  stringMax: max => value => {
    if (value.length > max) {
      return validationMessages.stringMax(max);
    }
  },

  hexColor: () => value => {
    if (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value)) {
      return validationMessages.hexColor;
    }
  },

  emoji: () => value => {
    const cleanEmoji = value.replace(/:/g, "");
    if (textEmojis[cleanEmoji]) value = textEmojis[cleanEmoji];

    if (
      regexUnicodeTextEmoji.test(value) ||
      regexUnicodeEmoji.test(value) ||
      regexAdHocEmoji.test(value) ||
      regexAdHocEmojiAnimated.test(value)
    ) {
      return validationMessages.emoji;
    }
  },

  // Numbers validation
  isNumber: () => value => {
    if (isNaN(Number(value))) {
      return validationMessages.isNumber;
    }
  },
  numberMin: min => value => {
    if (Number(value) < min) {
      return validationMessages.numberMin(min);
    }
  },
  numberMax: max => value => {
    if (Number(value) > max) {
      return validationMessages.numberMax(max);
    }
  },

  // Helpers
  all: (...fns) => value => {
    for (const fn of fns) {
      const res = fn(value);
      if (res) {
        return res;
      }
    }
  },
};

export default Validation;
