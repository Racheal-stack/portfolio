"use client";

import {
  coreCompetencies,
  education,
  experience,
  personalInfo,
  skillCategories,
} from "@/data/portfolio";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 print:bg-white">
      <div className="no-print fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
        <a href="/" className="text-sm text-slate-600 hover:text-slate-900">
          ← Back to portfolio
        </a>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Download / Print PDF
        </button>
      </div>

      <article className="mx-auto max-w-3xl px-6 py-16 print:max-w-none print:px-8 print:py-8">
        <header className="border-b border-slate-300 pb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            {personalInfo.name}
          </h1>
          <p className="mt-1 text-lg font-medium text-slate-700">
            {personalInfo.title}
          </p>
          <p className="mt-3 text-sm text-slate-600">
            {personalInfo.email} · {personalInfo.phone} · {personalInfo.location}
          </p>
          <p className="mt-2 text-sm">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900"
            >
              linkedin.com/in/racheal-joseph-9b6450297
            </a>
            {" · "}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900"
            >
              github.com/racheal-stack
            </a>
          </p>
        </header>

        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Profile
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            {personalInfo.profile} {personalInfo.profileExtended}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Core Competencies
          </h2>
          <ul className="mt-2 columns-2 gap-x-6 text-sm text-slate-700">
            {coreCompetencies.map((item) => (
              <li key={item} className="mb-1 break-inside-avoid">
                • {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Professional Experience
          </h2>
          <div className="mt-4 space-y-6">
            {experience.map((job, index) => (
              <div key={`${job.company}-${index}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">
                    {job.role} — {job.company}
                  </h3>
                  <span className="text-xs text-slate-500">
                    {job.period} · {job.location}
                  </span>
                </div>
                <ul className="mt-2 space-y-1">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-slate-700"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Technical Skills
          </h2>
          <div className="mt-3 space-y-3">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <p className="text-sm font-semibold text-slate-800">
                  {category.title}
                </p>
                <p className="text-sm text-slate-700">
                  {category.skills.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
            Education
          </h2>
          <div className="mt-3 space-y-2">
            {education.map((item) => (
              <div key={item.school}>
                <p className="text-sm font-semibold text-slate-800">
                  {item.degree}
                </p>
                <p className="text-sm text-slate-700">
                  {item.school} · {item.period} · {item.location}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
