import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-4 font-mono text-sm text-emerald-400">
          Hi, I&apos;m{" "}
          <span className="inline-block animate-pulse">▋</span>
        </p>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          {personalInfo.name}
        </h1>

        <h2 className="mt-4 text-2xl font-medium text-slate-400 sm:text-3xl">
          {personalInfo.title}
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          7 years building scalable backend systems and full-stack applications
          with Node.js, React, and cloud-ready technologies.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#experience"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            View my work
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-500/50 hover:text-emerald-400"
          >
            Contact me
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-6 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {personalInfo.location}
          </span>
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {personalInfo.email}
          </span>
        </div>
      </div>
    </section>
  );
}
