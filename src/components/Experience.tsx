import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 pt-20">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Experience</h2>
      <p className="mt-4 max-w-xl text-sm text-slate-400">
        End-to-end ownership across backend systems, full-stack products, and
        engineering leadership.
      </p>

      <div className="mt-10 space-y-6">
        {experience.map((job, index) => (
          <article
            key={`${job.company}-${index}`}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition hover:border-[#6ea8fe]/20"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                <p className="mt-1 text-[#6ea8fe]">{job.company}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-slate-500">{job.period}</p>
                <p className="mt-1 text-xs text-slate-600">{job.location}</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {job.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-slate-400"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#6ea8fe]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
