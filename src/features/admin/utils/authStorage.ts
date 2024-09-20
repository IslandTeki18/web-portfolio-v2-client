const PROJECT_PREFIX = "portfolio_";

export const setAuthItem = (key: string, value: any) => {
  localStorage.setItem(`${PROJECT_PREFIX}${key}`, JSON.stringify(value));
};

export const getAuthItem = (key: string) => {
  const item = localStorage.getItem(`${PROJECT_PREFIX}${key}`);
  return item ? JSON.parse(item) : null;
};

export const removeAuthItem = (key: string) => {
  localStorage.removeItem(`${PROJECT_PREFIX}${key}`);
};

export const clearAuthStorage = () => {
  Object.keys(localStorage)
    .filter((key) => key.startsWith(PROJECT_PREFIX))
    .forEach((key) => localStorage.removeItem(key));
};
