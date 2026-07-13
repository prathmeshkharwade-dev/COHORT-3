import { QUOTES } from "../utils/constants";

/**
 * Returns a random quote different from the previous index where possible.
 * Kept as a local, curated set rather than calling a third-party quote API —
 * those are frequently down or CORS-blocked, which would break this feature
 * for no real benefit.
 */
export function getRandomQuote(previousIndex = -1) {
  if (QUOTES.length <= 1) return { index: 0, quote: QUOTES[0][0], author: QUOTES[0][1] };
  let next = previousIndex;
  while (next === previousIndex) next = Math.floor(Math.random() * QUOTES.length);
  const [quote, author] = QUOTES[next];
  return { index: next, quote, author };
}
