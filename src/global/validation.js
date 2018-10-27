import { regexAdHocEmoji, regexAdHocEmojiAnimated, regexUnicodeEmoji, regexUnicodeTextEmoji } from '../constants/validation';
import textEmojis from "../constants/textEmojis";

export const validateInput = (type, value, max, min) => {
	let noError = false, errorMessage = 'some error';
	switch (type) {
		case 'number':
			if (!isNaN(value)) {
				value = parseInt(value);
				if (max && min) {
					if (value > max) errorMessage = `Number is too high (max: ${max})`
					else if (value < min) errorMessage = `Number is too low (min: ${min})`
					else noError = true;
				} else if (max) {
					if (value > max) errorMessage = `Number is too high (max: ${max})`
					else noError = true;
				} else if (min) {
					if (value < min) errorMessage = `Number is too low (min: ${min})`
					else noError = true;
				} else noError = true;
			} else errorMessage = `Input is not a number`;
			break;
		case 'emoji':
			const cleanEmoji = value.replace(/:/g, "");
			value = textEmojis[cleanEmoji] || value;

			const isEmoji = regexUnicodeTextEmoji.exec(value) || regexUnicodeEmoji.exec(value) || regexAdHocEmoji.exec(value) || regexAdHocEmojiAnimated.exec(value);
			errorMessage = 'This is not a valid emoji';

			noError = isEmoji;
			break;
		case 'hexcolor':
			noError = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value);
			errorMessage = 'This is not a valid hex color code'
			break;
		default:
			if (typeof value === 'string') {
				if (max && min) {
					if (value.lenght > max) errorMessage = `String is too long (max: ${max} chars)`
					else if (value.lenght < min) errorMessage = `String is too short (min: ${max} chars)`;
					else noError = true;
				} else if (max) {
					if (value.lenght > max) errorMessage = `String is too long (max: ${max} chars)`
					else noError = true;
				} else if (min) {
					if (value.lenght < min) errorMessage = `String is too short (min: ${max} chars)`;
					else noError = true;
				} else noError = true;
			}
			break;
	}
	return { noError, errorMessage };
};