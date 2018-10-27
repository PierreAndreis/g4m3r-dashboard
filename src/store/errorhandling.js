import { observable, action, computed } from "mobx";

class ErrorHandlingStore {
	@observable userErrors = new Map();

	@computed
	get hasErrors() {
		return this.userErrors.size;
	}

	@action
	exists(property) {
		return this.userErrors.get(property);
	}

	@action
	saveError(property, value) {
		this.userErrors.set(property, value)
	}

	@action
	removeError(property) {
		this.userErrors.delete(property)
	}

}

let store = new ErrorHandlingStore();

export default store;