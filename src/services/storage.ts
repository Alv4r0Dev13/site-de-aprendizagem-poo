import { base64ToObject, objectToBase64 } from "../utils/converters";

export function getStorage<T = any>(key: string) {
  return base64ToObject(localStorage.getItem(key)) as T | null;
}

export function setStorage(key: string, data: any) {
  localStorage.setItem(key, objectToBase64(data));
}

export function removeStorage(key: string) {
  localStorage.removeItem(key);
}

export function clearStorage() {
  localStorage.clear();
}
