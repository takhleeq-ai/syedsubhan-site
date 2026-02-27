"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function StatChip({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
      <p className="text-xs text-[var(--muted)]">{label}</p>
      <p className="mt-2 text-sm font-medium leading-snug text-[var(--foreground)]">
        {value}
      </p>
    </div>
  );
}

function SchemePill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1 text-xs text-[var(--muted)]">
      {text}
    </span>
  );
}

function ImpactBand() {
  return (
    <div className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--background)] p-5">
      <p className="text-xs text-[var(--muted)]">Vanilla PSP implementation</p>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-2">
        <span className="text-2xl font-semibold tracking-tight">4–6 months</span>
        <span className="text-[var(--muted)]">→</span>
        <span className="text-2xl font-semibold tracking-tight">6–8 weeks</span>
      </div>

      <p className="mt-3 text-sm text-[var(--muted)]">
        Time-to-launch compression through standardised enablement, SDK integration,
        and scheme validation alignment.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <SchemePill text="Domestic schemes: girocard (DE) · CB (FR)" />
        <SchemePill text="KSA: mada alignment" />
      </div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <motion.section
      id="selected-work"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-16 scroll-mt-24"
    >
      <motion.h2 variants={fadeUp} className="text-xl font-semibold tracking-tight">
        Selected Work
      </motion.h2>

      <motion.p variants={fadeUp} className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
        A small set of highlights where scheme complexity, delivery discipline, and
        ecosystem scale all meet.
      </motion.p>

      {/* Apple (primary story) */}
      <motion.div
        variants={fadeUp}
        className="mt-8 rounded-3xl border border-[var(--border)] bg-neutral-50 p-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs text-[var(--muted)]">Apple</p>
            <h3 className="mt-1 text-lg font-semibold tracking-tight">
              Tap to Pay on iPhone
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <SchemePill text="girocard (DE)" />
            <SchemePill text="CB (FR)" />
            <SchemePill text="mada (KSA)" />
          </div>
        </div>

        <ImpactBand />

        <div className="mt-6  space-y-5 text-sm leading-relaxed text-[var(--foreground)]">
          <p>
            Led and supported PSP ecosystem enablement across <strong>40+ European markets</strong>,
            contributing to hardware-free contactless acceptance through Tap to Pay on iPhone.
          </p>

          <p>
            Worked across domestic schemes including <strong>girocard (DE)</strong> and{" "}
            <strong>Cartes Bancaires (FR)</strong>, alongside global networks, before supporting
            expansion into <strong>Saudi Arabia (KSA)</strong> through alignment with{" "}
            <strong>mada</strong> and regional enablement requirements.
          </p>

          <p>
            Standardised vanilla PSP integrations reduced launch timelines from{" "}
            <strong>4–6 months</strong> to <strong>6–8 weeks</strong>, transferring European
            operational discipline into high-growth Middle Eastern markets.
          </p>
        </div>

        {/* Stat strip (wrapped grid on mobile) */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <StatChip label="Markets" value="40+ European markets + KSA expansion" />
          <StatChip label="Time-to-launch (vanilla)" value="4–6 months → 6–8 weeks" />
          <StatChip
            label="Tier-1 PSP exposure"
            value="Adyen (€900B+) · Stripe ($1T+) · Worldline (€600B+) · Nexi (€200B+)"
          />
          <StatChip label="Scale signals" value="4M+ merchants | 40M+ users" />
        </div>

        <div className="mt-5">
          <Link
            href="/cv"
            className="text-sm underline underline-offset-4 hover:opacity-80"
          >
            See full detail in CV →
          </Link>
        </div>
      </motion.div>

      {/* Lloyds (institutional counterweight) */}
      <motion.div
        variants={fadeUp}
        className="mt-6 rounded-3xl border border-[var(--border)] bg-[var(--background)] p-5"
      >
        <p className="text-xs text-[var(--muted)]">Lloyds Banking Group</p>
        <h3 className="mt-1 text-lg font-semibold tracking-tight">
          API & Platform Delivery
        </h3>

        <div className="mt-5 space-y-5 text-sm leading-relaxed text-[var(--foreground)]">
          <p>
            Delivered API-driven platform components supporting products such as{" "}
            <strong>Black Horse FlexPay</strong>, focused on improved customer journeys and outcomes.
          </p>

          <p>
            Built within regulated UK banking environments impacting <strong>20M+ customers</strong>,
            in a group serving approximately <strong>1 in 3 UK banking customers</strong>.
          </p>

          <p className="text-[var(--muted)]">
            Enterprise governance discipline, applied with delivery momentum.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <StatChip label="Customer scale" value="20M+ customers | ~1 in 3 UK banking customers" />
          <StatChip label="Product impact signal" value="Multi-million-pound product spend (FlexPay)" />
        </div>
      </motion.div>
    </motion.section>
  );
}