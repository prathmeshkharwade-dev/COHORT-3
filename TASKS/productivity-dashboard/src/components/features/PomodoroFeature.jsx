import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "../shared/Button";
import { usePomodoro } from "../../hooks/usePomodoro";
import { formatCountdown } from "../../utils/time";

const RADIUS = 98;
const CIRC = 2 * Math.PI * RADIUS;

export function PomodoroFeature() {
  const { session, secondsLeft, running, progress, toggleRunning, reset, switchSession } = usePomodoro();

  return (
    <div className="flex flex-col items-center py-6">
      <div className="flex gap-2 mb-6">
        {["work", "break"].map((s) => (
          <button
            key={s}
            onClick={() => switchSession(s)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans uppercase tracking-wide border bg-transparent cursor-pointer ${
              session === s
                ? "border-accent dark:border-accent-dark text-accent dark:text-accent-dark"
                : "border-line dark:border-line-dark text-ink-dim dark:text-ink-dim-dark"
            }`}
          >
            {s === "work" ? "Work session" : "Break"}
          </button>
        ))}
      </div>

      <div className="relative w-[220px] h-[220px]">
        <svg width="220" height="220" className="-rotate-90">
          <circle cx="110" cy="110" r={RADIUS} fill="none" className="stroke-line dark:stroke-line-dark" strokeWidth="10" />
          <circle
            cx="110" cy="110" r={RADIUS} fill="none"
            className="stroke-accent dark:stroke-accent-dark transition-[stroke-dashoffset] duration-1000 ease-linear"
            strokeWidth="10"
            strokeDasharray={CIRC}
            strokeDashoffset={CIRC * (1 - progress)}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-mono text-[44px] text-ink dark:text-ink-dark font-medium">
          {formatCountdown(secondsLeft)}
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <Button primary onClick={toggleRunning}>
          {running ? <Pause size={15} /> : <Play size={15} />} {running ? "Pause" : "Start"}
        </Button>
        <Button onClick={reset}>
          <RotateCcw size={15} /> Reset
        </Button>
      </div>
    </div>
  );
}
