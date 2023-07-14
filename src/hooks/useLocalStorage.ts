import { useState } from "react";

export default function useLocalStorage(
  key: string,
  value: string | null = null
) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
        return value;
      }
    } catch (err) {
      return value;
    }
  });
  const setValue = (value: string) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {}
    setStoredValue(value);
  };
  return [storedValue, setValue];
}
