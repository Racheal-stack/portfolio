import { personalInfo } from "@/data/portfolio";
import DotGrid from "./DotGrid";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 lg:px-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb -left-20 top-0 h-[500px] w-[500px] bg-indigo-600/20" />
        <div className="glow-orb -right-20 bottom-0 h-[600px] w-[600px] bg-purple-700/15" />
        <div className="glow-orb left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/10" />
      </div>

      <DotGrid className="pointer-events-none absolute bottom-32 left-8 opacity-60 lg:left-16" />
      <DotGrid className="pointer-events-none absolute right-24 top-40 hidden opacity-40 md:grid" rows={4} cols={4} />

      <div className="relative mx-auto w-full max-w-7xl">
        <p className="mb-6 text-base text-slate-400">
          Hi, I&apos;m {personalInfo.name}!
        </p>

        <h1 className="max-w-4xl font-mono text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
          Innovative Software Solutions to Build Scalable{" "}
          <span className="gradient-text">{"{Systems}"}</span>
        </h1>

        <p className="mt-8 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {personalInfo.profile}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#about"
            className="rounded-full bg-[#6ea8fe] px-7 py-3 text-sm font-medium text-[#080c14] transition hover:bg-[#8bb8ff]"
          >
            About me
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:border-[#6ea8fe]/50 hover:text-[#6ea8fe]"
          >
            Let&apos;s talk
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
