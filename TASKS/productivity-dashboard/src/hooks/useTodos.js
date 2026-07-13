import { useEffect, useState } from "react";
import { loadKey, saveKey } from "../services/storageService";
import { STORAGE_KEYS } from "../utils/constants";

export function useTodos() {
  const [todos, setTodos] = useState(() => loadKey(STORAGE_KEYS.todos, []));

  useEffect(() => { saveKey(STORAGE_KEYS.todos, todos); }, [todos]);

  const addTodo = (text) => {
    const v = text.trim();
    if (!v) return;
    setTodos((prev) => [{ id: Date.now(), text: v, important: false, completed: false }, ...prev]);
  };
  const toggleField = (id, field) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, [field]: !t[field] } : t)));
  const removeTodo = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  return { todos, addTodo, toggleField, removeTodo };
}
