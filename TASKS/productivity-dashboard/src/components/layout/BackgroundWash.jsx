import { SEGMENTS } from "../../utils/time";

/**
 * Renders a soft radial glow, colored by the current time-of-day segment,
 * only at the page edges — card surfaces stay solid so text stays readable
 * against any background.
 */
export function BackgroundWash({ segment }) {
  const glow = SEGMENTS[segment].glow;
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none bg-base dark:bg-base-dark transition-colors duration-[1200ms]"
    >
      <div
        className="absolute inset-0 transition-[background] duration-[1200ms]"
        style={{
          background: `radial-gradient(680px 480px at 8% -8%, ${glow}55, transparent 60%),
                       radial-gradient(760px 560px at 104% 110%, ${glow}40, transparent 60%)`,
        }}
      />
    </div>
  );
}
