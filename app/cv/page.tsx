import {
  cvProfile,
  cvEducation,
  cvExperience,
  cvCertifications,
} from "@/content/cv";

export const metadata = {
  title: "CV — Syed Ahsan Subhan",
  description: "Professional experience and expertise.",
};

export default function CVPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-12 sm:px-6">
      <a
        href="/"
        className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)]"
      >
        ← Back to home
      </a>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">CV</h1>
      <p className="mt-2 text-[var(--muted)]">
        Interactive resume and professional timeline.
      </p>

      {/* Profile */}
      <section className="mt-10 border-t border-[var(--border)] pt-8">
        <h2 className="text-lg font-semibold tracking-tight">Profile</h2>
        <div className="mt-4 flex flex-wrap items-start gap-6">
          {cvProfile.profileImage && (
            <img
              src={cvProfile.profileImage}
              alt={cvProfile.name}
              className="h-24 w-24 rounded-full object-cover"
              width={96}
              height={96}
            />
          )}
          <div className="min-w-0 flex-1">
            <p className="font-medium text-[var(--foreground)]">
              {cvProfile.headline}
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              {cvProfile.location}
            </p>
            <a
              href={`mailto:${cvProfile.email}`}
              className="mt-1 inline-block text-sm text-[var(--foreground)] underline underline-offset-4 hover:opacity-80"
            >
              {cvProfile.email}
            </a>
            {cvProfile.linkedinUrl && (
              <a
                href={cvProfile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm text-[var(--foreground)] underline underline-offset-4 hover:opacity-80"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[var(--foreground)]">
          {cvProfile.summary}
        </p>
      </section>

      {/* Experience */}
      <section className="mt-10 border-t border-[var(--border)] pt-8">
        <h2 className="text-lg font-semibold tracking-tight">
          Professional Experience
        </h2>
        <div className="mt-6 space-y-10">
          {cvExperience.map((job) => (
            <div key={`${job.company}-${job.role}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="font-medium text-[var(--foreground)]">
                    {job.company}
                  </p>
                  <p className="text-sm text-[var(--foreground)]">{job.role}</p>
                  {job.subRole && (
                    <p className="mt-0.5 text-xs text-[var(--muted)]">
                      {job.subRole}
                    </p>
                  )}
                </div>
                {job.dates && (
                  <p className="text-sm text-[var(--muted)]">{job.dates}</p>
                )}
              </div>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-[var(--foreground)]">
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-10 border-t border-[var(--border)] pt-8">
        <h2 className="text-lg font-semibold tracking-tight">Education</h2>
        <ul className="mt-4 space-y-3 text-sm text-[var(--foreground)]">
          {cvEducation.map((edu) => (
            <li key={edu.degree}>
              <span className="font-medium">{edu.degree}</span>
              <span className="text-[var(--muted)]"> – {edu.institution}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications */}
      <section className="mt-10 border-t border-[var(--border)] pt-8">
        <h2 className="text-lg font-semibold tracking-tight">
          Certifications
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-[var(--foreground)]">
          {cvCertifications.map((cert) => (
            <li key={cert.name}>
              {cert.name}
              {cert.issuer && (
                <span className="text-[var(--muted)]"> – {cert.issuer}</span>
              )}
              {cert.note && (
                <span className="text-[var(--muted)]"> ({cert.note})</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Download PDF link - optional, works if PDF is in public */}
      <section className="mt-10 border-t border-[var(--border)] pt-8">
        <a
          href="/Syed-Ahsan-Subhan-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--foreground)]"
        >
          Download PDF
        </a>
      </section>
    </div>
  );
}
