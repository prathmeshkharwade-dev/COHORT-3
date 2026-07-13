import { IndexCard } from "../layout/IndexCard";

export function Tile({ tile, onOpen }) {
  const Icon = tile.Icon;
  return (
    <IndexCard
      rotate={tile.rotate}
      onClick={() => onOpen(tile.id)}
      className="p-6 cursor-pointer flex-1 min-w-[210px] hover:-translate-y-1 hover:shadow-md hover:border-accent/50 group"
    >
      <div className="w-10 h-10 rounded-full bg-base dark:bg-base-dark flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
        <Icon size={20} className="text-ink-dim dark:text-ink-dim-dark group-hover:text-accent transition-colors" />
      </div>
      <div className="font-display text-xl text-ink dark:text-ink-dark mb-1.5 font-semibold tracking-tight">{tile.title}</div>
      <div className="font-sans text-[13.5px] text-ink-dim dark:text-ink-dim-dark leading-relaxed">{tile.desc}</div>
    </IndexCard>
  );
}
