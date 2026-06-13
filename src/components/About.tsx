import {
  coreCompetencies,
  featureCards,
  personalInfo,
  skillProgress,
  stats,
} from "@/data/portfolio";

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    server: (
      <svg className="h-5 w-5 text-[#6ea8fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    layers: (
      <svg className="h-5 w-5 text-[#6ea8fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    cloud: (
      <svg className="h-5 w-5 text-[#6ea8fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  };
  return icons[type] ?? icons.server;
}

export default function About() {
  return (
    <section id="about" className="scroll-mt-28">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>

      <p className="mt-6 text-lg text-slate-300">
        I&apos;m {personalInfo.name}, a senior full stack{" "}
        <span className="font-mono gradient-text">{"{developer}"}</span>
      </p>

      <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
        {personalInfo.profile}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
        {personalInfo.profileExtended}
      </p>

      <div className="mt-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-widest text-slate-500">
          Core stack
        </p>
        <ul className="flex flex-wrap gap-2">
          {coreCompetencies.map((item) => (
            <li
              key={item}
              className="rounded-full border border-[#6ea8fe]/20 bg-[#6ea8fe]/5 px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-5"
          >
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featureCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5"
          >
            <FeatureIcon type={card.icon} />
            <h3 className="mt-3 font-semibold text-white">{card.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-4">
        {skillProgress.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-300">{skill.name}</span>
              <span className="text-slate-500">{skill.level}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#6ea8fe] to-[#a78bfa]"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
