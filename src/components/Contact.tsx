import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 pt-20 pb-8">
      <div className="rounded-3xl border border-[#6ea8fe]/20 bg-gradient-to-br from-[#6ea8fe]/10 via-transparent to-purple-600/10 p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s build something great
        </h2>
        <p className="mt-4 max-w-lg text-sm text-slate-400">
          Open to senior full-stack roles, consulting, and challenging
          engineering projects.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#6ea8fe] px-6 py-3 text-sm font-medium text-[#080c14] transition hover:bg-[#8bb8ff]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-[#6ea8fe]/50 hover:text-[#6ea8fe]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {personalInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
