export function Button({ primary, className = "", children, ...props }) {
  const base = "flex items-center gap-1.5 px-4 py-2.5 rounded font-sans text-sm font-medium whitespace-nowrap border transition-colors";
  const style = primary
    ? "bg-accent dark:bg-accent-dark text-base dark:text-base-dark border-accent dark:border-accent-dark"
    : "bg-transparent text-ink dark:text-ink-dark border-line dark:border-line-dark hover:bg-black/5 dark:hover:bg-white/5";
  return (
    <button className={`${base} ${style} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function IconButton({ color = "default", className = "", children, ...props }) {
  const colorMap = {
    default: "text-ink-dim dark:text-ink-dim-dark",
    accent: "text-accent dark:text-accent-dark",
    accent2: "text-accent2 dark:text-accent2-dark",
    danger: "text-danger dark:text-danger-dark",
    ink: "text-ink dark:text-ink-dark",
  };
  return (
    <button
      className={`flex items-center justify-center w-7 h-7 rounded shrink-0 bg-transparent border-none ${colorMap[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
