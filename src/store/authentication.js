import { observable, action, computed } from "mobx";

class AuthentationStore {
  @observable token = null;

  @computed
  get isLoggedIn() {
    return !!this.token;
  }

  @action
  setToken(token) {
    this.token = token;
  }
}

export default new AuthentationStore();
