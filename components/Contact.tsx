// TODO: replace with your real contact details
const EMAIL = "chappel.emily@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/your-handle";
const LINKEDIN_LABEL = "/in/your-handle";

export default function Contact() {
  return (
    <section id="contact" className="px-4 pb-24 pt-4 sm:px-8 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <span className="text-[11px] font-medium uppercase tracking-widest2 text-ink/40">
          04 / Contact
        </span>

        <h2 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
          Let&apos;s
          <br />
          connect.
        </h2>

        <div className="mt-12 flex flex-col gap-6 sm:mt-16 sm:flex-row sm:items-center sm:gap-12">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-baseline gap-3 text-lg text-ink sm:text-xl"
          >
            <span className="text-[10px] font-medium uppercase tracking-widest2 text-ink/40">
              Email
            </span>
            <span className="border-b border-ink/20 pb-0.5 font-display italic transition-colors group-hover:border-ink">
              {EMAIL}
            </span>
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-baseline gap-3 text-lg text-ink sm:text-xl"
          >
            <span className="text-[10px] font-medium uppercase tracking-widest2 text-ink/40">
              LinkedIn
            </span>
            <span className="border-b border-ink/20 pb-0.5 font-display italic transition-colors group-hover:border-ink">
              {LINKEDIN_LABEL}
            </span>
          </a>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-7xl">
        <div className="h-px w-full bg-line" />
        <div className="mt-8 flex flex-col gap-2 text-[11px] uppercase tracking-widest2 text-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Emily Chappel</span>
          <span>HKU &times; UBC — Dual Degree, Finance &amp; Accounting</span>
        </div>
      </div>
    </section>
  );
}
