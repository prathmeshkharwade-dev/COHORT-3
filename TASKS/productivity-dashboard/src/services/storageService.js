/**
 * Thin wrapper around window.localStorage.
 * This is the app's entire "data layer" — there is no server, no database,
 * no API. Everything the user creates lives in their own browser.
 */
export function loadKey(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function saveKey(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeKey(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* no-op */
  }
}
