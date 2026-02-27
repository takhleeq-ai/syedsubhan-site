import { cvProfile } from "@/content/cv";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-12 sm:px-6">
      {/* Hero / About */}
      <div id="about" className="flex flex-wrap items-start gap-6 scroll-mt-24">
        {cvProfile.profileImage && (
          <a
            href={cvProfile.linkedinUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <img
              src={cvProfile.profileImage}
              alt={cvProfile.name}
              className="h-20 w-20 rounded-full object-cover"
              width={80}
              height={80}
            />
          </a>
        )}

        <div>
          <p className="text-sm text-neutral-500">SyedSubhan.co.uk</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Syed Ahsan Subhan
          </h1>

          <p className="mt-3 text-lg text-neutral-700">
            Building thoughtful systems in FinTech &amp; Health.
          </p>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
            I care about how systems behave under pressure, and the people
            they’re built for.
          </p>
        </div>
      </div>

      {/* What I Care About */}
      <section id="care" className="mt-16 scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight">
          What I Care About
        </h2>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-[var(--foreground)]">
          <p>
            I care about the systems I help build, not just whether they ship,
            but whether they behave responsibly under real-world pressure. In
            regulated environments, small oversights become large problems.
            Thoughtfulness matters.
          </p>

          <p>
            I care about the people those systems serve. Payments, financial
            data, and health decisions are not abstract workflows. They affect
            real users. Good delivery means protecting both the platform and the
            person on the other side of it.
          </p>

          <p>
            I’m not afraid to ask difficult questions when something feels
            unclear, or to move quickly when something isn’t working. Failing
            early, adjusting deliberately, and learning in the open are part of
            building durable outcomes.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mt-16 scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-[var(--foreground)]">
          <p>
            My work sits inside regulated ecosystems, where delivery is never
            only technical. It’s alignment, integration, risk, and the patience
            to get details right.
          </p>

          <p>
            I’ve worked across payments and Open Banking, often between teams
            and partners, translating constraints into progress.
          </p>

          <p className="text-[var(--muted)]">
            The full detail is in my{" "}
            <Link
              href="/cv"
              className="underline underline-offset-4 hover:opacity-80"
            >
              interactive CV
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-16 scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>

        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          I build in public to learn deliberately.
        </p>

        <div className="mt-10 divide-y divide-[var(--border)]">
          <div className="py-8">
            <h3 className="text-lg font-medium">FinLens</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
              Open Banking transactions, categorisation, summaries, and
              reporting. Exploring how financial signals become usable insight.
            </p>
            <p className="mt-3 text-xs text-[var(--muted)]">
              Status: In progress
            </p>
          </div>

          <div className="py-8">
            <h3 className="text-lg font-medium">Questions for My Doctor</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]">
              A structured question generator for medical conversations. No
              diagnosis, no medical advice. Just preparation.
            </p>
            <p className="mt-3 text-xs text-[var(--muted)]">
              Status: Prototype
            </p>
          </div>
        </div>

        <Link
          href="/projects"
          className="mt-6 inline-block text-sm underline underline-offset-4 hover:opacity-80"
        >
          View projects page →
        </Link>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-16 scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>

        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          The simplest way to reach me is LinkedIn.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {cvProfile.linkedinUrl && (
            <a
              href={cvProfile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
            >
              Connect on LinkedIn →
            </a>
          )}

          <Link
            href="/cv"
            className="rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
          >
            View CV
          </Link>
        </div>
      </section>

      {/* Primary actions */}
      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          href="/architecting-intelligence"
          className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Read the series →
        </Link>

        <Link
          href="/cv"
          className="rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
        >
          Interactive CV
        </Link>

        {cvProfile.linkedinUrl && (
          <a
            href={cvProfile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
          >
            LinkedIn
          </a>
        )}
      </div>
    </main>
  );
}