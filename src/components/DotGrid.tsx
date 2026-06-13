interface DotGridProps {
  className?: string;
  rows?: number;
  cols?: number;
}

export default function DotGrid({
  className = "",
  rows = 5,
  cols = 5,
}: DotGridProps) {
  return (
    <div
      className={`grid gap-2 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      aria-hidden
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          key={i}
          className="h-1 w-1 rounded-full bg-white/20"
        />
      ))}
    </div>
  );
}
