export function EmptyState({ text }) {
  return (
    <div className="text-center py-7 px-3 text-ink-dim dark:text-ink-dim-dark font-sans text-sm border border-dashed border-line dark:border-line-dark rounded">
      {text}
    </div>
  );
}
