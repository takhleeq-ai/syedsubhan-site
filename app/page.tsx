import { cvProfile } from "@/content/cv";

export default function Home() {
  return (
    <main>
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
      <section
        id="focus"
        className="mt-16 max-w-2xl scroll-mt-24"
      >
        <h2 className="text-xl font-semibold tracking-tight">
          What I Care About
        </h2>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-[var(--foreground)]">
          <p>
            I care about the systems I help build, not just whether they ship,
            but whether they behave responsibly under real-world pressure.
            In regulated environments, small oversights become large problems.
            Thoughtfulness matters.
          </p>

          <p>
            I care about the people those systems serve. Payments, financial data,
            and health decisions are not abstract workflows. They affect real users.
            Good delivery means protecting both the platform and the person on the
            other side of it.
          </p>

          <p>
            I’m not afraid to ask difficult questions when something feels unclear,
            or to move quickly when something isn’t working. Failing early,
            adjusting deliberately, and learning in the open are part of building
            durable outcomes.
          </p>
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="/architecting-intelligence"
          className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Read the series →
        </a>

        <a
          href="/cv"
          className="rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
        >
          Interactive CV
        </a>

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