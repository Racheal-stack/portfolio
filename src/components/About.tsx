import { personalInfo } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "5", label: "Companies" },
  { value: "Full", label: "Stack Ownership" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about-heading"
          label="About"
          title="Building systems that scale"
        />

        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-slate-300">
              {personalInfo.profile}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-3xl font-bold text-emerald-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
