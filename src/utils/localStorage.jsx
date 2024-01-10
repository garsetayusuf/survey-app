export const getLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    return saved;
  }
};

export const createLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

export const removeLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

export const clearLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};

export function getExpirationTime() {
  return getLocalStorage("expirationTime");
}
