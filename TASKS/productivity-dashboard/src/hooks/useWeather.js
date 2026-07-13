import { useEffect, useState } from "react";
import { resolveLocation, fetchCurrentWeather } from "../services/weatherService";

export function useWeather() {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { lat, lon, place } = await resolveLocation();
      try {
        const current = await fetchCurrentWeather(lat, lon);
        if (!cancelled) setState({ status: "ready", place, ...current });
      } catch {
        if (!cancelled) setState({ status: "error" });
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return state;
}
