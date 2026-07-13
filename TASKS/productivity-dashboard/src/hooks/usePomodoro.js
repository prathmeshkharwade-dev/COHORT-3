import { useEffect, useRef, useState } from "react";
import { WORK_SECS, BREAK_SECS } from "../utils/constants";

export function usePomodoro() {
  const [session, setSession] = useState("work");
  const [secondsLeft, setSecondsLeft] = useState(WORK_SECS);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!running) {
      clearInterval(intervalRef.current);
      return;
    }
    clearInterval(intervalRef.current); // guard: never allow two intervals at once
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setRunning(false);
          setSession((s) => {
            const nextSession = s === "work" ? "break" : "work";
            setSecondsLeft(nextSession === "work" ? WORK_SECS : BREAK_SECS);
            return nextSession;
          });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [running]);

  const toggleRunning = () => setRunning((r) => !r);

  const reset = () => {
    setRunning(false);
    setSecondsLeft(session === "work" ? WORK_SECS : BREAK_SECS);
  };

  const switchSession = (s) => {
    setRunning(false);
    setSession(s);
    setSecondsLeft(s === "work" ? WORK_SECS : BREAK_SECS);
  };

  const total = session === "work" ? WORK_SECS : BREAK_SECS;
  const progress = 1 - secondsLeft / total;

  return { session, secondsLeft, running, progress, toggleRunning, reset, switchSession };
}
