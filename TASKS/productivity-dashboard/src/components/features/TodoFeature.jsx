import { useState } from "react";
import { Plus, Check, Star, Trash2 } from "lucide-react";
import { Button, IconButton } from "../shared/Button";
import { EmptyState } from "../shared/EmptyState";
import { useTodos } from "../../hooks/useTodos";

export function TodoFeature() {
  const { todos, addTodo, toggleField, removeTodo } = useTodos();
  const [text, setText] = useState("");

  const submit = () => { addTodo(text); setText(""); };

  const pending = todos.filter((t) => !t.completed);
  const done = todos.filter((t) => t.completed);

  return (
    <div>
      <div className="flex gap-2 mb-5">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Add a task…"
          className="flex-1 bg-surface-raised dark:bg-surface-dark-raised border border-line dark:border-line-dark rounded px-3 py-2.5 text-ink dark:text-ink-dark font-sans text-sm outline-none"
        />
        <Button primary onClick={submit}><Plus size={16} /> Add</Button>
      </div>

      {todos.length === 0 && <EmptyState text="No tasks yet. What's first on the list?" />}

      <div className="flex flex-col gap-2">
        {[...pending, ...done].map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-2 px-3 py-2 bg-surface-raised dark:bg-surface-dark-raised border border-line dark:border-line-dark rounded"
            style={{ opacity: t.completed ? 0.55 : 1 }}
          >
            <IconButton color={t.completed ? "accent2" : "default"} onClick={() => toggleField(t.id, "completed")}>
              <Check size={14} />
            </IconButton>
            <span className={`flex-1 text-ink dark:text-ink-dark font-sans text-sm ${t.completed ? "line-through" : ""}`}>
              {t.text}
            </span>
            <IconButton color={t.important ? "accent" : "default"} onClick={() => toggleField(t.id, "important")}>
              <Star size={14} fill={t.important ? "currentColor" : "none"} />
            </IconButton>
            <IconButton color="danger" onClick={() => removeTodo(t.id)}>
              <Trash2 size={14} />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
}
