import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 pt-20">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
      <p className="mt-4 max-w-xl text-sm text-slate-400">
        From distributed backend systems to polished frontends and production
        DevOps.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
          >
            <h3 className="mb-4 font-semibold text-white">{category.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-white/[0.08] bg-[#080c14]/60 px-3 py-1 text-xs text-slate-400"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
