export function IndexCard({ rotate = "", children, className = "", onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative bg-surface dark:bg-surface-dark border border-line dark:border-line-dark rounded-2xl shadow-sm transition-all duration-300 ${rotate} ${className}`}
    >
      {children}
    </div>
  );
}
