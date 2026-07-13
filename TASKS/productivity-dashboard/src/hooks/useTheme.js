import { useEffect, useState } from "react";
import { loadKey, saveKey } from "../services/storageService";
import { STORAGE_KEYS } from "../utils/constants";

export function useTheme() {
  const [isDark, setIsDark] = useState(() => loadKey(STORAGE_KEYS.theme, "dark") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    saveKey(STORAGE_KEYS.theme, isDark ? "dark" : "light");
  }, [isDark]);

  return { isDark, toggleTheme: () => setIsDark((d) => !d) };
}
