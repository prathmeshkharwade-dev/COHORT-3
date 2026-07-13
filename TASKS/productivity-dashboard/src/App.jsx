import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import { useClock } from "./hooks/useClock";
import { daySegment } from "./utils/time";
import { TILES } from "./utils/constants";
import { BackgroundWash } from "./components/layout/BackgroundWash";
import { Header } from "./components/layout/Header";
import { Dashboard } from "./components/dashboard/Dashboard";
import { FeatureView } from "./components/dashboard/FeatureView";

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const now = useClock();
  const [view, setView] = useState("dashboard");

  const segment = daySegment(now.getHours());
  const activeTile = TILES.find((t) => t.id === view);

  return (
    <div className="min-h-screen relative font-sans">
      <BackgroundWash segment={segment} />
      <div className="relative z-[1] max-w-[880px] mx-auto px-5 pt-7 pb-14">
        <Header isDark={isDark} toggleTheme={toggleTheme} now={now} segment={segment} />

        {view === "dashboard" ? (
          <Dashboard onOpen={setView} />
        ) : (
          <FeatureView tile={activeTile} onBack={() => setView("dashboard")} />
        )}

        <div className="text-center text-ink-dim dark:text-ink-dim-dark text-[11px] mt-10 font-sans">
          Everything here is saved to your own browser's storage — no server, no account.
        </div>
      </div>
    </div>
  );
}
