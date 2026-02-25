export default function Home() {
  return (
    <main>
      <p className="text-sm text-neutral-500">SyedSubhan.co.uk</p>

      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        Syed Ahsan Subhan
      </h1>

      <p className="mt-3 text-lg text-neutral-700">
        Architecting Intelligence in FinTech &amp; Health
      </p>

      <p className="mt-6 text-neutral-700">
        Building AI systems that survive real-world constraints.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/architecting-intelligence"
          className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Read: Architecting Intelligence →
        </a>

        <a
          href="/cv"
          className="rounded-xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
        >
          Interactive CV
        </a>
      </div>
    </main>
  );
}