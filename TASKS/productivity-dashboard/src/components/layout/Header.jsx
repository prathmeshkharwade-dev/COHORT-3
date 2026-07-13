import { Sun, Moon } from "lucide-react";
import { formatClock } from "../../utils/time";
import { SEGMENTS } from "../../utils/time";

export function Header({ isDark, toggleTheme, now, segment }) {
  const { time, ampm, date } = formatClock(now);

  return (
    <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
      <div>
        <div className="font-display text-ink dark:text-ink-dark text-4xl font-semibold tracking-tight mb-1">
          Daybook
        </div>
        <div className="text-ink-dim dark:text-ink-dim-dark text-[14px] font-sans font-medium">
          {date} &middot; {SEGMENTS[segment].label}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="font-sans text-ink dark:text-ink-dark text-lg font-medium tracking-tight bg-surface dark:bg-surface-dark border border-line dark:border-line-dark shadow-sm rounded-lg px-4 py-2">
          {time} <span className="text-sm text-ink-dim dark:text-ink-dim-dark ml-1">{ampm}</span>
        </div>

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-surface dark:bg-surface-dark border border-line dark:border-line-dark shadow-sm text-ink-dim dark:text-ink-dim-dark hover:text-accent hover:border-accent transition-colors duration-200 cursor-pointer"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </div>
  );
}
