import { useEffect, useState } from "react";
import { loadKey, saveKey } from "../services/storageService";
import { STORAGE_KEYS } from "../utils/constants";

export function usePlanner() {
  const [plan, setPlan] = useState(() => loadKey(STORAGE_KEYS.plan, {}));

  useEffect(() => { saveKey(STORAGE_KEYS.plan, plan); }, [plan]);

  const setSlot = (hour, text) => setPlan((prev) => ({ ...prev, [hour]: text }));
  const clearSlot = (hour) =>
    setPlan((prev) => {
      const next = { ...prev };
      delete next[hour];
      return next;
    });

  return { plan, setSlot, clearSlot };
}
