import { ArrowLeft } from "lucide-react";
import { IndexCard } from "../layout/IndexCard";
import { IconButton } from "../shared/Button";
import { TodoFeature } from "../features/TodoFeature";
import { PlannerFeature } from "../features/PlannerFeature";
import { QuoteFeature } from "../features/QuoteFeature";
import { PomodoroFeature } from "../features/PomodoroFeature";
import { GoalsFeature } from "../features/GoalsFeature";

const FEATURE_COMPONENTS = {
  todo: TodoFeature,
  planner: PlannerFeature,
  quote: QuoteFeature,
  pomodoro: PomodoroFeature,
  goals: GoalsFeature,
};

export function FeatureView({ tile, onBack }) {
  const FeatureBody = FEATURE_COMPONENTS[tile.id];
  const Icon = tile.Icon;

  return (
    <IndexCard rotate="" className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <IconButton color="ink" onClick={onBack}>
          <ArrowLeft size={18} />
        </IconButton>
        <Icon size={20} className="text-accent dark:text-accent-dark" />
        <div className="font-display text-xl text-ink dark:text-ink-dark">{tile.title}</div>
      </div>
      <FeatureBody />
    </IndexCard>
  );
}
