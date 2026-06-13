import { education } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="education-heading"
          label="Education"
          title="Academic background"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.school}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="font-mono text-xs text-emerald-400">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {item.degree}
              </h3>
              <p className="mt-1 text-slate-400">{item.school}</p>
              <p className="mt-1 text-sm text-slate-500">{item.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
