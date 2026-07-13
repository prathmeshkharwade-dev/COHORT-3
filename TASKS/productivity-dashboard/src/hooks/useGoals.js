import { useEffect, useState } from "react";
import { loadKey, saveKey } from "../services/storageService";
import { STORAGE_KEYS } from "../utils/constants";

export function useGoals() {
  const [goals, setGoals] = useState(() => loadKey(STORAGE_KEYS.goals, []));

  useEffect(() => { saveKey(STORAGE_KEYS.goals, goals); }, [goals]);

  const addGoal = (text) => {
    const v = text.trim();
    if (!v) return;
    setGoals((prev) => [...prev, { id: Date.now(), text: v, completed: false }]);
  };
  const toggleGoal = (id) =>
    setGoals((prev) => prev.map((g) => (g.id === id ? { ...g, completed: !g.completed } : g)));
  const removeGoal = (id) => setGoals((prev) => prev.filter((g) => g.id !== id));

  const completedCount = goals.filter((g) => g.completed).length;
  const progressPct = goals.length ? Math.round((completedCount / goals.length) * 100) : 0;

  return { goals, addGoal, toggleGoal, removeGoal, completedCount, progressPct };
}
