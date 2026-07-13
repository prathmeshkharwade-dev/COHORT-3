export function pad(n) {
  return String(n).padStart(2, "0");
}

export const SEGMENTS = {
  dawn: { glow: "#FF9E6B", label: "Dawn" },
  morning: { glow: "#FFD873", label: "Morning" },
  midday: { glow: "#8FC7FF", label: "Midday" },
  afternoon: { glow: "#FFC98A", label: "Afternoon" },
  evening: { glow: "#FF7E8A", label: "Evening" },
  night: { glow: "#4E5EA8", label: "Night" },
};

export function daySegment(hour) {
  if (hour >= 5 && hour < 8) return "dawn";
  if (hour >= 8 && hour < 11) return "morning";
  if (hour >= 11 && hour < 15) return "midday";
  if (hour >= 15 && hour < 18) return "afternoon";
  if (hour >= 18 && hour < 21) return "evening";
  return "night";
}

export function formatClock(now) {
  const hours12 = now.getHours() % 12 || 12;
  return {
    time: `${pad(hours12)}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`,
    ampm: now.getHours() >= 12 ? "PM" : "AM",
    date: now.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" }),
  };
}

export function formatHourLabel(h) {
  if (h === 12) return "12 PM";
  return h > 12 ? `${h - 12} PM` : `${h} AM`;
}

export function formatCountdown(secondsLeft) {
  return `${pad(Math.floor(secondsLeft / 60))}:${pad(secondsLeft % 60)}`;
}
