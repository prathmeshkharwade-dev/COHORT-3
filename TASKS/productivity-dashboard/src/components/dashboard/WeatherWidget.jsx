import { MapPin } from "lucide-react";
import { IndexCard } from "../layout/IndexCard";
import { useWeather } from "../../hooks/useWeather";
import { WEATHER_CODES } from "../../utils/constants";

export function WeatherWidget() {
  const state = useWeather();
  const wc = state.code !== undefined ? (WEATHER_CODES[state.code] || { label: "—" }) : { label: "" };
  const Icon = wc.Icon;

  return (
    <IndexCard className="p-6 flex-1 min-w-[230px]">
      <div className="flex items-center gap-1.5 mb-3 text-ink-dim dark:text-ink-dim-dark text-[13px] font-sans font-medium uppercase tracking-wide">
        <MapPin size={14} />
        {state.status === "ready" ? state.place : "Locating…"}
      </div>

      {state.status === "loading" && (
        <div className="text-ink-dim dark:text-ink-dim-dark font-sans text-[14px]">Fetching live weather…</div>
      )}

      {state.status === "error" && (
        <div className="text-danger dark:text-danger-dark font-sans text-[14px]">
          Couldn't reach the weather service. Try again shortly.
        </div>
      )}

      {state.status === "ready" && (
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
              <Icon size={30} className="text-accent dark:text-accent-dark" />
            </div>
          )}
          <div>
            <div className="font-display text-4xl text-ink dark:text-ink-dark font-semibold tracking-tight mb-1">
              {state.temp}°C
            </div>
            <div className="text-ink-dim dark:text-ink-dim-dark text-[13px] font-sans">
              {wc.label} · {state.humidity}% humidity · {state.wind} km/h wind
            </div>
          </div>
        </div>
      )}
    </IndexCard>
  );
}
