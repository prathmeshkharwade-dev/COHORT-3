import { ListChecks, CalendarClock, Sparkles, Timer, Target, Sun, CloudSun, Cloud, CloudFog, CloudRain, CloudSnow, CloudLightning } from "lucide-react";

export const STORAGE_KEYS = {
  todos: "daybook:todos",
  plan: "daybook:plan",
  goals: "daybook:goals",
  theme: "daybook:theme",
};

export const TILES = [
  { id: "todo", title: "Todo List", desc: "Capture and clear today's tasks", Icon: ListChecks, rotate: "-rotate-1" },
  { id: "planner", title: "Daily Planner", desc: "Slot your day, hour by hour", Icon: CalendarClock, rotate: "rotate-[0.5deg]" },
  { id: "quote", title: "Motivation", desc: "A line to carry into the day", Icon: Sparkles, rotate: "-rotate-[0.4deg]" },
  { id: "pomodoro", title: "Focus Timer", desc: "25 on, 5 off — Pomodoro style", Icon: Timer, rotate: "rotate-1" },
  { id: "goals", title: "Daily Goals", desc: "Name it, chase it, check it off", Icon: Target, rotate: "-rotate-[0.6deg]" },
];

export const HOURS = Array.from({ length: 15 }, (_, i) => i + 7); // 7am - 9pm

export const WORK_SECS = 25 * 60;
export const BREAK_SECS = 5 * 60;

export const QUOTES = [
  ["Small steps every day beat big plans on paper.", "Unknown"],
  ["Discipline is choosing between what you want now and what you want most.", "Abraham Lincoln"],
  ["Done is better than perfect.", "Sheryl Sandberg"],
  ["Focus on being productive instead of busy.", "Tim Ferriss"],
  ["The secret of getting ahead is getting started.", "Mark Twain"],
  ["You don't have to see the whole staircase, just take the first step.", "Martin Luther King Jr."],
  ["Well begun is half done.", "Aristotle"],
  ["Action is the foundational key to all success.", "Pablo Picasso"],
  ["What you do today can improve all your tomorrows.", "Ralph Marston"],
  ["A year from now you'll wish you had started today.", "Karen Lamb"],
  ["Slow progress is still progress.", "Unknown"],
  ["Motivation gets you going, discipline keeps you growing.", "John C. Maxwell"],
];

export const WEATHER_CODES = {
  0: { label: "Clear sky", Icon: Sun },
  1: { label: "Mostly clear", Icon: CloudSun },
  2: { label: "Partly cloudy", Icon: CloudSun },
  3: { label: "Overcast", Icon: Cloud },
  45: { label: "Fog", Icon: CloudFog },
  48: { label: "Fog", Icon: CloudFog },
  51: { label: "Light drizzle", Icon: CloudRain },
  53: { label: "Drizzle", Icon: CloudRain },
  55: { label: "Heavy drizzle", Icon: CloudRain },
  61: { label: "Light rain", Icon: CloudRain },
  63: { label: "Rain", Icon: CloudRain },
  65: { label: "Heavy rain", Icon: CloudRain },
  71: { label: "Light snow", Icon: CloudSnow },
  73: { label: "Snow", Icon: CloudSnow },
  75: { label: "Heavy snow", Icon: CloudSnow },
  80: { label: "Rain showers", Icon: CloudRain },
  81: { label: "Rain showers", Icon: CloudRain },
  82: { label: "Violent showers", Icon: CloudRain },
  95: { label: "Thunderstorm", Icon: CloudLightning },
  96: { label: "Thunderstorm", Icon: CloudLightning },
  99: { label: "Thunderstorm", Icon: CloudLightning },
};

export const DEFAULT_LOCATION = { lat: 19.076, lon: 72.8777, place: "Mumbai (default)" };
