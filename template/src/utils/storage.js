export default class Storage{
    static setLocal(key, value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
    static getLocal(key) {
      let value = window.localStorage.getItem(key);
      return JSON.parse(value);
    }
    static setSession(key, value) {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
    static getSession(key) {
      let value = window.sessionStorage.getItem(key);
      return JSON.parse(value);
    }
    static clearOneLocal(key) {
      window.localStorage.removeItem(key);
    }
    static clearOneSession(key) {
      window.sessionStorage.removeItem(key);
    }
    static clearAllLocal() {
      window.localStorage.clear();
    }
    static clearAllSession() {
      window.sessionStorage.clear();
    }
}
