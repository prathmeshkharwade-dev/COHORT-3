import { DEFAULT_LOCATION } from "../utils/constants";

/**
 * Resolves the user's coordinates via the browser Geolocation API,
 * falling back to a fixed default city if permission is denied
 * or geolocation isn't available.
 */
export function resolveLocation() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({ lat: DEFAULT_LOCATION.lat, lon: DEFAULT_LOCATION.lon, place: DEFAULT_LOCATION.place });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude, place: "Your location" }),
      () => resolve({ lat: DEFAULT_LOCATION.lat, lon: DEFAULT_LOCATION.lon, place: DEFAULT_LOCATION.place }),
      { timeout: 6000 }
    );
  });
}

/**
 * Fetches current conditions from Open-Meteo (no API key required).
 * Throws on network/API failure so callers can show a fallback state.
 */
export async function fetchCurrentWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather request failed");
  const data = await res.json();
  return {
    temp: Math.round(data.current.temperature_2m),
    humidity: data.current.relative_humidity_2m,
    wind: Math.round(data.current.wind_speed_10m),
    code: data.current.weather_code,
  };
}
