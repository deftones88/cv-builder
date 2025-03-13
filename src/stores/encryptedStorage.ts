import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_STORAGE_SECRET_KEY;

export const encryptedStorage = {
  getItem: (name: string) => {
    const value = sessionStorage.getItem(name);
    if (!value) return null;
    const decrypted = CryptoJS.AES.decrypt(value, SECRET_KEY).toString(
      CryptoJS.enc.Utf8,
    );
    return decrypted;
  },
  setItem: (name: string, value: string) => {
    const encrypted = CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
    sessionStorage.setItem(name, encrypted);
  },
  removeItem: (name: string) => {
    sessionStorage.removeItem(name);
  },
};
