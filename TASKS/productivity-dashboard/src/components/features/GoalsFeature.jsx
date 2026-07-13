import { useState } from "react";
import { Plus, Check, Trash2 } from "lucide-react";
import { Button, IconButton } from "../shared/Button";
import { EmptyState } from "../shared/EmptyState";
import { useGoals } from "../../hooks/useGoals";

export function GoalsFeature() {
  const { goals, addGoal, toggleGoal, removeGoal, completedCount, progressPct } = useGoals();
  const [text, setText] = useState("");

  const submit = () => { addGoal(text); setText(""); };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Set a goal for today…"
          className="flex-1 bg-surface-raised dark:bg-surface-dark-raised border border-line dark:border-line-dark rounded px-3 py-2.5 text-ink dark:text-ink-dark font-sans text-sm outline-none"
        />
        <Button primary onClick={submit}><Plus size={16} /> Add</Button>
      </div>

      {goals.length > 0 && (
        <div className="mb-4">
          <div className="flex justify-between mb-1 text-xs text-ink-dim dark:text-ink-dim-dark font-sans">
            <span>{completedCount} of {goals.length} completed</span>
            <span>{progressPct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-line dark:bg-line-dark overflow-hidden">
            <div
              className="h-full bg-accent2 dark:bg-accent2-dark transition-[width] duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      )}

      {goals.length === 0 && <EmptyState text="No goals yet. Name one thing worth finishing today." />}

      <div className="flex flex-col gap-2">
        {goals.map((g) => (
          <div
            key={g.id}
            className="flex items-center gap-2 px-3 py-2 bg-surface-raised dark:bg-surface-dark-raised border border-line dark:border-line-dark rounded"
            style={{ opacity: g.completed ? 0.55 : 1 }}
          >
            <IconButton color={g.completed ? "accent2" : "default"} onClick={() => toggleGoal(g.id)}>
              <Check size={14} />
            </IconButton>
            <span className={`flex-1 text-ink dark:text-ink-dark font-sans text-sm ${g.completed ? "line-through" : ""}`}>
              {g.text}
            </span>
            <IconButton color="danger" onClick={() => removeGoal(g.id)}>
              <Trash2 size={14} />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
}
