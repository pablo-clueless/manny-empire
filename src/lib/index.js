

export const setWithKey = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
}

export const getWithKey = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const removeWithKey = (key) => {
    localStorage.removeItem(key);
}
