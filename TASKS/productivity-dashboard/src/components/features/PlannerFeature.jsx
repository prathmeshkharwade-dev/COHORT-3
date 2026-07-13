import { X } from "lucide-react";
import { HOURS } from "../../utils/constants";
import { formatHourLabel } from "../../utils/time";
import { IconButton } from "../shared/Button";
import { usePlanner } from "../../hooks/usePlanner";
import { useClock } from "../../hooks/useClock";

export function PlannerFeature() {
  const { plan, setSlot, clearSlot } = usePlanner();
  const now = useClock();
  const currentHour = now.getHours();

  return (
    <div className="flex flex-col gap-1.5 max-h-[480px] overflow-y-auto pr-1">
      {HOURS.map((h) => {
        const active = h === currentHour;
        return (
          <div
            key={h}
            className={`flex items-center gap-3 px-3 py-2 rounded border ${
              active
                ? "bg-surface-raised dark:bg-surface-dark-raised border-accent dark:border-accent-dark"
                : "bg-transparent border-line dark:border-line-dark"
            }`}
          >
            <span className={`w-14 shrink-0 font-mono text-xs ${active ? "text-accent dark:text-accent-dark" : "text-ink-dim dark:text-ink-dim-dark"}`}>
              {formatHourLabel(h)}
            </span>
            <input
              value={plan[h] || ""}
              onChange={(e) => setSlot(h, e.target.value)}
              placeholder="—"
              className="flex-1 bg-transparent border-none outline-none text-ink dark:text-ink-dark font-sans text-sm"
            />
            {plan[h] && (
              <IconButton onClick={() => clearSlot(h)}>
                <X size={13} />
              </IconButton>
            )}
          </div>
        );
      })}
    </div>
  );
}
