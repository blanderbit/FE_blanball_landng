import { $api } from "../../src/api";

export class TokenWorker {
  _getKeyName() {
    return this._keyName;
  }

  setKeyName(name) {
    if (typeof name !== "string") {
      return;
    }
    this._keyName = name;
    return this;
  }
  async validateToken(api_key) {
    try {
      await $api.ApiKeysRequest.validateApiKey(api_key);
      return true;
    } catch {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem(this._getKeyName());
  }

  clearToken() {
    localStorage.removeItem(this._getKeyName());
  }

  setToken(data) {
    localStorage.setItem(this._getKeyName(), data);
  }

  async isToken() {
    return !!this.getToken();
  }
}
