import { observable, action, computed } from "mobx";

class AuthentationStore {
  @observable token = null;

  @computed
  get isLoggedIn() {
    return !!this.token;
  }

  @action
  setToken(token) {
    localStorage.setItem("auth-token", token);
    this.token = token;
  }
}

let store = new AuthentationStore();

let tokenStored = localStorage.getItem("auth-token");
if (tokenStored) {
  console.log("rehydrating token=", tokenStored);
  store.setToken(tokenStored);
}


export default store;
