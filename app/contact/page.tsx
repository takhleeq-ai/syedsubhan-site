import { cvProfile } from "@/content/cv";

export const metadata = {
  title: "Contact — Syed Ahsan Subhan",
  description: "Get in touch for professional inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-3 text-neutral-700">
        Add your email and LinkedIn here when ready.
      </p>

      <div className="mt-6 space-y-2 text-neutral-700">
        <p>
          Email: <span className="text-neutral-500">{cvProfile.email}</span>
        </p>
        <p>
          LinkedIn: <span className="text-neutral-500">{cvProfile.linkedinUrl && (
          <p>
            <a
              href={cvProfile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-80"
            >
              LinkedIn
            </a>
          </p>
        )}</span>
        </p>
      </div>
    </main>
  );
}