import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-28 pt-20">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Education</h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.school}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
          >
            <p className="font-mono text-xs text-[#6ea8fe]">{item.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {item.degree}
            </h3>
            <p className="mt-1 text-slate-400">{item.school}</p>
            <p className="mt-1 text-sm text-slate-500">{item.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
