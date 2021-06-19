const STORAGE_KEY = '_N2T_user';

const storageHandler = {
  set(userName) {
    localStorage.setItem(STORAGE_KEY, userName);
  },

  get() {
    return localStorage.getItem(STORAGE_KEY);
  },

  clear() {
    localStorage.clear();
  },
};

export default storageHandler;
