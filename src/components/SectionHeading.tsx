interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  id,
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p
        id={id}
        className="mb-2 font-mono text-sm uppercase tracking-widest text-emerald-400"
      >
        {label}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-slate-400">{description}</p>
      )}
    </div>
  );
}
