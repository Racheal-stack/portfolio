import { experience } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience-heading"
          label="Experience"
          title="Professional journey"
          description="End-to-end ownership across backend systems, full-stack products, and engineering leadership."
        />

        <div className="relative space-y-8 before:absolute before:left-0 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-emerald-500/50 before:to-transparent md:before:left-[7.5rem]">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${index}`}
              className="relative grid gap-4 md:grid-cols-[7.5rem_1fr] md:gap-8"
            >
              <div className="md:text-right">
                <time className="font-mono text-xs text-emerald-400/80">
                  {job.period}
                </time>
                <p className="mt-1 text-xs text-slate-500">{job.location}</p>
              </div>

              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-emerald-500/30 hover:bg-white/[0.05] md:-ml-px md:border-l-emerald-500/20 md:pl-8">
                <div className="absolute -left-[5px] top-8 hidden h-2.5 w-2.5 rounded-full border-2 border-emerald-500 bg-slate-950 md:block" />

                <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                <p className="mt-1 text-emerald-400">{job.company}</p>

                <ul className="mt-4 space-y-2">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-slate-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
