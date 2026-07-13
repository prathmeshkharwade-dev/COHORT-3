import { useState } from "react";
import { Sparkles, RefreshCw } from "lucide-react";
import { Button } from "../shared/Button";
import { getRandomQuote } from "../../services/quotesService";

export function QuoteFeature() {
  const [entry, setEntry] = useState(() => getRandomQuote());
  const [loading, setLoading] = useState(false);

  const shuffle = () => {
    setLoading(true);
    setTimeout(() => {
      setEntry((prev) => getRandomQuote(prev.index));
      setLoading(false);
    }, 350);
  };

  return (
    <div className="flex flex-col items-center text-center py-8 px-4">
      <Sparkles size={26} className="text-accent dark:text-accent-dark mb-4" />
      {loading ? (
        <div className="text-ink-dim dark:text-ink-dim-dark font-sans">Finding some inspiration…</div>
      ) : (
        <>
          <div className="font-display text-2xl italic text-ink dark:text-ink-dark max-w-md leading-snug mb-3.5">
            &ldquo;{entry.quote}&rdquo;
          </div>
          <div className="text-ink-dim dark:text-ink-dim-dark font-sans text-[13px]">— {entry.author}</div>
        </>
      )}
      <Button primary className="mt-6" onClick={shuffle}>
        <RefreshCw size={15} /> New quote
      </Button>
    </div>
  );
}
